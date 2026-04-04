# 1484. Group Sold Products By The Date

**Difficulty:** Easy

## Table: Activities

| Column Name | Type    |
|-------------|---------|
| sell_date   | date    |
| product     | varchar |

- The table may contain duplicates.
- Each row represents a product sold on a specific date.

## Problem Description

For each `sell_date`, you need to:
- Count the number of **distinct products sold**
- List the **unique product names**, sorted lexicographically and separated by commas

## Objective

- Group records by `sell_date`
- For each date:
    - Count distinct products → `num_sold`
    - Concatenate distinct product names in sorted order → `products`
- Return results ordered by `sell_date`

## Example

### Input

Activities table:

| sell_date  | product     |
|------------|------------|
| 2020-05-30 | Headphone  |
| 2020-06-01 | Pencil     |
| 2020-06-02 | Mask       |
| 2020-05-30 | Basketball |
| 2020-06-01 | Bible      |
| 2020-06-02 | Mask       |
| 2020-05-30 | T-Shirt    |

### Output

| sell_date  | num_sold | products                     |
|------------|----------|------------------------------|
| 2020-05-30 | 3        | Basketball,Headphone,T-Shirt |
| 2020-06-01 | 2        | Bible,Pencil                 |
| 2020-06-02 | 1        | Mask                         |

## Explanation

- For each date:
    - Remove duplicate products
    - Sort product names alphabetically
    - Join them with commas
- Results are ordered by `sell_date`