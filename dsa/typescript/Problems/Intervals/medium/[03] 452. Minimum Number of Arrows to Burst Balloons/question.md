# 452. Minimum Number of Arrows to Burst Balloons

**Difficulty:** Medium

## Problem Description

You are given an array `points` where:
- `points[i] = [xstart, xend]` represents a balloon

An arrow shot at position `x` bursts all balloons where:
- `xstart ≤ x ≤ xend`

## Objective

Return the **minimum number of arrows** required to burst all balloons.

## Key Idea

- This is an **interval overlap problem**
- Shoot arrows at optimal positions to cover maximum balloons

## Greedy Strategy

- Sort balloons by their **end coordinate**
- Always shoot an arrow at the **end of the first balloon**
- Continue and only shoot a new arrow when needed

## Approach

1. Sort `points` by `xend`
2. Initialize:
    - `arrows = 1`
    - `end = points[0][1]`

3. Iterate through balloons:
    - If `points[i][0] > end`:
        - Need new arrow
        - `arrows++`
        - Update `end = points[i][1]`
    - Else:
        - Current arrow can burst it

## Why It Works

- Shooting at the earliest end maximizes overlap coverage
- Classic greedy interval scheduling logic

## Examples

### Example 1

Input:
- points = [[10,16],[2,8],[1,6],[7,12]]

Output:
- 2

Explanation:
- Arrow at x = 6 → bursts [1,6], [2,8]
- Arrow at x = 11 → bursts [7,12], [10,16]

---

### Example 2

Input:
- points = [[1,2],[3,4],[5,6],[7,8]]

Output:
- 4

Explanation:
- No overlaps → one arrow per balloon

---

### Example 3

Input:
- points = [[1,2],[2,3],[3,4],[4,5]]

Output:
- 2

Explanation:
- Arrow at x = 2 → bursts first two
- Arrow at x = 4 → bursts last two

## Complexity

- Time: O(n log n) (sorting)
- Space: O(1)

## Constraints

- 1 ≤ points.length ≤ 10⁵
- -2³¹ ≤ xstart < xend ≤ 2³¹ - 1  