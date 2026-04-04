# 1327. List the Products Ordered in a Period

**Difficulty:** Easy

## Table: Products

| Column Name      | Type    |
|------------------|---------|
| product_id       | int     |
| product_name     | varchar |
| product_category | varchar |

- `product_id` is the primary key.

## Table: Orders

| Column Name | Type |
|-------------|------|
| product_id  | int  |
| order_date  | date |
| unit        | int  |

- `product_id` is a foreign key referencing Products.
- Each row represents units ordered for a product on a specific date.
- The table may contain duplicate rows.

## Problem Description

You need to find products that:
- Have **at least 100 total units ordered**
- Within the time period **February 2020**

## Objective

- Filter orders where `order_date` is in February 2020
- Group by `product_id`
- Sum the total `unit`
- Keep only products with total units ≥ 100
- Return:
    - `product_name`
    - `unit` (total units ordered in February 2020)

## Example

### Input

Products table:

| product_id | product_name          | product_category |
|------------|----------------------|------------------|
| 1          | Leetcode Solutions   | Book             |
| 2          | Jewels of Stringology| Book             |
| 3          | HP                   | Laptop           |
| 4          | Lenovo               | Laptop           |
| 5          | Leetcode Kit         | T-shirt          |

Orders table:

| product_id | order_date | unit |
|------------|-----------|------|
| 1          | 2020-02-05| 60   |
| 1          | 2020-02-10| 70   |
| 2          | 2020-01-18| 30   |
| 2          | 2020-02-11| 80   |
| 3          | 2020-02-17| 2    |
| 3          | 2020-02-24| 3    |
| 4          | 2020-03-01| 20   |
| 5          | 2020-02-25| 50   |
| 5          | 2020-02-27| 50   |

### Output

| product_name       | unit |
|--------------------|------|
| Leetcode Solutions | 130  |
| Leetcode Kit       | 100  |

## Explanation

- Product 1 → 60 + 70 = 130 → included
- Product 2 → 80 → excluded
- Product 3 → 5 → excluded
- Product 4 → no February orders → excluded
- Product 5 → 50 + 50 = 100 → included  