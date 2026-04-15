# 125. Valid Palindrome

**Difficulty:** Easy

## Problem Description

A string is considered a **palindrome** if:
- After converting all uppercase letters to lowercase
- After removing all non-alphanumeric characters
- It reads the same forward and backward

## Objective

Return:
- `true` if the string is a palindrome
- `false` otherwise

## Key Idea

- Ignore non-alphanumeric characters
- Compare characters from both ends

## Approach (Two Pointers)

1. Initialize two pointers:
    - `left = 0`
    - `right = s.length - 1`

2. While `left < right`:
    - Skip non-alphanumeric characters
    - Convert both characters to lowercase
    - If mismatch → return `false`
    - Move both pointers inward

3. If all characters match → return `true`

## Examples

### Example 1

Input:
- s = "A man, a plan, a canal: Panama"

Output:
- true

Explanation:
- Processed → "amanaplanacanalpanama"
- Same forward and backward

---

### Example 2

Input:
- s = "race a car"

Output:
- false

Explanation:
- Processed → "raceacar"
- Not a palindrome

---

### Example 3

Input:
- s = " "

Output:
- true

Explanation:
- Becomes empty string ""
- Empty string is a palindrome

## Constraints

- 1 ≤ s.length ≤ 2 × 10⁵
- s contains printable ASCII characters  