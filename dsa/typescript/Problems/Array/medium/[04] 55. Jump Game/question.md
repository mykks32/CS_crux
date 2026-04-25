# 55. Jump Game

**Difficulty:** Medium

## Problem Description

You are given an integer array `nums` where:
- `nums[i]` represents the **maximum jump length** from index `i`

You start at index `0`.

## Objective

Return:
- `true` if you can reach the **last index**
- `false` otherwise

## Key Idea

- Track the **farthest index** you can reach
- If at any point your current index exceeds this reachable range → you are stuck

## Approach (Greedy)

1. Initialize:
    - `maxReach = 0`

2. Iterate through the array:
    - If `i > maxReach` → return `false`
    - Update:
        - `maxReach = max(maxReach, i + nums[i])`

3. If loop completes → return `true`

## Examples

### Example 1

Input:
- nums = [2,3,1,1,4]

Output:
- true

Explanation:
- From index 0 → jump to index 1
- From index 1 → jump to last index

---

### Example 2

Input:
- nums = [3,2,1,0,4]

Output:
- false

Explanation:
- You get stuck at index 3 (value = 0)
- Cannot move forward to reach the last index

## Constraints

- 1 ≤ nums.length ≤ 10⁴
- 0 ≤ nums[i] ≤ 10⁵  