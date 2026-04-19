# 49. Group Anagrams

**Difficulty:** Medium

## Problem Description

Given an array of strings `strs`, group the **anagrams** together.

### What is an Anagram?

Two strings are anagrams if:
- They contain the same characters
- With the same frequency
- Order does not matter

## Objective

Return groups of anagrams in any order.

## Key Idea

- Anagrams share the same **sorted form**
- Example:
    - "eat", "tea", "ate" → sorted → "aet"

## Approach

### Method: Sorting as Key

1. Create a hash map:
    - key → sorted string
    - value → list of anagrams

2. For each string:
    - Sort characters → `key`
    - Add original string to `map[key]`

3. Return all values of the map

---

### Alternative Method (Frequency Count)

- Use character count (26-length array) as key
- More efficient for long strings

## Examples

### Example 1

Input:
- strs = ["eat","tea","tan","ate","nat","bat"]

Output:
- [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:
- "eat", "tea", "ate" → same group
- "tan", "nat" → same group
- "bat" → alone

---

### Example 2

Input:
- strs = [""]

Output:
- [[""]]

---

### Example 3

Input:
- strs = ["a"]

Output:
- [["a"]]

## Complexity

### Sorting Approach
- Time: O(n * k log k)
- Space: O(n * k)

Where:
- n = number of strings
- k = max length of string

## Constraints

- 1 ≤ strs.length ≤ 10⁴
- 0 ≤ strs[i].length ≤ 100
- Strings contain lowercase English letters  