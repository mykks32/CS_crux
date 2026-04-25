# 57. Insert Interval

**Difficulty:** Medium

## Problem Description

You are given:
- A sorted list of non-overlapping intervals `intervals`
- A new interval `newInterval`

## Objective

Insert `newInterval` into `intervals` such that:
- The result remains sorted
- All overlapping intervals are merged

## Key Idea

Divide intervals into 3 parts:

1. Intervals completely before `newInterval`
2. Intervals overlapping with `newInterval`
3. Intervals completely after `newInterval`

## Approach

### Step 1: Add left side (no overlap)

Add all intervals where:
- `interval.end < newInterval.start`

---

### Step 2: Merge overlapping intervals

While:
- `interval.start <= newInterval.end`

Merge:
- `newInterval.start = min(start)`
- `newInterval.end = max(end)`

---

### Step 3: Add right side

Add remaining intervals where:
- `interval.start > newInterval.end`

---

## Examples

### Example 1

Input:
- intervals = [[1,3],[6,9]]
- newInterval = [2,5]

Output:
- [[1,5],[6,9]]

Explanation:
- [1,3] overlaps with [2,5] → merged to [1,5]

---

### Example 2

Input:
- intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]
- newInterval = [4,8]

Output:
- [[1,2],[3,10],[12,16]]

Explanation:
- Overlaps with [3,5], [6,7], [8,10]

---

## Complexity

- Time: O(n)
- Space: O(n)

## Constraints

- 0 ≤ intervals.length ≤ 10⁴
- Intervals are sorted and non-overlapping
- 0 ≤ start ≤ end ≤ 10⁵  