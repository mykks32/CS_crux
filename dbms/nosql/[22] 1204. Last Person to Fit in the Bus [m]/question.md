# 1204. Last Person to Fit in the Bus

## Problem

You are given a **Queue** table that describes people waiting to board a bus.

### Queue Table

| Column Name  | Type    |
|--------------|---------|
| person_id    | int     |
| person_name  | varchar |
| weight       | int     |
| turn         | int     |

### Notes

- `person_id` is **unique**  
- `turn` indicates the **boarding order** (1 = first, n = last)  
- `weight` is the person’s weight in kilograms  
- The **bus weight limit** is **1000 kg**  
- People board one at a time in order of `turn`  
- The first person **does not exceed** the weight limit  

---

## Task

Find the **person_name** of the **last person who can board the bus** without exceeding the **weight limit**.

- Only one person boards at a time  
- Return **one row** with column: `person_name`

---

## Example

### Input

| person_id | person_name | weight | turn |
|-----------|-------------|--------|------|
| 5         | Alice       | 250    | 1    |
| 4         | Bob         | 175    | 5    |
| 3         | Alex        | 350    | 2    |
| 6         | John Cena   | 400    | 3    |
| 1         | Winston     | 500    | 6    |
| 2         | Marie       | 200    | 4    |

---

### Output

| person_name |
|-------------|
| John Cena   |

---

### Explanation

The table ordered by **turn** with cumulative weight:

| Turn | ID | Name      | Weight | Total Weight |
|------|----|-----------|--------|--------------|
| 1    | 5  | Alice     | 250    | 250          |
| 2    | 3  | Alex      | 350    | 600          |
| 3    | 6  | John Cena | 400    | 1000         | ← Last person who can board
| 4    | 2  | Marie     | 200    | 1200         | Cannot board
| 5    | 4  | Bob       | 175    | —            |
| 6    | 1  | Winston   | 500    | —            |

- **John Cena** is the last person to board without exceeding **1000 kg**