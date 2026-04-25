# 14. Longest Common Prefix

**Difficulty:** Easy

## Problem Description

Given an array of strings `strs`, find the **longest common prefix** shared among all strings.

If no common prefix exists, return an empty string `""`.

## Objective

- Compare strings to find the longest starting substring common to all
- Return that prefix

## Approach

### Method: Horizontal Scanning

1. Initialize `prefix` as the first string
2. Compare it with each string:
    - While the current string does not start with `prefix`:
        - Remove the last character from `prefix`
3. If `prefix` becomes empty → return `""`

## Examples

### Example 1

Input:
- strs = ["flower","flow","flight"]

Output:
- "fl"

Explanation:
- Common prefix among all strings is "fl"

---

### Example 2

Input:
- strs = ["dog","racecar","car"]

Output:
- ""

Explanation:
- No common prefix exists

## Constraints

- 1 ≤ strs.length ≤ 200
- 0 ≤ strs[i].length ≤ 200
- Strings contain only lowercase English letters  