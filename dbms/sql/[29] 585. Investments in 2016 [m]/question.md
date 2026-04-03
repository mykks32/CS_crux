# 585. Investments in 2016

**Difficulty:** Medium

## Table: Insurance

| Column Name | Type  |
|-------------|-------|
| pid         | int   |
| tiv_2015    | float |
| tiv_2016    | float |
| lat         | float |
| lon         | float |

- `pid` is the primary key.
- Each row represents a policyholder.
- `(lat, lon)` represents the location of the policyholder.

## Problem Description

You need to calculate the total investment value in 2016 (`tiv_2016`) for policyholders who satisfy **both** of the following conditions:

1. Their `tiv_2015` value is shared with **at least one other policyholder**.
2. Their `(lat, lon)` location is **unique** (no other policyholder shares the same location).

## Objective

- Filter policyholders based on the two conditions above
- Compute the **sum of tiv_2016**
- Round the result to **2 decimal places**

## Example

### Input

Insurance table:

| pid | tiv_2015 | tiv_2016 | lat | lon |
|-----|----------|----------|-----|-----|
| 1   | 10       | 5        | 10  | 10  |
| 2   | 20       | 20       | 20  | 20  |
| 3   | 10       | 30       | 20  | 20  |
| 4   | 10       | 40       | 40  | 40  |

### Output

| tiv_2016 |
|----------|
| 45.00    |

## Explanation

- `tiv_2015 = 10` appears multiple times → valid for records 1, 3, 4
- Unique locations:
    - (10,10) → unique → include (pid 1)
    - (20,20) → duplicated → exclude (pid 2, 3)
    - (40,40) → unique → include (pid 4)

- Sum = 5 + 40 = 45.00  