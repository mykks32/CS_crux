# 626. Exchange Seats

## Problem

You are given a **Seat** table:

### Seat Table

| Column Name | Type    |
|-------------|---------|
| id          | int     |
| student     | varchar |

- `id` is the **primary key** and unique  
- Each row indicates the **name and ID of a student**  
- The ID sequence **starts from 1** and increments continuously

---

## Task

Swap the seat **id** of every two consecutive students.

- If the number of students is **odd**, the last student’s ID **is not swapped**  
- Return the result **ordered by id in ascending order**

---

## Example

### Input

| id | student |
|----|---------|
| 1  | Abbot   |
| 2  | Doris   |
| 3  | Emerson |
| 4  | Green   |
| 5  | Jeames  |

---

### Output

| id | student |
|----|---------|
| 1  | Doris   |
| 2  | Abbot   |
| 3  | Green   |
| 4  | Emerson |
| 5  | Jeames  |

---

### Explanation

- Every two consecutive students swap seats:
  - 1 ↔ 2 → Abbot and Doris  
  - 3 ↔ 4 → Emerson and Green  
- 5 (Jeames) remains in place because the total number of students is odd