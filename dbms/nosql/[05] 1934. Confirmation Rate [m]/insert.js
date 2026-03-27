// Insert into signups
db.signups.insertMany([
  { user_id: 3, time_stamp: new Date("2020-03-21T10:16:13Z") },
  { user_id: 7, time_stamp: new Date("2020-01-04T13:57:59Z") },
  { user_id: 2, time_stamp: new Date("2020-07-29T23:09:44Z") },
  { user_id: 6, time_stamp: new Date("2020-12-09T10:39:37Z") }
]);

// Insert into confirmations
db.confirmations.insertMany([
  { user_id: 3, time_stamp: new Date("2021-01-06T03:30:46Z"), action: "timeout" },
  { user_id: 3, time_stamp: new Date("2021-07-14T14:00:00Z"), action: "timeout" },
  { user_id: 7, time_stamp: new Date("2021-06-12T11:57:29Z"), action: "confirmed" },
  { user_id: 7, time_stamp: new Date("2021-06-13T12:58:28Z"), action: "confirmed" },
  { user_id: 7, time_stamp: new Date("2021-06-14T13:59:27Z"), action: "confirmed" },
  { user_id: 2, time_stamp: new Date("2021-01-22T00:00:00Z"), action: "confirmed" },
  { user_id: 2, time_stamp: new Date("2021-02-28T23:59:59Z"), action: "timeout" }
]);