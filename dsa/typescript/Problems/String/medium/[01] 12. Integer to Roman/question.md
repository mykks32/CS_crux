# 12. Integer to Roman

**Difficulty:** Medium

## Problem Description

You are given an integer `num`. Convert it to a **Roman numeral**.

Roman numerals use the following symbols:

| Symbol | Value |
|--------|------|
| I      | 1    |
| V      | 5    |
| X      | 10   |
| L      | 50   |
| C      | 100  |
| D      | 500  |
| M      | 1000 |

## Rules

1. **Build from largest to smallest values**
2. Use **subtractive notation** for:
    - 4 → IV
    - 9 → IX
    - 40 → XL
    - 90 → XC
    - 400 → CD
    - 900 → CM
3. Symbols like `I, X, C, M` can repeat up to 3 times
4. Symbols like `V, L, D` cannot repeat

## Objective

- Convert the integer into its Roman numeral representation

## Approach

Use a **greedy method**:
1. Prepare a list of values and corresponding symbols:
    - [1000, 900, 500, 400, ..., 1]
2. Iterate through the list:
    - While `num >= value`:
        - Append symbol
        - Subtract value from `num`

## Examples

### Example 1

Input:
- num = 3749

Output:
- "MMMDCCXLIX"

Explanation:
- 3000 → MMM
- 700 → DCC
- 40 → XL
- 9 → IX

---

### Example 2

Input:
- num = 58

Output:
- "LVIII"

Explanation:
- 50 → L
- 8 → VIII

---

### Example 3

Input:
- num = 1994

Output:
- "MCMXCIV"

Explanation:
- 1000 → M
- 900 → CM
- 90 → XC
- 4 → IV

## Constraints

- 1 ≤ num ≤ 3999  