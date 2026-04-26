# 20. Valid Parentheses

**Difficulty:** Easy

## Problem Description

Given a string `s` containing only:
- `'(' , ')' , '{' , '}' , '[' , ']'`

Determine if the string is **valid**.

## Valid Conditions

1. Every opening bracket must be closed by the same type
2. Brackets must be closed in the correct order
3. Every closing bracket must have a matching opening bracket

## Objective

Return:
- `true` if the string is valid
- `false` otherwise

## Key Idea

Use a **stack**:
- Push opening brackets
- Match and pop when encountering closing brackets

## Approach

1. Create a stack
2. Create a mapping:
    - `)` → `(`
    - `}` → `{`
    - `]` → `[`

3. Traverse the string:
    - If opening bracket → push to stack
    - If closing bracket:
        - If stack is empty → return false
        - Pop top and check if it matches
        - If not match → return false

4. At the end:
    - If stack is empty → valid
    - Else → invalid

## Examples

### Example 1

Input:
- s = "()"

Output:
- true

---

### Example 2

Input:
- s = "()[]{}"

Output:
- true

---

### Example 3

Input:
- s = "(]"

Output:
- false

---

### Example 4

Input:
- s = "([])"

Output:
- true

---

### Example 5

Input:
- s = "([)]"

Output:
- false

## Complexity

- Time: O(n)
- Space: O(n)

## Constraints

- 1 ≤ s.length ≤ 10⁴
- s contains only '()[]{}'  