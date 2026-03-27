# 180. Consecutive Numbers

## Problem

You are given a **Logs** table containing numbers in order of their insertion.

### Logs Table

| Column Name | Type    |
|-------------|---------|
| id          | int     |
| num         | varchar |

### Notes

- `id` is the **primary key** and **auto-incremented**
- `num` is a string representing the number
- Numbers are ordered by `id`

---

## Task

Find all numbers that appear **at least three times consecutively**.

- Return column: `ConsecutiveNums`
- Order of rows **does not matter**

---

## Example

### Input

| id | num |
|----|-----|
| 1  | 1   |
| 2  | 1   |
| 3  | 1   |
| 4  | 2   |
| 5  | 1   |
| 6  | 2   |
| 7  | 2   |

---

### Output

| ConsecutiveNums |
|-----------------|
| 1               |

---

### Explanation

- Number `1` appears **3 times in a row** (id 1, 2, 3)
- No other number appears consecutively **3 or more times**