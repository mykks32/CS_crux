# 176. Second Highest Salary

**Difficulty:** Medium

## Table: Employee

| Column Name | Type |
|-------------|------|
| id          | int  |
| salary      | int  |

- `id` is the primary key.
- Each row contains the salary of an employee.

## Problem Description

You need to find the **second highest distinct salary** from the table.

- Salaries may contain duplicates.
- Only **distinct values** should be considered.

If a second highest salary does not exist, return `null`.

## Objective

- Identify unique salaries
- Determine the second highest value
- Return it as `SecondHighestSalary`
- If not available, return `null`

## Example 1

### Input

Employee table:

| id | salary |
|----|--------|
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |

### Output

| SecondHighestSalary |
|---------------------|
| 200                 |

## Example 2

### Input

Employee table:

| id | salary |
|----|--------|
| 1  | 100    |

### Output

| SecondHighestSalary |
|---------------------|
| null                |

## Explanation

- Example 1:
    - Distinct salaries → 100, 200, 300
    - Second highest → 200

- Example 2:
    - Only one salary → no second highest → null  