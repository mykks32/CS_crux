-- Users Table
CREATE TABLE Users
	(
		user_id   INT PRIMARY KEY,
		user_name VARCHAR
	);

-- Register Table
CREATE TABLE Register
	(
		contest_id INT,
		user_id    INT,

		PRIMARY KEY (contest_id, user_id)
	)