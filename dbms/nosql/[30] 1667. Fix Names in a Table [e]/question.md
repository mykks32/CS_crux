# 1667. Fix Names in a Table

**Difficulty:** Easy

## Table: Users

| Column Name | Type    |
|-------------|---------|
| user_id     | int     |
| name        | varchar |

- `user_id` is the primary key.
- `name` contains uppercase and lowercase characters.

## Problem Description

Each user's name may have inconsistent capitalization.

You need to format each name such that:
- The **first character is uppercase**
- The **remaining characters are lowercase**

## Objective

- Transform the `name` column accordingly
- Return the result ordered by `user_id`

## Example

### Input

Users table:

| user_id | name  |
|---------|-------|
| 1       | aLice |
| 2       | bOB   |

### Output

| user_id | name  |
|---------|-------|
| 1       | Alice |
| 2       | Bob   |

## Explanation

- "aLice" → "Alice"
- "bOB" → "Bob"  