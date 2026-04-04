-- Products Table
CREATE TABLE "Products"
    (
        product_id       INT PRIMARY KEY,
        product_name     VARCHAR,
        product_category VARCHAR
    );

-- Orders Table
CREATE TABLE "Orders"
    (
        product_id INT,
        order_date DATE,
        unit       INT,

        FOREIGN KEY (product_id) REFERENCES "Products" (product_id)
    )