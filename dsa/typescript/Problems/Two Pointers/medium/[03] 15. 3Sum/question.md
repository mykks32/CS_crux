# 15. 3Sum

## Problem

Given an integer array `nums`, return all unique triplets:

```
[nums[i], nums[j], nums[k]]
```

such that:

- `i != j != k`
- `nums[i] + nums[j] + nums[k] == 0`

---

## Important Notes

- You must return **unique triplets only**
- The order of output and triplets does **not matter**

---

## Example 1

### Input

```text
nums = [-1,0,1,2,-1,-4]
```

### Output

```text
[[-1,-1,2],[-1,0,1]]
```

### Explanation

Valid triplets:

- `(-1) + 0 + 1 = 0`
- `(-1) + 2 + (-1) = 0`

Unique results:

```
[-1, -1, 2]
[-1, 0, 1]
```

---

## Example 2

### Input

```text
nums = [0,1,1]
```

### Output

```text
[]
```

### Explanation

No triplet sums to `0`

---

## Example 3

### Input

```text
nums = [0,0,0]
```

### Output

```text
[[0,0,0]]
```

### Explanation

Only one valid triplet exists

---

## Constraints

- `3 <= nums.length <= 3000`
- `-10^5 <= nums[i] <= 10^5`