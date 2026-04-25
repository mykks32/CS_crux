# 228. Summary Ranges

**Difficulty:** Easy

## Problem Description

Given a **sorted unique** integer array `nums`, return the smallest list of ranges that cover all numbers.

### Range Format

- `"a->b"` if `a != b`
- `"a"` if `a == b`

## Objective

Group consecutive numbers into ranges and return them as strings.

## Key Idea

- Traverse the array
- Track the start of a range
- Extend the range while numbers are consecutive

## Approach

1. Initialize:
    - `start = nums[0]`

2. Traverse array:
    - If current number is NOT consecutive:
        - Close previous range
        - Add to result
        - Start new range

3. After loop:
    - Add the last range

## How to Detect Break

- If `nums[i] != nums[i-1] + 1`
  → sequence breaks

## Examples

### Example 1

Input:
- nums = [0,1,2,4,5,7]

Output:
- ["0->2","4->5","7"]

Explanation:
- [0,1,2] → "0->2"
- [4,5] → "4->5"
- [7] → "7"

---

### Example 2

Input:
- nums = [0,2,3,4,6,8,9]

Output:
- ["0","2->4","6","8->9"]

Explanation:
- [0] → "0"
- [2,3,4] → "2->4"
- [6] → "6"
- [8,9] → "8->9"

## Edge Cases

- Empty array → return []
- Single element → return ["num"]

## Complexity

- Time: O(n)
- Space: O(1) (excluding output)

## Constraints

- 0 ≤ nums.length ≤ 20
- -2³¹ ≤ nums[i] ≤ 2³¹ - 1
- All elements are unique and sorted  