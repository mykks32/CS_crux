-- Product Table
CREATE TABLE Product
    (
        product_key INT PRIMARY KEY
    );

-- Customer Table
CREATE TABLE Customer
    (
        customer_id INT NOT NULL,
        product_key INT,

        FOREIGN KEY (product_key) REFERENCES Product (product_key)
    )