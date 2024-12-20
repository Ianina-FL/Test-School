const db = require('../models');
const Users = db.users;

const Analytics = db.analytics;

const Courses = db.courses;

const DiscussionBoards = db.discussion_boards;

const Enrollments = db.enrollments;

const Instructors = db.instructors;

const Students = db.students;

const AnalyticsData = [
  {
    // type code here for "relation_one" field

    engagement_rate: 80,

    completion_rate: 70,

    instructor_performance: 85,
  },

  {
    // type code here for "relation_one" field

    engagement_rate: 90,

    completion_rate: 95,

    instructor_performance: 88,
  },

  {
    // type code here for "relation_one" field

    engagement_rate: 75,

    completion_rate: 60,

    instructor_performance: 80,
  },

  {
    // type code here for "relation_one" field

    engagement_rate: 85,

    completion_rate: 90,

    instructor_performance: 92,
  },

  {
    // type code here for "relation_one" field

    engagement_rate: 78,

    completion_rate: 85,

    instructor_performance: 87,
  },
];

const CoursesData = [
  {
    title: 'Introduction to Programming',

    syllabus: 'Basic programming concepts and syntax.',

    // type code here for "files" field

    // type code here for "relation_many" field
  },

  {
    title: 'Advanced Mathematics',

    syllabus: 'In-depth study of calculus and algebra.',

    // type code here for "files" field

    // type code here for "relation_many" field
  },

  {
    title: 'Data Science Fundamentals',

    syllabus: 'Introduction to data analysis and machine learning.',

    // type code here for "files" field

    // type code here for "relation_many" field
  },

  {
    title: 'Creative Writing',

    syllabus: 'Exploring various writing styles and techniques.',

    // type code here for "files" field

    // type code here for "relation_many" field
  },

  {
    title: 'Business Management',

    syllabus: 'Principles of effective business management.',

    // type code here for "files" field

    // type code here for "relation_many" field
  },
];

const DiscussionBoardsData = [
  {
    // type code here for "relation_one" field

    topic: 'Week 1: Basics',

    // type code here for "relation_many" field
  },

  {
    // type code here for "relation_one" field

    topic: 'Calculus Discussion',

    // type code here for "relation_many" field
  },

  {
    // type code here for "relation_one" field

    topic: 'Data Analysis Techniques',

    // type code here for "relation_many" field
  },

  {
    // type code here for "relation_one" field

    topic: 'Poetry Workshop',

    // type code here for "relation_many" field
  },

  {
    // type code here for "relation_one" field

    topic: 'Leadership Skills',

    // type code here for "relation_many" field
  },
];

const EnrollmentsData = [
  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'failed',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'paid',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'failed',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'paid',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'failed',
  },
];

const InstructorsData = [
  {
    // type code here for "relation_one" field

    qualifications: 'PhD in Literature',

    // type code here for "relation_many" field
  },

  {
    // type code here for "relation_one" field

    qualifications: 'MSc in Mathematics',

    // type code here for "relation_many" field
  },

  {
    // type code here for "relation_one" field

    qualifications: 'BSc in Computer Science',

    // type code here for "relation_many" field
  },

  {
    // type code here for "relation_one" field

    qualifications: 'MBA',

    // type code here for "relation_many" field
  },

  {
    // type code here for "relation_one" field

    qualifications: 'BSc in Education',

    // type code here for "relation_many" field
  },
];

const StudentsData = [
  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    progress: 75.5,
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    progress: 90,
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    progress: 60,
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    progress: 85,
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    progress: 95,
  },
];

// Similar logic for "relation_many"

async function associateAnalyticWithCourse() {
  const relatedCourse0 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic0 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Analytic0?.setCourse) {
    await Analytic0.setCourse(relatedCourse0);
  }

  const relatedCourse1 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic1 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Analytic1?.setCourse) {
    await Analytic1.setCourse(relatedCourse1);
  }

  const relatedCourse2 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic2 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Analytic2?.setCourse) {
    await Analytic2.setCourse(relatedCourse2);
  }

  const relatedCourse3 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic3 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Analytic3?.setCourse) {
    await Analytic3.setCourse(relatedCourse3);
  }

  const relatedCourse4 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic4 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Analytic4?.setCourse) {
    await Analytic4.setCourse(relatedCourse4);
  }
}

// Similar logic for "relation_many"

