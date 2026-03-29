# 619. Biggest Single Number

**Difficulty:** Easy

## Table: MyNumbers

| Column Name | Type |
|-------------|------|
| num         | int  |

- This table may contain duplicates.
- There is no primary key.
- Each row contains an integer.

## Problem Description

A **single number** is a number that appears **only once** in the table.

You need to find the **largest single number**.

If no such number exists, return `null`.

## Objective

- Identify numbers that appear exactly once
- From those, return the maximum value
- If no single number exists, return `null`

## Example 1

### Input

MyNumbers table:

| num |
|-----|
| 8   |
| 8   |
| 3   |
| 3   |
| 1   |
| 4   |
| 5   |
| 6   |

### Output

| num |
|-----|
| 6   |

## Explanation

- Single numbers → 1, 4, 5, 6
- Largest single number → 6

## Example 2

### Input

MyNumbers table:

| num |
|-----|
| 8   |
| 8   |
| 7   |
| 7   |
| 3   |
| 3   |
| 3   |

### Output

| num  |
|------|
| null |

## Explanation

- No number appears exactly once
- Result → null  