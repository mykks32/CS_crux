# 1907. Count Salary Categories

## Problem

You are given an **Accounts** table containing information about monthly income for bank accounts.

### Accounts Table

| Column Name | Type |
|-------------|------|
| account_id  | int  |
| income      | int  |

### Notes

- `account_id` is the **primary key**
- Each row represents the **monthly income** of a bank account

---

## Task

Count the number of accounts in each **salary category**.

### Salary Categories

| Category        | Condition |
|-----------------|-----------|
| Low Salary      | income < 20000 |
| Average Salary  | 20000 ≤ income ≤ 50000 |
| High Salary     | income > 50000 |

---

## Requirements

- Return **all three categories**
- If no accounts exist in a category, return **0**
- Return columns:

| Column Name    | Description |
|----------------|-------------|
| category       | Salary category |
| accounts_count | Number of accounts |

- Order of result **does not matter**

---

## Example

### Input

| account_id | income |
|------------|--------|
| 3          | 108939 |
| 2          | 12747  |
| 8          | 87709  |
| 6          | 91796  |

---

## Output

| category       | accounts_count |
|----------------|----------------|
| Low Salary     | 1              |
| Average Salary | 0              |
| High Salary    | 3              |

---

## Explanation

- **Low Salary**  
  - Account 2 → income = 12747  
  - Count = 1

- **Average Salary**  
  - No accounts  
  - Count = 0

- **High Salary**  
  - Account 3 → 108939  
  - Account 6 → 91796  
  - Account 8 → 87709  
  - Count = 3