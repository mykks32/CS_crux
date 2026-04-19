# 128. Longest Consecutive Sequence

**Difficulty:** Medium

## Problem Description

Given an unsorted array of integers `nums`, find the length of the **longest consecutive elements sequence**.

### Requirement
- Must run in **O(n)** time

## Objective

Return the length of the longest sequence of consecutive integers.

## Key Idea

- Use a **HashSet** for O(1) lookups
- Only start counting when a number is the **start of a sequence**

## Approach

1. Insert all numbers into a set
2. For each number:
    - Check if `(num - 1)` is NOT in the set  
      → This means it's the **start of a sequence**
3. If it's a start:
    - Keep checking `num + 1`, `num + 2`, ...
    - Count the length of the sequence
4. Track the maximum length

## Why This Works

- Each sequence is counted only once
- Avoids redundant work → ensures O(n)

## Examples

### Example 1

Input:
- nums = [100,4,200,1,3,2]

Output:
- 4

Explanation:
- Sequence: [1,2,3,4]

---

### Example 2

Input:
- nums = [0,3,7,2,5,8,4,6,0,1]

Output:
- 9

Explanation:
- Sequence: [0,1,2,3,4,5,6,7,8]

---

### Example 3

Input:
- nums = [1,0,1,2]

Output:
- 3

Explanation:
- Sequence: [0,1,2]

## Complexity

- Time: O(n)
- Space: O(n)

## Constraints

- 0 ≤ nums.length ≤ 10⁵
- -10⁹ ≤ nums[i] ≤ 10⁹  