# 1045. Customers Who Bought All Products

## Problem

You are given two tables: **Customer** and **Product**.

### Customer Table

| Column Name  | Type |
|--------------|------|
| customer_id  | int  |
| product_key  | int  |

- `customer_id` is **not NULL**  
- `product_key` is a foreign key to **Product** table  
- Table may contain **duplicate rows**  

---

### Product Table

| Column Name | Type |
|-------------|------|
| product_key | int  |

- `product_key` is the **primary key**  
- Each row represents a product

---

## Task

Find all `customer_id`s who have bought **all products**.

- Return column: `customer_id`  
- Order of rows **does not matter**

---

## Example

### Input

#### Customer Table

| customer_id | product_key |
|-------------|-------------|
| 1           | 5           |
| 2           | 6           |
| 3           | 5           |
| 3           | 6           |
| 1           | 6           |

#### Product Table

| product_key |
|-------------|
| 5           |
| 6           |

---

### Output

| customer_id |
|-------------|
| 1           |
| 3           |

---

### Explanation

- Total products: **5, 6**  
- Customer 1 bought **5 and 6** → included  
- Customer 2 bought only **6** → excluded  
- Customer 3 bought **5 and 6** → included