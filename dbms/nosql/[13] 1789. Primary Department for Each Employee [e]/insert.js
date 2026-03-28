db.Employee.insertMany([
    { employee_id: 1, department_id: 1, primary_flag: "N" },
    { employee_id: 2, department_id: 1, primary_flag: "Y" },
    { employee_id: 2, department_id: 2, primary_flag: "N" },
    { employee_id: 3, department_id: 3, primary_flag: "N" },
    { employee_id: 4, department_id: 2, primary_flag: "N" },
    { employee_id: 4, department_id: 3, primary_flag: "Y" },
    { employee_id: 4, department_id: 4, primary_flag: "N" }
    ]);