# core-sis-api
### student information system api for creating and editing courses, assignments and records

use in `.js` files
```js
SIS((client) => {
  // content here
});
```

use in `.ts` files
```ts
SIS((client: ReturnType<typeof SIS>) => {
  // content here
});
```


### example usage in typescirpt
```ts
SIS((client: ReturnType<typeof SIS>) => {
  client.requestLogin("username", "password");
  client.requestPayload();

  client.getCourseById("math").createAssignment("Assignment Name", {
    pointsPossible: 16,
    dueDateTime: "some date",
  } as AssignmentDetails);

  client
    .getCourseById("courseId")
    .getAssignmentsByName("Assignment Name")[0]
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
```
