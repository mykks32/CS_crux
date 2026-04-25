# 6. Zigzag Conversion

**Difficulty:** Medium

## Problem Description

The string `s` is written in a zigzag pattern across `numRows`, then read line by line.

## Example Pattern

For `s = "PAYPALISHIRING"`, `numRows = 3`:

P   A   H   N  
A P L S I I G  
Y   I   R

Reading row by row gives:
→ `"PAHNAPLSIIGYIR"`

## Objective

Convert the given string into its zigzag form and return the result read row-wise.

## Key Idea

- Simulate writing characters row by row
- Move direction:
    - Downwards → top to bottom
    - Then upwards diagonally → bottom to top
- Switch direction when hitting first or last row

## Approach

1. If `numRows == 1`, return `s`
2. Create an array of strings for each row
3. Track:
    - `currentRow`
    - `goingDown` (direction flag)
4. Traverse characters:
    - Append to current row
    - Change direction at boundaries (0 or numRows-1)

## Examples

### Example 1

Input:
- s = "PAYPALISHIRING"
- numRows = 3

Output:
- "PAHNAPLSIIGYIR"

---

### Example 2

Input:
- s = "PAYPALISHIRING"
- numRows = 4

Output:
- "PINALSIGYAHRPI"

Pattern:
```
P     I    N
A   L S  I G
Y A   H R
P     I
```

---

### Example 3

Input:
- s = "A"
- numRows = 1

Output:
- "A"

## Constraints

- 1 ≤ s.length ≤ 1000
- 1 ≤ numRows ≤ 1000
- s contains letters, ',' and '.'  
