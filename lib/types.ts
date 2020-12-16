export type Student = {
  id: string;
  firstName: string;
  courses: string[];
};

export type Assignment = {
  id: string;
  name: string;
  courseId: string;
  details: AssignmentDetails;
};

export type AssignmentDetails = {
  pointsPossible: number;
  dueDateTime: string;
};

export type AssignmentRecord = {
  studentId: string;
  assignmentId: string;
  created: string;
  details: AssignmentRecordDetails;
};

export type AssignmentRecordDetails = {
  pointsEarned: number;
  submittedDateTime: string;
  status: AssignmentRecordStatus;
};

export enum AssignmentRecordStatus {
  Assigned,
  Received,
  Graded,
  Missing,
}
