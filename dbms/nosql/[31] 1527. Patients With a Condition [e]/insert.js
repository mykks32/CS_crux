// Insert multiple documents into MongoDB collection
// Syntax: db.collection.insertMany([ {doc1}, {doc2}, ... ])

db.patient.insertMany([
  {
    patient_id: 1,
    patient_name: "Daniel",
    conditions: "YFEV COUGH"
  },
  {
    patient_id: 2,
    patient_name: "Alice",
    conditions: null
  },
  {
    patient_id: 3,
    patient_name: "Bob",
    conditions: "DIAB100 MYOP"
  },
  {
    patient_id: 4,
    patient_name: "George",
    conditions: "ACNE DIAB100"
  },
  {
    patient_id: 5,
    patient_name: "Alain",
    conditions: "DIAB201"
  }
]);