# 54. Spiral Matrix

**Difficulty:** Medium

## Problem Description

Given an `m x n` matrix, return all elements in **spiral order**.

## Objective

Traverse the matrix in this order:
- Left → Right
- Top → Bottom
- Right → Left
- Bottom → Top  
  (repeat until all elements are visited)

## Key Idea

Use four boundaries:
- `top`
- `bottom`
- `left`
- `right`

Shrink boundaries after each traversal.

## Approach

1. Initialize:
    - `top = 0`, `bottom = m - 1`
    - `left = 0`, `right = n - 1`

2. While `top <= bottom` and `left <= right`:

    - Traverse left → right (top row), then `top++`
    - Traverse top → bottom (right column), then `right--`
    - If still valid:
        - Traverse right → left (bottom row), then `bottom--`
    - If still valid:
        - Traverse bottom → top (left column), then `left++`

## Examples

### Example 1

Input:
- matrix = [[1,2,3],[4,5,6],[7,8,9]]

Output:
- [1,2,3,6,9,8,7,4,5]

---

### Example 2

Input:
- matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

Output:
- [1,2,3,4,8,12,11,10,9,5,6,7]

## Complexity

- Time: O(m × n)
- Space: O(1) (excluding output)

## Constraints

- 1 ≤ m, n ≤ 10
- -100 ≤ matrix[i][j] ≤ 100  