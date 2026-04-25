# 242. Valid Anagram

**Difficulty:** Easy

## Problem Description

Given two strings `s` and `t`, determine if `t` is an **anagram** of `s`.

An anagram means:
- Both strings contain the **same characters**
- With the **same frequency**
- Order does not matter

## Objective

Return:
- `true` if `t` is an anagram of `s`
- `false` otherwise

## Key Idea

- Compare frequency of each character in both strings

## Approach

### Method: Frequency Count (Optimal)

1. If lengths differ → return `false`
2. Create a frequency array of size 26 (for lowercase letters)
3. Traverse both strings:
    - Increment count for `s[i]`
    - Decrement count for `t[i]`
4. If all counts are `0` → valid anagram

## Examples

### Example 1

Input:
- s = "anagram"
- t = "nagaram"

Output:
- true

Explanation:
- Same characters with same frequency

---

### Example 2

Input:
- s = "rat"
- t = "car"

Output:
- false

Explanation:
- Characters differ

## Follow-up (Unicode Characters)

- Use a **HashMap** instead of fixed array
- Count frequency of each character
- Works for any character set

## Constraints

- 1 ≤ s.length, t.length ≤ 5 × 10⁴
- Strings contain lowercase English letters  