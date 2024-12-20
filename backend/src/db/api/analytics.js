const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class AnalyticsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const analytics = await db.analytics.create(
      {
        id: data.id || undefined,

        engagement_rate: data.engagement_rate || null,
        completion_rate: data.completion_rate || null,
        instructor_performance: data.instructor_performance || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await analytics.setCourse(data.course || null, {
      transaction,
    });

    return analytics;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const analyticsData = data.map((item, index) => ({
      id: item.id || undefined,

      engagement_rate: item.engagement_rate || null,
      completion_rate: item.completion_rate || null,
      instructor_performance: item.instructor_performance || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const analytics = await db.analytics.bulkCreate(analyticsData, {
      transaction,
    });

    // For each item created, replace relation files

    return analytics;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const analytics = await db.analytics.findByPk(id, {}, { transaction });

    await analytics.update(
      {
        engagement_rate: data.engagement_rate || null,
        completion_rate: data.completion_rate || null,
        instructor_performance: data.instructor_performance || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await analytics.setCourse(data.course || null, {
      transaction,
    });

    return analytics;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const analytics = await db.analytics.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of analytics) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of analytics) {
        await record.destroy({ transaction });
      }
    });

    return analytics;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const analytics = await db.analytics.findByPk(id, options);

    await analytics.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await analytics.destroy({
      transaction,
    });

    return analytics;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const analytics = await db.analytics.findOne({ where }, { transaction });

    if (!analytics) {
      return analytics;
    }

    const output = analytics.get({ plain: true });

    output.course = await analytics.getCourse({
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
        model: db.courses,
        as: 'course',
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.engagement_rateRange) {
        const [start, end] = filter.engagement_rateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            engagement_rate: {
              ...where.engagement_rate,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            engagement_rate: {
              ...where.engagement_rate,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.completion_rateRange) {
        const [start, end] = filter.completion_rateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            completion_rate: {
              ...where.completion_rate,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            completion_rate: {
              ...where.completion_rate,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.instructor_performanceRange) {
        const [start, end] = filter.instructor_performanceRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            instructor_performance: {
              ...where.instructor_performance,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            instructor_performance: {
              ...where.instructor_performance,
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

      if (filter.course) {
        const listItems = filter.course.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          courseId: { [Op.or]: listItems },
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
          count: await db.analytics.count({
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
      : await db.analytics.findAndCountAll({
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
          Utils.ilike('analytics', 'course', query),
        ],
      };
    }

    const records = await db.analytics.findAll({
      attributes: ['id', 'course'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['course', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.course,
    }));
  }
};
