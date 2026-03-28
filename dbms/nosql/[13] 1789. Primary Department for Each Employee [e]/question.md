# 1789. Primary Department for Each Employee

**Difficulty:** Easy

## Table: Employee

| Column Name   | Type    |
|---------------|---------|
| employee_id   | int     |
| department_id | int     |
| primary_flag  | varchar |

- (employee_id, department_id) is the primary key.
- employee_id is the id of the employee.
- department_id is the id of the department to which the employee belongs.
- primary_flag is an ENUM ('Y', 'N'):
    - 'Y' → primary department
    - 'N' → not primary department

## Problem Description

Employees can belong to multiple departments. When an employee joins multiple departments, they must designate one as their **primary department**.

If an employee belongs to only one department, their `primary_flag` will be `'N'`, but that department should still be considered their primary department.

## Objective

Report all employees with their **primary department**:
- If an employee has a department marked `'Y'`, return that department.
- If an employee belongs to only one department, return that department.

Return the result in any order.

## Example

### Input

Employee table:

| employee_id | department_id | primary_flag |
|-------------|---------------|--------------|
| 1           | 1             | N            |
| 2           | 1             | Y            |
| 2           | 2             | N            |
| 3           | 3             | N            |
| 4           | 2             | N            |
| 4           | 3             | Y            |
| 4           | 4             | N            |

### Output

| employee_id | department_id |
|-------------|---------------|
| 1           | 1             |
| 2           | 1             |
| 3           | 3             |
| 4           | 3             |

## Explanation

- Employee 1 → only one department → 1
- Employee 2 → primary_flag = 'Y' → 1
- Employee 3 → only one department → 3
- Employee 4 → primary_flag = 'Y' → 3  