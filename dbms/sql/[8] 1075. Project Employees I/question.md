# 1075. Project Employees I

## Problem

You are given two tables: **Project** and **Employee**.

### Project Table

| Column Name  | Type |
|--------------|------|
| project_id   | int  |
| employee_id  | int  |

- `(project_id, employee_id)` is the primary key
- Each row indicates that an employee is working on a project

---

### Employee Table

| Column Name       | Type    |
|------------------|---------|
| employee_id       | int     |
| name              | varchar |
| experience_years  | int     |

- `employee_id` is the primary key
- `experience_years` is guaranteed to be **not NULL**

---

## Task

Compute the **average experience years** of all employees for each project.

- Round the result to **2 decimal places**
- Return columns:

| Column Name     | Description                  |
|-----------------|------------------------------|
| project_id      | Project ID                   |
| average_years   | Average experience (float)   |

---

## Example

### Input

#### Project Table

| project_id | employee_id |
|------------|-------------|
| 1          | 1           |
| 1          | 2           |
| 1          | 3           |
| 2          | 1           |
| 2          | 4           |

#### Employee Table

| employee_id | name   | experience_years |
|-------------|--------|-----------------|
| 1           | Khaled | 3               |
| 2           | Ali    | 2               |
| 3           | John   | 1               |
| 4           | Doe    | 2               |

---

### Output

| project_id | average_years |
|------------|---------------|
| 1          | 2.00          |
| 2          | 2.50          |

---

### Explanation

- **Project 1:**
    - Employees: 1, 2, 3
    - Experience: 3 + 2 + 1 = 6
    - Average: 6 / 3 = 2.00

- **Project 2:**
    - Employees: 1, 4
    - Experience: 3 + 2 = 5
    - Average: 5 / 2 = 2.50