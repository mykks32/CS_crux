# 1978. Employees Whose Manager Left the Company

## Problem

You are given an **Employees** table that contains information about employees, their salary, and their manager.

### Employees Table

| Column Name  | Type    |
|--------------|---------|
| employee_id  | int     |
| name         | varchar |
| manager_id   | int     |
| salary       | int     |

### Notes

- `employee_id` is the **primary key**  
- Some employees do not have a manager (`manager_id` is null)  
- When a manager leaves, their record is **deleted**, but `manager_id` of their reports remains  

---

## Task

Find all employees who:

1. Have a **salary strictly less than 30000**, and  
2. Their **manager left the company** (i.e., no row exists in the table for that `manager_id`)

- Return the column: `employee_id`  
- Order by `employee_id` ascending  

---

## Example

### Input

| employee_id | name      | manager_id | salary |
|-------------|-----------|------------|--------|
| 3           | Mila      | 9          | 60301  |
| 12          | Antonella | null       | 31000  |
| 13          | Emery     | null       | 67084  |
| 1           | Kalel     | 11         | 21241  |
| 9           | Mikaela   | null       | 50937  |
| 11          | Joziah    | 6          | 28485  |

---

### Output

| employee_id |
|-------------|
| 11          |

---

### Explanation

1. Employees with **salary < 30000**:  
   - Kalel (21241) → manager_id = 11  
   - Joziah (28485) → manager_id = 6  

2. Check if their managers exist in the table:  
   - Kalel's manager 11 exists → Kalel **not included**  
   - Joziah's manager 6 does not exist → Joziah **included**  

**Result:** Only `employee_id` 11