# Confirmation Rate of Each User

## Tables

### Signups

| Column Name | Type     |
|-------------|----------|
| user_id     | int      |
| time_stamp  | datetime |

- `user_id` is unique for this table.
- Each row contains the signup time for a user.

---

### Confirmations

| Column Name | Type     |
|-------------|----------|
| user_id     | int      |
| time_stamp  | datetime |
| action      | ENUM     |

- `(user_id, time_stamp)` is the **primary key**.
- `user_id` is a **foreign key** referencing `Signups`.
- `action` can be:
    - `'confirmed'`
    - `'timeout'`

Each row indicates a confirmation request and whether it was confirmed or expired.

---

## Definition

The **confirmation rate** of a user is:

```
confirmation_rate = confirmed_count / total_requests
```

### Rules

- If a user made **no confirmation requests**, confirmation rate = **0**
- Round the result to **2 decimal places**
- Return **all users** from `Signups`
- Result order **does not matter**

---

## Example

### Input

#### Signups Table

| user_id | time_stamp |
|---------|------------|
| 3 | 2020-03-21 10:16:13 |
| 7 | 2020-01-04 13:57:59 |
| 2 | 2020-07-29 23:09:44 |
| 6 | 2020-12-09 10:39:37 |

---

#### Confirmations Table

| user_id | time_stamp | action |
|---------|------------|--------|
| 3 | 2021-01-06 03:30:46 | timeout |
| 3 | 2021-07-14 14:00:00 | timeout |
| 7 | 2021-06-12 11:57:29 | confirmed |
| 7 | 2021-06-13 12:58:28 | confirmed |
| 7 | 2021-06-14 13:59:27 | confirmed |
| 2 | 2021-01-22 00:00:00 | confirmed |
| 2 | 2021-02-28 23:59:59 | timeout |

---

## Output

| user_id | confirmation_rate |
|---------|-------------------|
| 6 | 0.00 |
| 3 | 0.00 |
| 7 | 1.00 |
| 2 | 0.50 |

---

## Explanation

### User 6
- No confirmation requests
- **Rate = 0.00**

### User 3
- 2 requests
- 0 confirmed
- **Rate = 0 / 2 = 0.00**

### User 7
- 3 requests
- 3 confirmed
- **Rate = 3 / 3 = 1.00**

### User 2
- 2 requests
- 1 confirmed
- **Rate = 1 / 2 = 0.50**