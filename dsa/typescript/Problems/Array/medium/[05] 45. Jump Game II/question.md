# 45. Jump Game II

**Difficulty:** Medium

## Problem Description

You are given an integer array `nums` where:
- `nums[i]` represents the **maximum jump length** from index `i`

You start at index `0`.

## Objective

Return the **minimum number of jumps** required to reach the last index (`n - 1`).

- It is guaranteed that the last index is always reachable.

## Key Idea

Use a **greedy + BFS-like range expansion** approach:
- Think of each jump as expanding a reachable range
- When you exhaust the current range → you must take another jump

## Approach (Greedy)

1. Initialize:
    - `jumps = 0`
    - `currentEnd = 0` → end of current jump range
    - `farthest = 0` → farthest reachable index

2. Iterate from index `0` to `n - 2`:
    - Update:
        - `farthest = max(farthest, i + nums[i])`
    - If `i == currentEnd`:
        - Increment `jumps`
        - Update `currentEnd = farthest`

3. Return `jumps`

## Examples

### Example 1

Input:
- nums = [2,3,1,1,4]

Output:
- 2

Explanation:
- Jump from index 0 → index 1
- Jump from index 1 → index 4

---

### Example 2

Input:
- nums = [2,3,0,1,4]

Output:
- 2

## Intuition

- At each step, try to reach as far as possible
- Only increase jumps when you **must** move to the next range

## Constraints

- 1 ≤ nums.length ≤ 10⁴
- 0 ≤ nums[i] ≤ 1000
- Guaranteed reachable last index  