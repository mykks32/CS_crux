# Product Prices on a Specific Date

## Table: Products

| Column Name | Type |
|------------|------|
| product_id | int  |
| new_price  | int  |
| change_date| date |

- `(product_id, change_date)` is the primary key (combination of columns with unique values).
- Each row indicates that the price of a product was changed to a new price on a specific date.
- Initially, all products have a price of **10**.

---

## Problem

Write a query to find the prices of all products on the date **2019-08-16**.

Return the result table in any order.

---

## Example

### Input

**Products table:**

| product_id | new_price | change_date |
|------------|-----------|-------------|
| 1          | 20        | 2019-08-14  |
| 2          | 50        | 2019-08-14  |
| 1          | 30        | 2019-08-15  |
| 1          | 35        | 2019-08-16  |
| 2          | 65        | 2019-08-17  |
| 3          | 20        | 2019-08-18  |

---

### Output

| product_id | price |
|------------|-------|
| 2          | 50    |
| 1          | 35    |
| 3          | 10    |