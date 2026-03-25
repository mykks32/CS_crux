-- Signups Table
CREATE TABLE signups
	(
		user_id    INT PRIMARY KEY,
		time_stamp TIMESTAMP
	);

-- Create ENUM type first (PostgreSQL requires this)
CREATE TYPE confirmation_action AS ENUM ('confirmed', 'timeout');

-- Confirmations Table
CREATE TABLE confirmations
	(
		user_id    INT,
		time_stamp TIMESTAMP,
		action     confirmation_action,

		PRIMARY KEY (user_id, time_stamp),
		FOREIGN KEY (user_id) REFERENCES signups (user_id)
	);