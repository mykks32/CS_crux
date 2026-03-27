// Insert into Project Table
	db.Project.insertMany([
		{project_id: 1, employee_id: 1},
		{project_id: 1, employee_id: 2},
		{project_id: 1, employee_id: 3},
		{project_id: 2, employee_id: 1},
		{project_id: 2, employee_id: 4},
		])

// Insert into Employee Table
	db.Employee.insertMany([
		{employee_id: 1, name: 'Khaled', experience_years: 3},
		{employee_id: 2, name: 'Ali', experience_years: 2},
		{employee_id: 3, name: 'John', experience_years: 1},
		{employee_id: 4, name: 'Doe', experience_years: 2}
		])