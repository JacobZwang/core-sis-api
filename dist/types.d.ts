export declare type Student = {
    id: string;
    firstName: string;
    courses: string[];
};
export declare type Assignment = {
    id: string;
    name: string;
    courseId: string;
    details: AssignmentDetails;
};
export declare type AssignmentDetails = {
    pointsPossible: number;
    dueDateTime: string;
};
export declare type AssignmentRecord = {
    studentId: string;
    assignmentId: string;
    created: string;
    details: AssignmentRecordDetails;
};
export declare type AssignmentRecordDetails = {
    pointsEarned: number;
    submittedDateTime: string;
    status: AssignmentRecordStatus;
};
export declare enum AssignmentRecordStatus {
    Assigned = 0,
    Received = 1,
    Graded = 2,
    Missing = 3
}
