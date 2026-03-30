-- Insert into Product Table
INSERT INTO product ( product_key )
VALUES ( 5 ),
       ( 6 );

-- Insert into Customer Table
INSERT INTO customer ( customer_id, product_key )
VALUES ( 1, 5 ),
       ( 2, 6 ),
       ( 3, 5 ),
       ( 3, 6 ),
       ( 1, 6 )
