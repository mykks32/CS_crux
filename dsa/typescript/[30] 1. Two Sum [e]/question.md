# 1. Two Sum

**Difficulty:** Easy

## Problem Description

Given:
- An integer array `nums`
- An integer `target`

Find **two indices** such that:
- `nums[i] + nums[j] = target`
- `i != j`

## Objective

Return the indices of the two numbers.
- Exactly one valid solution exists
- Return in any order

## Key Idea

Use a **hash map** to store previously seen numbers and their indices.

## Approach (Optimal - One Pass Hash Map)

1. Create an empty map:
    - key → number
    - value → index

2. Iterate through the array:
    - For each number `num`, compute:
        - `complement = target - num`
    - If `complement` exists in map:
        - Return `[map[complement], current index]`
    - Otherwise:
        - Store current number in map

## Why It Works

- We check if the required pair already exists
- Avoids nested loops → improves efficiency

## Examples

### Example 1

Input:
- nums = [2,7,11,15]
- target = 9

Output:
- [0,1]

Explanation:
- 2 + 7 = 9

---

### Example 2

Input:
- nums = [3,2,4]
- target = 6

Output:
- [1,2]

---

### Example 3

Input:
- nums = [3,3]
- target = 6

Output:
- [0,1]

## Complexity

- Time: O(n)
- Space: O(n)

## Constraints

- 2 ≤ nums.length ≤ 10⁴
- -10⁹ ≤ nums[i] ≤ 10⁹
- -10⁹ ≤ target ≤ 10⁹  