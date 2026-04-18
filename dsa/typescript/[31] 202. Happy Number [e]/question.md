# 202. Happy Number

**Difficulty:** Easy

## Problem Description

A number is called **happy** if it follows this process:

1. Start with a positive integer `n`
2. Replace it with the **sum of squares of its digits**
3. Repeat the process
4. If it eventually becomes `1` → it is a happy number
5. If it enters a loop → it is not happy

## Objective

Return:
- `true` if `n` is a happy number
- `false` otherwise

## Key Idea

- If a cycle occurs that does not include `1`, we must detect it
- Use a **set** to track previously seen numbers

## Approach

### Step 1: Helper function
Compute:
- sum of squares of digits

Example:
- 19 → 1² + 9² = 82

---

### Step 2: Cycle detection

1. Create a set `seen`
2. While `n != 1`:
    - If `n` is already in `seen` → return `false`
    - Add `n` to `seen`
    - Replace `n` with sum of squares of digits
3. If loop ends with `n == 1` → return `true`

## Examples

### Example 1

Input:
- n = 19

Process:
- 19 → 82 → 68 → 100 → 1

Output:
- true

---

### Example 2

Input:
- n = 2

Process:
- 2 → 4 → 16 → 37 → 58 → 89 → 145 → ... (cycle)

Output:
- false

## Alternative Idea

- Floyd Cycle Detection (slow & fast pointers)
- Same idea as linked list cycle detection

## Complexity

- Time: O(log n) per iteration
- Space: O(k) for seen numbers

## Constraints

- 1 ≤ n ≤ 2³¹ − 1  