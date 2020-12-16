export declare const pseudoPayload: {
    students: {
        id: string;
        firstName: string;
        courses: string[];
    }[];
    assignmentRecords: {
        studentId: string;
        assignmentId: string;
        pointsEarned: number;
        dateTimeSubmitted: string;
        dateTimeGraded: string;
    }[];
    assignments: {
        id: string;
        pointsPossible: number;
        dueDateTime: string;
        name: string;
        courseId: string;
    }[];
    courses: {
        id: string;
        name: string;
    }[];
};
