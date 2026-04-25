# 209. Minimum Size Subarray Sum

**Difficulty:** Medium

## Problem Description

You are given:
- An array `nums` of **positive integers**
- A positive integer `target`

## Objective

Find the **minimum length** of a contiguous subarray whose sum is:
- `>= target`

If no such subarray exists, return `0`.

## Key Idea

Since all numbers are positive:
- We can use a **sliding window (two pointers)** approach

## Approach (Sliding Window)

1. Initialize:
    - `left = 0`
    - `sum = 0`
    - `minLen = Infinity`

2. Expand right pointer:
    - Add `nums[right]` to `sum`

3. While `sum >= target`:
    - Update `minLen = min(minLen, right - left + 1)`
    - Shrink window from left:
        - subtract `nums[left]`
        - increment `left`

4. Return:
    - `minLen` if found
    - else `0`

## Examples

### Example 1

Input:
- target = 7
- nums = [2,3,1,2,4,3]

Output:
- 2

Explanation:
- Subarray [4,3] → sum = 7
- Minimum length = 2

---

### Example 2

Input:
- target = 4
- nums = [1,4,4]

Output:
- 1

Explanation:
- [4] is enough

---

### Example 3

Input:
- target = 11
- nums = [1,1,1,1,1,1,1,1]

Output:
- 0

Explanation:
- No subarray reaches 11

## Complexity

| Type | Complexity |
|------|-----------|
| Time | O(n)      |
| Space | O(1)     |