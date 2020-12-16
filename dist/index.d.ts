import { AssignmentDetails, AssignmentRecordDetails, AssignmentRecord } from "./types";
export default function SIS(callback: any): {
    students: any[];
    pendingStudents: any[];
    assignmentRecords: any[];
    pendingRecords: any[];
    assignments: any[];
    pendingAssignments: any[];
    courses: any[];
    pendingCourses: any[];
    requestLogin(userName: string, password: string): {
        loginStatus: string;
    };
    requestPayload(): void;
    getStudentById(id: string): {
        readonly assignmentRecords: any[];
        readonly courses: any;
    };
    getStudentsByName(name: string): {
        readonly assignmentRecords: any[];
        readonly courses: any;
    }[];
    getAssignmentById(id: string): {
        readonly possiblePoints: any;
        readonly records: any[];
        createRecord: (studentId: string, details: AssignmentRecordDetails) => AssignmentRecord;
    };
    getAssignmentsByName(name: string): {
        readonly possiblePoints: any;
        readonly records: any[];
        createRecord: (studentId: string, details: AssignmentRecordDetails) => AssignmentRecord;
    }[];
    getCourseById(id: string): {
        readonly assignments: any[];
        createAssignment(name: string, details: AssignmentDetails): {
            readonly possiblePoints: any;
            readonly records: any[];
            createRecord: (studentId: string, details: AssignmentRecordDetails) => AssignmentRecord;
        };
        getAssignmentsByName(name: string): {
            readonly possiblePoints: any;
            readonly records: any[];
            createRecord: (studentId: string, details: AssignmentRecordDetails) => AssignmentRecord;
        }[];
    };
};
