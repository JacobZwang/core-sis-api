import SIS from "./dist/index.js";

SIS((client: ReturnType<typeof SIS>) => {
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
    client.getCourseById("math").getAssignmentsByName("New Assignment")[0]
      .records
  );
});
