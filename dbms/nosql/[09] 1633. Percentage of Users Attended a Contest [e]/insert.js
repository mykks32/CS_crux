// Insert users
db.users.insertMany([
  { user_id: 6, user_name: "Alice" },
  { user_id: 2, user_name: "Bob" },
  { user_id: 7, user_name: "Alex" }
]);

// Insert registrations
db.register.insertMany([
  { contest_id: 215, user_id: 6 },
  { contest_id: 209, user_id: 2 },
  { contest_id: 208, user_id: 2 },
  { contest_id: 210, user_id: 6 },
  { contest_id: 208, user_id: 6 },
  { contest_id: 209, user_id: 7 },
  { contest_id: 209, user_id: 6 },
  { contest_id: 215, user_id: 7 },
  { contest_id: 208, user_id: 7 },
  { contest_id: 210, user_id: 2 },
  { contest_id: 207, user_id: 2 },
  { contest_id: 210, user_id: 7 }
]);