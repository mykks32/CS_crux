# 36. Valid Sudoku

**Difficulty:** Medium

## Problem Description

Determine if a given 9×9 Sudoku board is valid.

A valid Sudoku must satisfy:

1. Each row contains digits 1–9 without repetition
2. Each column contains digits 1–9 without repetition
3. Each 3×3 sub-box contains digits 1–9 without repetition

Note:
- Only filled cells need to be validated (`'.'` is ignored)
- The board does NOT need to be solvable

## Objective

Return:
- `true` if the board is valid
- `false` otherwise

## Examples

### Example 1

Input:
board =
```
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
```

Output:
- true

---

### Example 2

Input:
board = 
```
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]] 
```

Output:
- false

## Complexity

- Time: O(1) (fixed 9×9 board)
- Space: O(1)

## Constraints

- board is always 9×9
- Cells contain digits '1'-'9' or '.'  