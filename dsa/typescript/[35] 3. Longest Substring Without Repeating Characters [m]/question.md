# 3. Longest Substring Without Repeating Characters

**Difficulty:** Medium

## Problem Description

Given a string `s`, find the **length of the longest substring** without repeating characters.

### Important
- Must be a **substring** (continuous)
- Not a subsequence

## Objective

Return the maximum length of a substring with all unique characters.

## Key Idea

Use a **sliding window** with a hash set/map to track characters.

## Approach (Sliding Window)

1. Use two pointers:
    - `left = 0`
    - `right = 0`

2. Use a set (or map) to store current window characters

3. Expand `right`:
    - If `s[right]` is NOT in set → add it
    - Update max length

4. If duplicate found:
    - Remove `s[left]` from set
    - Move `left` forward

5. Continue until end of string

## Why It Works

- Ensures window always contains unique characters
- Each character is processed at most twice → O(n)

## Examples

### Example 1

Input:
- s = "abcabcbb"

Output:
- 3

Explanation:
- Longest substring: "abc"

---

### Example 2

Input:
- s = "bbbbb"

Output:
- 1

Explanation:
- Only "b"

---

### Example 3

Input:
- s = "pwwkew"

Output:
- 3

Explanation:
- Longest substring: "wke"

Note:
- "pwke" is invalid (not continuous)

## Complexity

- Time: O(n)
- Space: O(min(n, charset))

## Constraints

- 0 ≤ s.length ≤ 5 × 10⁴
- s contains letters, digits, symbols, spaces  