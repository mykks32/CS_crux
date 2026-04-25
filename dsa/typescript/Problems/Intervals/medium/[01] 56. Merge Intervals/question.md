# 56. Merge Intervals

**Difficulty:** Medium

## Problem Description

You are given an array of intervals:
- `intervals[i] = [starti, endi]`

Merge all overlapping intervals and return the list of non-overlapping intervals.

## Objective

- Combine overlapping intervals
- Return merged intervals sorted

## Key Idea

- Sort intervals by start time
- Merge if current interval overlaps with previous

## Approach

### Step 1: Sort
Sort intervals by `start`

### Step 2: Merge

1. Initialize result list
2. Take first interval as current
3. For each next interval:
    - If it overlaps (`current.end >= next.start`):
        - Merge: `current.end = max(current.end, next.end)`
    - Else:
        - Add current to result
        - Move to next interval
4. Add last interval

## When do intervals overlap?

- `[a, b]` and `[c, d]` overlap if:
    - `c <= b`

## Examples

### Example 1

Input:
- intervals = [[1,3],[2,6],[8,10],[15,18]]

Output:
- [[1,6],[8,10],[15,18]]

Explanation:
- [1,3] + [2,6] → [1,6]

---

### Example 2

Input:
- intervals = [[1,4],[4,5]]

Output:
- [[1,5]]

Explanation:
- Touching endpoints are considered overlapping

---

### Example 3

Input:
- intervals = [[4,7],[1,4]]

Output:
- [[1,7]]

Explanation:
- [1,4] and [4,7] merge into [1,7]

## Complexity

- Time: O(n log n) (sorting)
- Space: O(n)

## Constraints

- 1 ≤ intervals.length ≤ 10⁴
- 0 ≤ starti ≤ endi ≤ 10⁴  