async function associateDiscussionBoardWithCourse() {
  const relatedCourse0 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard0 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (DiscussionBoard0?.setCourse) {
    await DiscussionBoard0.setCourse(relatedCourse0);
  }

  const relatedCourse1 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard1 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (DiscussionBoard1?.setCourse) {
    await DiscussionBoard1.setCourse(relatedCourse1);
  }

  const relatedCourse2 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard2 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (DiscussionBoard2?.setCourse) {
    await DiscussionBoard2.setCourse(relatedCourse2);
  }

  const relatedCourse3 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard3 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (DiscussionBoard3?.setCourse) {
    await DiscussionBoard3.setCourse(relatedCourse3);
  }

  const relatedCourse4 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard4 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (DiscussionBoard4?.setCourse) {
    await DiscussionBoard4.setCourse(relatedCourse4);
  }
}

// Similar logic for "relation_many"

async function associateEnrollmentWithStudent() {
  const relatedStudent0 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment0 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Enrollment0?.setStudent) {
    await Enrollment0.setStudent(relatedStudent0);
  }

  const relatedStudent1 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment1 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Enrollment1?.setStudent) {
    await Enrollment1.setStudent(relatedStudent1);
  }

  const relatedStudent2 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment2 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Enrollment2?.setStudent) {
    await Enrollment2.setStudent(relatedStudent2);
  }

  const relatedStudent3 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment3 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Enrollment3?.setStudent) {
    await Enrollment3.setStudent(relatedStudent3);
  }

  const relatedStudent4 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment4 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Enrollment4?.setStudent) {
    await Enrollment4.setStudent(relatedStudent4);
  }
}

async function associateEnrollmentWithCourse() {
  const relatedCourse0 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment0 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Enrollment0?.setCourse) {
    await Enrollment0.setCourse(relatedCourse0);
  }

  const relatedCourse1 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment1 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Enrollment1?.setCourse) {
    await Enrollment1.setCourse(relatedCourse1);
  }

  const relatedCourse2 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment2 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Enrollment2?.setCourse) {
    await Enrollment2.setCourse(relatedCourse2);
  }

  const relatedCourse3 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment3 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Enrollment3?.setCourse) {
    await Enrollment3.setCourse(relatedCourse3);
  }

  const relatedCourse4 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment4 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Enrollment4?.setCourse) {
    await Enrollment4.setCourse(relatedCourse4);
  }
}

async function associateInstructorWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Instructor0 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Instructor0?.setUser) {
    await Instructor0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Instructor1 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Instructor1?.setUser) {
    await Instructor1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Instructor2 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Instructor2?.setUser) {
    await Instructor2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Instructor3 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Instructor3?.setUser) {
    await Instructor3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Instructor4 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Instructor4?.setUser) {
    await Instructor4.setUser(relatedUser4);
  }
}

// Similar logic for "relation_many"

async function associateStudentWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Student0 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Student0?.setUser) {
    await Student0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Student1 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Student1?.setUser) {
    await Student1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Student2 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Student2?.setUser) {
    await Student2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Student3 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Student3?.setUser) {
    await Student3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Student4 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Student4?.setUser) {
    await Student4.setUser(relatedUser4);
  }
}

// Similar logic for "relation_many"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Analytics.bulkCreate(AnalyticsData);

    await Courses.bulkCreate(CoursesData);

    await DiscussionBoards.bulkCreate(DiscussionBoardsData);

    await Enrollments.bulkCreate(EnrollmentsData);

    await Instructors.bulkCreate(InstructorsData);

    await Students.bulkCreate(StudentsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateAnalyticWithCourse(),

      // Similar logic for "relation_many"

      await associateDiscussionBoardWithCourse(),

      // Similar logic for "relation_many"

      await associateEnrollmentWithStudent(),

      await associateEnrollmentWithCourse(),

      await associateInstructorWithUser(),

      // Similar logic for "relation_many"

      await associateStudentWithUser(),

      // Similar logic for "relation_many"
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('analytics', null, {});

    await queryInterface.bulkDelete('courses', null, {});

    await queryInterface.bulkDelete('discussion_boards', null, {});

    await queryInterface.bulkDelete('enrollments', null, {});

    await queryInterface.bulkDelete('instructors', null, {});

    await queryInterface.bulkDelete('students', null, {});
  },
};
