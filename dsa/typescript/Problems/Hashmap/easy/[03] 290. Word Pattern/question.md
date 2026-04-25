# 290. Word Pattern

**Difficulty:** Easy

## Problem Description

Given:
- A string `pattern`
- A string `s` (words separated by spaces)

Determine if `s` follows the same pattern.

## Definition of Follow

A valid mapping must satisfy:
- Each character in `pattern` maps to exactly one word in `s`
- Each word maps to exactly one character
- Mapping must be **one-to-one (bijection)**

## Objective

Return:
- `true` if `s` follows the pattern
- `false` otherwise

## Key Idea

- Split `s` into words
- Check if lengths match
- Use two hash maps to maintain bijection:
    - char → word
    - word → char

## Approach

1. Split string:
    - `words = s.split(" ")`

2. If `pattern.length != words.length` → return `false`

3. Use:
    - `mapPW` → pattern → word
    - `mapWP` → word → pattern

4. Iterate:
    - If mapping exists, validate it
    - Otherwise, create mapping
    - If conflict → return `false`

5. If all valid → return `true`

## Examples

### Example 1

Input:
- pattern = "abba"
- s = "dog cat cat dog"

Output:
- true

Explanation:
- a → dog
- b → cat

---

### Example 2

Input:
- pattern = "abba"
- s = "dog cat cat fish"

Output:
- false

Explanation:
- b maps to both "cat" and "fish" → invalid

---

### Example 3

Input:
- pattern = "aaaa"
- s = "dog cat cat dog"

Output:
- false

Explanation:
- a maps to multiple words → invalid

## Constraints

- 1 ≤ pattern.length ≤ 300
- 1 ≤ s.length ≤ 3000
- Words are lowercase and space-separated  