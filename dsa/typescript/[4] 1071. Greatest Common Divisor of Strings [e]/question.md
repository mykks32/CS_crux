# 1071. Greatest Common Divisor of Strings

**Difficulty:** Easy

## Problem Description

For two strings `s` and `t`, we say **"t divides s"** if:

> `s` can be formed by concatenating `t` one or more times.

Given two strings `str1` and `str2`, return the **largest string `x`** such that:
- `x` divides both `str1` and `str2`

If no such string exists, return an empty string `""`.

## Key Idea

A valid common divisor string must satisfy:
- Both strings are made by repeating the same base pattern
- The length of that base pattern must divide both string lengths

## Approach

1. **Check concatenation property**
    - If `str1 + str2 != str2 + str1`, then no common divisor exists → return `""`
2. **Find GCD of lengths**
    - Let `g = gcd(len(str1), len(str2))`
3. **Return substring**
    - The answer is the prefix of length `g` from either string

## Examples

### Example 1

Input:
- str1 = "ABCABC"
- str2 = "ABC"

Output:
- "ABC"

Explanation:
- "ABC" repeated forms both strings

---

### Example 2

Input:
- str1 = "ABABAB"
- str2 = "ABAB"

Output:
- "AB"

---

### Example 3

Input:
- str1 = "LEET"
- str2 = "CODE"

Output:
- ""

Explanation:
- No common repeating pattern

---

### Example 4

Input:
- str1 = "AAAAAB"
- str2 = "AAA"

Output:
- ""

Explanation:
- Patterns do not align to form a common divisor

## Constraints

- 1 ≤ str1.length, str2.length ≤ 1000
- Strings consist of uppercase English letters  