# 219. Contains Duplicate II

**Difficulty:** Easy

## Problem Description

Given:
- An integer array `nums`
- An integer `k`

Determine if there exist two distinct indices `i` and `j` such that:
- `nums[i] == nums[j]`
- `|i - j| <= k`

## Objective

Return:
- `true` if such a pair exists
- `false` otherwise

## Key Idea

Use a **hash map** to store the most recent index of each number.

## Approach

1. Create a map:
    - key → number
    - value → latest index seen

2. Traverse the array:
    - If number already exists in map:
        - Check distance: `i - map[num] <= k`
        - If yes → return `true`
    - Update map with current index

3. If no valid pair found → return `false`

## Examples

### Example 1

Input:
- nums = [1,2,3,1]
- k = 3

Output:
- true

Explanation:
- 1 appears at index 0 and 3 → distance = 3

---

### Example 2

Input:
- nums = [1,0,1,1]
- k = 1

Output:
- true

Explanation:
- 1 appears at index 2 and 3 → distance = 1

---

### Example 3

Input:
- nums = [1,2,3,1,2,3]
- k = 2

Output:
- false

Explanation:
- No duplicates within distance ≤ 2

## Complexity

- Time: O(n)
- Space: O(n)

## Constraints

- 1 ≤ nums.length ≤ 10⁵
- -10⁹ ≤ nums[i] ≤ 10⁹
- 0 ≤ k ≤ 10⁵  