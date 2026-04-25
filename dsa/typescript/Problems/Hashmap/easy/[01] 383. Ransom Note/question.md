# 383. Ransom Note

**Difficulty:** Easy

## Problem Description

You are given two strings:
- `ransomNote`
- `magazine`

You need to determine if `ransomNote` can be constructed using letters from `magazine`.

## Rules

- Each letter in `magazine` can be used **only once**
- All characters are lowercase English letters

## Objective

Return:
- `true` if `ransomNote` can be formed
- `false` otherwise

## Key Idea

- Count the frequency of each character in `magazine`
- Subtract counts while building `ransomNote`
- If any character is insufficient → return `false`

## Approach

1. Create a frequency map (array of size 26)
2. Count characters in `magazine`
3. Iterate through `ransomNote`:
    - Decrease count for each character
    - If count < 0 → return `false`
4. If all characters are matched → return `true`

## Examples

### Example 1

Input:
- ransomNote = "a"
- magazine = "b"

Output:
- false

---

### Example 2

Input:
- ransomNote = "aa"
- magazine = "ab"

Output:
- false

---

### Example 3

Input:
- ransomNote = "aa"
- magazine = "aab"

Output:
- true

## Explanation

- Example 3:
    - magazine has 2 'a's → enough to build "aa"

## Constraints

- 1 ≤ ransomNote.length, magazine.length ≤ 10⁵
- Strings contain only lowercase English letters  