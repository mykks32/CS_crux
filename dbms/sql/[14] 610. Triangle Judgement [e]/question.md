# 610. Triangle Judgement

**Difficulty:** Easy

## Table: Triangle

| Column Name | Type |
|-------------|------|
| x           | int  |
| y           | int  |
| z           | int  |

- (x, y, z) is the primary key.
- Each row contains the lengths of three line segments.

## Problem Description

For each set of three line segments, determine whether they can form a **triangle**.

A triangle is valid if:
- The sum of any two sides is greater than the third side.

## Objective

Report for every row whether the given segments can form a triangle:
- Return `"Yes"` if they can form a triangle.
- Return `"No"` otherwise.

Return the result table in any order.

## Example

### Input

Triangle table:

| x  | y  | z  |
|----|----|----|
| 13 | 15 | 30 |
| 10 | 20 | 15 |

### Output

| x  | y  | z  | triangle |
|----|----|----|----------|
| 13 | 15 | 30 | No       |
| 10 | 20 | 15 | Yes      |

## Explanation

- (13, 15, 30) → 13 + 15 = 28 ≤ 30 → Not a triangle
- (10, 20, 15) → All conditions satisfied → Valid triangle  