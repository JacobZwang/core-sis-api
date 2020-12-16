define(["require", "exports", "./pseudoPayload", "./utilities"], function (require, exports, pseudoPayload_1, utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function SIS(callback) {
        const client = {
            students: [],
            pendingStudents: [],
            assignmentRecords: [],
            pendingRecords: [],
            assignments: [],
            pendingAssignments: [],
            courses: [],
            pendingCourses: [],
            requestLogin(userName, password) {
                return { loginStatus: "success" };
            },
            requestPayload() {
                client.students = pseudoPayload_1.pseudoPayload.students;
                client.assignmentRecords = pseudoPayload_1.pseudoPayload.assignmentRecords;
                client.assignments = pseudoPayload_1.pseudoPayload.assignments;
                client.courses = pseudoPayload_1.pseudoPayload.courses;
            },
            getStudentById(id) {
                return Student(id);
            },
            getStudentsByName(name) {
                return client.students
                    .filter((student) => student.firstName === name)
                    .map((student) => Student(student.id));
            },
            getAssignmentById(id) {
                return Assignment(id);
            },
            getAssignmentsByName(name) {
                return client.assignments
                    .filter((assignment) => assignment.name === name)
                    .map((assignment) => Assignment(assignment.id));
            },
            getCourseById(id) {
                return Course(id);
            },
        };
        function Student(id) {
            return {
                get assignmentRecords() {
                    return client.assignmentRecords.filter((record) => record.studentId === id);
                },
                get courses() {
                    return client.students.find((student) => student.id === id).courses;
                },
            };
        }
        function createAssignment(courseId, id, name, details) {
            return {
                courseId: courseId,
                id: id,
                name: name,
                details: details,
            };
        }
        function createAssignmentRecord(studentId, assignmentId, created, details) {
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
                    return client.assignmentRecords.find((assignmentRecord) => assignmentRecord.studentId === studentId &&
                        assignmentRecord.assignmentId === assignmentId &&
                        assignmentRecord.created === created);
                },
            };
        }
        function Assignment(id) {
            return {
                get possiblePoints() {
                    return client.assignments.find((assignment) => assignment.id === id)
                        .possiblePoints;
                },
                get records() {
                    return client.assignmentRecords.filter((record) => record.assignmentId === id);
                },
                createRecord: function (studentId, details) {
                    const created = Date.now().toString();
                    client.assignmentRecords.push(createAssignmentRecord(studentId, id, created, details));
                    return AssignmentRecord(studentId, id, created);
                },
            };
        }
        function Course(id) {
            return {
                get assignments() {
                    return client.assignments.filter((assignment) => assignment.courseId === id);
                },
                createAssignment(name, details) {
                    const assignmentId = utilities_1.generateId();
                    client.assignments.push(createAssignment(id, assignmentId, name, details));
                    client.pendingAssignments.push(assignmentId);
                    return Assignment(assignmentId);
                },
                getAssignmentsByName(name) {
                    return client.assignments
                        .filter((assignment) => assignment.name === name)
                        .map((assignment) => Assignment(assignment.id));
                },
            };
        }
        callback(client);
        return client;
    }
    exports.default = SIS;
});
