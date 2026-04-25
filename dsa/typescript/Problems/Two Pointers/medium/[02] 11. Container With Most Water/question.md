# 11. Container With Most Water

## Problem

You are given an integer array `height` of length `n`.

Each index `i` represents a vertical line with endpoints:

```
(i, 0) and (i, height[i])
```

---

## Task

Find two lines that, together with the x-axis, form a container that holds the **maximum amount of water**.

- You may NOT tilt the container
- Return the **maximum area**

---

## How Area is Calculated

For two indices `i` and `j`:

```
area = min(height[i], height[j]) * (j - i)
```

- Width = `j - i`
- Height = smaller of the two lines

---

## Example 1

### Input

```text
height = [1,8,6,2,5,4,8,3,7]
```

### Output

```text
49
```

### Explanation

The best pair is:

- `height[1] = 8`
- `height[8] = 7`

```
area = min(8,7) * (8 - 1)
     = 7 * 7
     = 49
```

---

## Example 2

### Input

```text
height = [1,1]
```

### Output

```text
1
```

### Explanation

```
area = min(1,1) * (1 - 0) = 1
```

---

## Constraints

- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`