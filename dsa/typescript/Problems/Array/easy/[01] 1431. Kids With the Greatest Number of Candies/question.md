# 1431. Kids With the Greatest Number of Candies

**Difficulty:** Easy

## Problem Description

You are given:
- An integer array `candies`, where `candies[i]` represents the number of candies each kid has
- An integer `extraCandies`, representing extra candies you can give to any one kid

## Task

Return a boolean array `result` where:
- `result[i] = true` if, after giving all `extraCandies` to the ith kid, they will have **the greatest number of candies among all kids**
- Otherwise, `result[i] = false`

👉 Note: Multiple kids can have the greatest number of candies.

## Approach

1. Find the **maximum candies** any kid currently has:
    - `maxCandies = max(candies)`
2. For each kid:
    - Check if `candies[i] + extraCandies >= maxCandies`
    - If yes → `true`, else → `false`

## Examples

### Example 1

Input:
- candies = [2,3,5,1,3]
- extraCandies = 3

Output:
- [true,true,true,false,true]

Explanation:
- Compare each kid after adding 3 candies with the maximum (5)

---

### Example 2

Input:
- candies = [4,2,1,1,2]
- extraCandies = 1

Output:
- [true,false,false,false,false]

Explanation:
- Only the first kid can reach or exceed the maximum

---

### Example 3

Input:
- candies = [12,1,12]
- extraCandies = 10

Output:
- [true,false,true]

Explanation:
- Kids with 12 remain tied for the greatest after adding extra candies

## Constraints

- n == candies.length
- 2 ≤ n ≤ 100
- 1 ≤ candies[i] ≤ 100
- 1 ≤ extraCandies ≤ 50  