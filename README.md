> :warning: not ready for use, this project is in early development

### student information system API for creating, editing, and viewing courses, assignments, and records

#### install
```
npm install git+https://github.com/JacobZwang/core-sis-api.git
```

#### import
```ts
import SIS from "core-sis-api";
```

#### use in `.js` files
```js
SIS((client) => {
  // content here
});
```

#### use in `.ts` files
```ts
SIS((client: ReturnType<typeof SIS>) => {
  // content here
});
```


#### example usage in typescirpt
```ts
SIS((client: ReturnType<typeof SIS>) => {
  client.requestLogin("username", "password");
  client.requestPayload();

  client.getCourseById("courseId").createAssignment("Assignment Name", {
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
    client.getCourseById("courseId").getAssignmentsByName("Assignment Name")[0]
      .records
  );
});
```
