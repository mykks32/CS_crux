// Insert into Employee Collections
    db.Employees.insertMany([
        { employee_id: 3, name: "Mila", manager_id: 9, salary: 60301 },
        { employee_id: 12, name: "Antonella", manager_id: null, salary: 31000 },
        { employee_id: 13, name: "Emery", manager_id: null, salary: 67084 },
        { employee_id: 1, name: "Kalel", manager_id: 11, salary: 21241 },
        { employee_id: 9, name: "Mikaela", manager_id: null, salary: 50937 },
        { employee_id: 11, name: "Joziah", manager_id: 6, salary: 28485 }
        ])