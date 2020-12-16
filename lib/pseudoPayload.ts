export const pseudoPayload = {
  students: [
    {
      id: "jacob",
      firstName: "Jacob",
      courses: ["math", "science", "history", "english"],
    },
    {
      id: "henry",
      firstName: "Henry",
      courses: ["math", "science", "history", "english"],
    },
    {
      id: "ben",
      firstName: "Ben",
      courses: ["math", "science", "history", "english"],
    },
  ],
  assignmentRecords: [
    {
      studentId: "jacob",
      assignmentId: "studyGuide",
      pointsEarned: 16,
      dateTimeSubmitted: "2009-06-15T13:45:30",
      dateTimeGraded: "2009-06-15T13:45:30",
    },
    {
      studentId: "henry",
      assignmentId: "studyGuide",
      pointsEarned: 14,
      dateTimeSubmitted: "2009-06-15T13:45:30",
      dateTimeGraded: "2009-06-15T13:45:30",
    },
    {
      studentId: "ben",
      assignmentId: "studyGuide",
      pointsEarned: 15,
      dateTimeSubmitted: "2009-06-15T13:45:30",
      dateTimeGraded: "2009-06-15T13:45:30",
    },
  ],
  assignments: [
    {
      id: "studyGuide",
      pointsPossible: 16,
      dueDateTime: "2009-06-15T13:45:30",
      name: "Study Guide",
      courseId: "math",
    },
    {
      id: "slides",
      pointsPossible: 20,
      dueDateTime: "2009-06-15T13:45:30",
      name: "Slides",
      courseId: "english",
    },
  ],
  courses: [
    { id: "math", name: "Math" },
    { id: "science", name: "Science" },
    { id: "history", name: "History" },
    { id: "english", name: "English" },
  ],
};
