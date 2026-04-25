# Roman to Integer

## Problem

Roman numerals are represented by seven different symbols: `I, V, X, L, C, D, M`.

| Symbol | Value |
|--------|-------|
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

For example:

- 2 is written as `II` in Roman numerals (1 + 1).
- 12 is written as `XII` (10 + 1 + 1).
- 27 is written as `XXVII` (10 + 10 + 5 + 1 + 1).

Roman numerals are usually written **largest to smallest from left to right**.

However, in some cases, **subtraction is used** instead of repeating a smaller numeral four times:

- 4 is written as `IV` (5 - 1).
- 9 is written as `IX` (10 - 1).

The six instances of subtraction are:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

---

## Task

Given a Roman numeral string `s`, convert it to an integer.

---

## Examples

### Example 1

**Input:**
```text
s = "III"