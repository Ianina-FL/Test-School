const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class StudentsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const students = await db.students.create(
      {
        id: data.id || undefined,

        progress: data.progress || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await students.setUser(data.user || null, {
      transaction,
    });

    await students.setEnrollments(data.enrollments || [], {
      transaction,
    });

    return students;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const studentsData = data.map((item, index) => ({
      id: item.id || undefined,

      progress: item.progress || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const students = await db.students.bulkCreate(studentsData, {
      transaction,
    });

    // For each item created, replace relation files

    return students;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const students = await db.students.findByPk(id, {}, { transaction });

    await students.update(
      {
        progress: data.progress || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await students.setUser(data.user || null, {
      transaction,
    });

    await students.setEnrollments(data.enrollments || [], {
      transaction,
    });

    return students;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const students = await db.students.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of students) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of students) {
        await record.destroy({ transaction });
      }
    });

    return students;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const students = await db.students.findByPk(id, options);

    await students.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await students.destroy({
      transaction,
    });

    return students;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const students = await db.students.findOne({ where }, { transaction });

    if (!students) {
      return students;
    }

    const output = students.get({ plain: true });

    output.enrollments_student = await students.getEnrollments_student({
      transaction,
    });

    output.user = await students.getUser({
      transaction,
    });

    output.enrollments = await students.getEnrollments({
      transaction,
    });

    return output;
  }

  static async findAll(filter, options) {
    const limit = filter.limit || 0;
    let offset = 0;
    const currentPage = +filter.page;

    offset = currentPage * limit;

    const orderBy = null;

    const transaction = (options && options.transaction) || undefined;
    let where = {};
    let include = [
      {
        model: db.users,
        as: 'user',
      },

      {
        model: db.enrollments,
        as: 'enrollments',
        through: filter.enrollments
          ? {
              where: {
                [Op.or]: filter.enrollments.split('|').map((item) => {
                  return { ['Id']: Utils.uuid(item) };
                }),
              },
            }
          : null,
        required: filter.enrollments ? true : null,
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.progressRange) {
        const [start, end] = filter.progressRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            progress: {
              ...where.progress,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            progress: {
              ...where.progress,
              [Op.lte]: end,
            },
          };
        }
      }

      if (
        filter.active === true ||
        filter.active === 'true' ||
        filter.active === false ||
        filter.active === 'false'
      ) {
        where = {
          ...where,
          active: filter.active === true || filter.active === 'true',
        };
      }

      if (filter.user) {
        const listItems = filter.user.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          userId: { [Op.or]: listItems },
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let { rows, count } = options?.countOnly
      ? {
          rows: [],
          count: await db.students.count({
            where,
            include,
            distinct: true,
            limit: limit ? Number(limit) : undefined,
            offset: offset ? Number(offset) : undefined,
            order:
              filter.field && filter.sort
                ? [[filter.field, filter.sort]]
                : [['createdAt', 'desc']],
            transaction,
          }),
        }
      : await db.students.findAndCountAll({
          where,
          include,
          distinct: true,
          limit: limit ? Number(limit) : undefined,
          offset: offset ? Number(offset) : undefined,
          order:
            filter.field && filter.sort
              ? [[filter.field, filter.sort]]
              : [['createdAt', 'desc']],
          transaction,
        });

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit) {
    let where = {};

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: Utils.uuid(query) },
          Utils.ilike('students', 'user', query),
        ],
      };
    }

    const records = await db.students.findAll({
      attributes: ['id', 'user'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['user', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.user,
    }));
  }
};
