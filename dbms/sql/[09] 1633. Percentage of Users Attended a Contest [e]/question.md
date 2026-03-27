# 1633. Percentage of Users Attended a Contest

## Problem

You are given two tables: **Users** and **Register**.

### Users Table

| Column Name | Type    |
|-------------|---------|
| user_id     | int     |
| user_name   | varchar |

- `user_id` is the primary key
- Each row represents a user

---

### Register Table

| Column Name | Type    |
|-------------|---------|
| contest_id  | int     |
| user_id     | int     |

- `(contest_id, user_id)` is the primary key
- Each row indicates that a user registered for a contest

---

## Task

Compute the **percentage of users registered** in each contest.

- Round the result to **2 decimal places**
- Return columns:

| Column Name | Description |
|-------------|-------------|
| contest_id  | Contest ID  |
| percentage  | Percentage of users registered |

- Sort the results by:
    1. `percentage` in **descending order**
    2. `contest_id` in **ascending order** in case of a tie

---

## Example

### Input

#### Users Table

| user_id | user_name |
|---------|-----------|
| 6       | Alice     |
| 2       | Bob       |
| 7       | Alex      |

#### Register Table

| contest_id | user_id |
|------------|---------|
| 215        | 6       |
| 209        | 2       |
| 208        | 2       |
| 210        | 6       |
| 208        | 6       |
| 209        | 7       |
| 209        | 6       |
| 215        | 7       |
| 208        | 7       |
| 210        | 2       |
| 207        | 2       |
| 210        | 7       |

---

### Output

| contest_id | percentage |
|------------|------------|
| 208        | 100.0      |
| 209        | 100.0      |
| 210        | 100.0      |
| 215        | 66.67      |
| 207        | 33.33      |

---

### Explanation

- **Contests 208, 209, 210:** All 3 users registered → 100%
- **Contest 215:** 2 out of 3 users registered → (2/3) * 100 = 66.67%
- **Contest 207:** 1 out of 3 users registered → (1/3) * 100 = 33.33%

Sorted by **percentage descending**, then **contest_id ascending** for ties.