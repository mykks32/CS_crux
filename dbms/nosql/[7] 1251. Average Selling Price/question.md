# 1251. Average Selling Price

## Problem

You are given two tables: **Prices** and **UnitsSold**.

### Prices Table

| Column Name | Type |
|-------------|------|
| product_id  | int  |
| start_date  | date |
| end_date    | date |
| price       | int  |

- `(product_id, start_date, end_date)` is the primary key.
- Each row indicates the price of a product during a specific period.
- For each `product_id`, there are no overlapping periods.

---

### UnitsSold Table

| Column Name    | Type |
|----------------|------|
| product_id     | int  |
| purchase_date  | date |
| units          | int  |

- Each row indicates the number of units sold for a product on a specific date.
- This table may contain duplicates.

---

## Task

Compute the **average selling price** for each product:

$$
\text{average_price} = \frac{\text{Total Revenue}}{\text{Total Units Sold}}
$$
- **Total Revenue** = sum of `(units * price)` for each sale
- If a product has **no sales**, its `average_price` is **0**
- Round the result to **2 decimal places**

Return the result table in any order with the following columns:

| Column Name     | Description                  |
|-----------------|------------------------------|
| product_id      | Product ID                   |
| average_price   | Average selling price (float)|

---

## Example

### Input

#### Prices Table

| product_id | start_date | end_date   | price |
|------------|------------|------------|-------|
| 1          | 2019-02-17 | 2019-02-28 | 5     |
| 1          | 2019-03-01 | 2019-03-22 | 20    |
| 2          | 2019-02-01 | 2019-02-20 | 15    |
| 2          | 2019-02-21 | 2019-03-31 | 30    |

#### UnitsSold Table

| product_id | purchase_date | units |
|------------|---------------|-------|
| 1          | 2019-02-25    | 100   |
| 1          | 2019-03-01    | 15    |
| 2          | 2019-02-10    | 200   |
| 2          | 2019-03-22    | 30    |

---

### Output

| product_id | average_price |
|------------|---------------|
| 1          | 6.96          |
| 2          | 16.96         |

---

### Explanation

- **Product 1**:
    - Sales: (100 × 5) + (15 × 20) = 500 + 300 = 800
    - Total units sold: 100 + 15 = 115
    - Average price = 800 / 115 = **6.96**

- **Product 2**:
    - Sales: (200 × 15) + (30 × 30) = 3000 + 900 = 3900
    - Total units sold: 200 + 30 = 230
    - Average price = 3900 / 230 = **16.96**