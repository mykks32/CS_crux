-- Prices Table
CREATE TABLE Prices
	(
		product_id INT  NOT NULL,
		start_date DATE NOT NULL,
		end_date   DATE NOT NULL,
		price      INT  NOT NULL,
		PRIMARY KEY (product_id, start_date, end_date)
	);

-- UnitsSold Table
CREATE TABLE UnitsSold
	(
		product_id    INT  NOT NULL,
		purchase_date DATE NOT NULL,
		units         INT  NOT NULL
	);