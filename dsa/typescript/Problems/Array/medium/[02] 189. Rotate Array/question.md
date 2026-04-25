# 189. Rotate Array

**Difficulty:** Medium

## Problem Description

Given an integer array `nums`, rotate the array to the **right by `k` steps**, where `k` is non-negative.

## Objective

- Shift elements to the right `k` times
- Elements that fall off the end should wrap around to the beginning

## Key Idea

- Rotation is cyclic
- Use: `k = k % n` (to handle large `k`)

## Examples

### Example 1

Input:
- nums = [1,2,3,4,5,6,7]
- k = 3

Output:
- [5,6,7,1,2,3,4]

Explanation:
- Step 1 → [7,1,2,3,4,5,6]
- Step 2 → [6,7,1,2,3,4,5]
- Step 3 → [5,6,7,1,2,3,4]

---

### Example 2

Input:
- nums = [-1,-100,3,99]
- k = 2

Output:
- [3,99,-1,-100]

---

## Approaches

### 1. Extra Array (Simple)

- Create a new array
- Place each element at `(i + k) % n`

### 2. Reverse Method (Optimal)

Steps:
1. Reverse entire array
2. Reverse first `k` elements
3. Reverse remaining `n - k` elements

This achieves:
- Time: O(n)
- Space: O(1)

### 3. Cyclic Replacements

- Move elements to correct positions in cycles
- More complex but also O(1) space

## Constraints

- 1 ≤ nums.length ≤ 10⁵
- -2³¹ ≤ nums[i] ≤ 2³¹ - 1
- 0 ≤ k ≤ 10⁵  