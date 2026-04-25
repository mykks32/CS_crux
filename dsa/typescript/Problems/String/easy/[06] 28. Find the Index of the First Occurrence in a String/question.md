# 28. Find the Index of the First Occurrence in a String

**Difficulty:** Easy

## Problem Description

Given two strings:
- `haystack`
- `needle`

Return the **index of the first occurrence** of `needle` in `haystack`.

If `needle` is not found, return `-1`.

## Objective

- Find the starting index where `needle` appears in `haystack`
- Return the first such index
- If not found, return `-1`

## Approach

### Method: Sliding Window

1. Iterate through `haystack`
2. For each index `i`, check substring:
    - `haystack[i : i + needle.length]`
3. If it matches `needle`, return `i`
4. If no match is found, return `-1`

## Examples

### Example 1

Input:
- haystack = "sadbutsad"
- needle = "sad"

Output:
- 0

Explanation:
- "sad" appears at index 0 and 6
- First occurrence is at index 0

---

### Example 2

Input:
- haystack = "leetcode"
- needle = "leeto"

Output:
- -1

Explanation:
- "leeto" is not found in "leetcode"

## Constraints

- 1 ≤ haystack.length, needle.length ≤ 10⁴
- Strings contain only lowercase English letters  