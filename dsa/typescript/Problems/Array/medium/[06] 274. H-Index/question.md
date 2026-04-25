# 274. H-Index

**Difficulty:** Medium

## Problem Description

You are given an array `citations` where:
- `citations[i]` represents the number of citations for the ith paper

## Objective

Return the **h-index** of the researcher.

### Definition

The **h-index** is the maximum value `h` such that:
- The researcher has **at least `h` papers**
- Each of those papers has **at least `h` citations**

## Key Idea

- Sort citations in **descending order**
- Find the largest `h` such that:
    - `citations[i] ≥ i + 1`

## Approach

1. Sort the array in descending order
2. Iterate through the array:
    - For index `i`, check:
        - If `citations[i] ≥ i + 1`
3. The largest valid `i + 1` is the h-index

## Examples

### Example 1

Input:
- citations = [3,0,6,1,5]

Sorted:
- [6,5,3,1,0]

Output:
- 3

Explanation:
- 3 papers have at least 3 citations

---

### Example 2

Input:
- citations = [1,3,1]

Sorted:
- [3,1,1]

Output:
- 1

Explanation:
- Only 1 paper has at least 1 citation

## Constraints

- 1 ≤ n ≤ 5000
- 0 ≤ citations[i] ≤ 1000  