# 196. Delete Duplicate Emails

**Difficulty:** Easy

## Table: Person

| Column Name | Type    |
|-------------|---------|
| id          | int     |
| email       | varchar |

- `id` is the primary key.
- Each row contains an email address.
- Emails are in lowercase.

## Problem Description

Some emails may appear multiple times.

You need to:
- Delete duplicate emails
- Keep only the row with the **smallest id** for each unique email

## Objective

- Remove rows where the email is duplicated
- Retain only one record per email (with minimum `id`)
- The final result should reflect the updated `Person` table

## Example

### Input

Person table:

| id | email            |
|----|------------------|
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |

### Output

| id | email            |
|----|------------------|
| 1  | john@example.com |
| 2  | bob@example.com |

## Explanation

- "john@example.com" appears twice → keep id = 1
- "bob@example.com" appears once → keep as is  