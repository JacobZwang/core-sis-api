import { pseudoPayload } from "./pseudoPayload";
import {
  Student,
  Assignment,
  AssignmentDetails,
  AssignmentRecordDetails,
  AssignmentRecord,
  AssignmentRecordStatus,
} from "./types";
import { generateId } from "./utilities";

const client = {
  students: [],
  pendingStudents: [],

  assignmentRecords: [],
  pendingRecords: [],

  assignments: [],
  pendingAssignments: [],

  courses: [],
  pendingCourses: [],

  requestLogin(userName: string, password: string) {
    return { loginStatus: "success" };
  },

  requestPayload() {
    client.students = pseudoPayload.students;
    client.assignmentRecords = pseudoPayload.assignmentRecords;
    client.assignments = pseudoPayload.assignments;
    client.courses = pseudoPayload.courses;
  },

  getStudentById(id: string) {
    return Student(id);
  },

  getStudentsByName(name: string) {
    return client.students
      .filter((student: Student) => student.firstName === name)
      .map((student: Student) => Student(student.id));
  },

  getAssignmentById(id: string) {
    return Assignment(id);
  },

  getAssignmentsByName(name: string) {
    return client.assignments
      .filter((assignment: Assignment) => assignment.name === name)
      .map((assignment: Assignment) => Assignment(assignment.id));
  },

  getCourseById(id: string) {
    return Course(id);
  },
};

function Student(id: string) {
  return {
    get assignmentRecords() {
      return client.assignmentRecords.filter(
        (record) => record.studentId === id
      );
    },
    get courses() {
      return client.students.find((student) => student.id === id).courses;
    },
  };
}

function createAssignment(
  courseId: string,
  id: string,
  name: string,
  details: AssignmentDetails
): Assignment {
  return {
    courseId: courseId,
    id: id,
    name: name,
    details: details,
  };
}

function createAssignmentRecord(
  studentId: string,
  assignmentId: string,
  created: string,
  details: AssignmentRecordDetails
): AssignmentRecord {
  return {
    studentId: studentId,
    assignmentId: assignmentId,
    created: created,
    details: details,
  };
}

function AssignmentRecord(studentId, assignmentId, created) {
  return {
    studentId: studentId,
    assignmentId: assignmentId,
    created: created,

    get details() {
      return client.assignmentRecords.find(
        (assignmentRecord: AssignmentRecord) =>
          assignmentRecord.studentId === studentId &&
          assignmentRecord.assignmentId === assignmentId &&
          assignmentRecord.created === created
      );
    },
  };
}

function Assignment(id: string) {
  return {
    get possiblePoints() {
      return client.assignments.find((assignment) => assignment.id === id)
        .possiblePoints;
    },

    get records() {
      return client.assignmentRecords.filter(
        (record) => record.assignmentId === id
      );
    },

    createRecord: function (
      studentId: string,
      details: AssignmentRecordDetails
    ) {
      const created = Date.now().toString();
      client.assignmentRecords.push(
        createAssignmentRecord(studentId, id, created, details)
      );
      return AssignmentRecord(studentId, id, created);
    },
  };
}

function Course(id: string) {
  return {
    get assignments() {
      return client.assignments.filter(
        (assignment) => assignment.courseId === id
      );
    },

    createAssignment(name: string, details: AssignmentDetails) {
      const assignmentId = generateId();
      client.assignments.push(
        createAssignment(id, assignmentId, name, details)
      );

      client.pendingAssignments.push(assignmentId);
      return Assignment(assignmentId);
    },

    getAssignmentsByName(name: string) {
      return client.assignments
        .filter((assignment: Assignment) => assignment.name === name)
        .map((assignment: Assignment) => Assignment(assignment.id));
    },
  };
}

client.requestLogin("foo", "oof");
client.requestPayload();

client.getCourseById("math").createAssignment("New Assignment", {
  pointsPossible: 16,
  dueDateTime: "some date",
} as AssignmentDetails);

client
  .getCourseById("math")
  .getAssignmentsByName("New Assignment")[0]
  .createRecord("jacob", {
    pointsEarned: 16,
    submittedDateTime: "some date",
    status: AssignmentRecordStatus.Assigned,
  } as AssignmentRecordDetails);

console.log(
  client.getCourseById("math").getAssignmentsByName("New Assignment")[0].records
);
