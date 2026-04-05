# 1517. Find Users With Valid E-Mails

**Difficulty:** Easy

## Table: Users

| Column Name | Type    |
|-------------|---------|
| user_id     | int     |
| name        | varchar |
| mail        | varchar |

- `user_id` is the primary key.
- Each row contains a user's email, which may be invalid.

## Problem Description

You need to find users with **valid email addresses**.

A valid email must satisfy:

### Prefix (before '@')
- Must start with a **letter**
- Can contain:
    - letters (a–z, A–Z)
    - digits (0–9)
    - underscore `_`
    - period `.`
    - dash `-`

### Domain (after '@')
- Must be exactly: `@leetcode.com`

## Objective

- Filter users whose `mail` follows the valid format
- Return:
    - user_id
    - name
    - mail

Return the result in any order.

## Example

### Input

Users table:

| user_id | name      | mail                    |
|---------|-----------|-------------------------|
| 1       | Winston   | winston@leetcode.com    |
| 2       | Jonathan  | jonathanisgreat         |
| 3       | Annabelle | bella-@leetcode.com     |
| 4       | Sally     | sally.come@leetcode.com |
| 5       | Marwan    | quarz#2020@leetcode.com |
| 6       | David     | david69@gmail.com       |
| 7       | Shapiro   | .shapo@leetcode.com     |

### Output

| user_id | name      | mail                    |
|---------|-----------|-------------------------|
| 1       | Winston   | winston@leetcode.com    |
| 3       | Annabelle | bella-@leetcode.com     |
| 4       | Sally     | sally.come@leetcode.com |

## Explanation

- User 1 → valid format
- User 3 → valid prefix and correct domain
- User 4 → valid format
- User 2 → missing domain
- User 5 → contains invalid character `#`
- User 6 → wrong domain
- User 7 → prefix does not start with a letter  