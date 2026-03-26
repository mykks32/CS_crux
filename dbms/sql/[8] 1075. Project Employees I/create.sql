-- Project Table
CREATE TABLE project
	(
		project_id  INT,
		employee_id INT,

		PRIMARY KEY (project_id, employee_id)
	);

-- Employee Table
CREATE TABLE employee
	(
		employee_id      INT PRIMARY KEY,
		name             VARCHAR,
		experience_years INT NOT NULL
	)