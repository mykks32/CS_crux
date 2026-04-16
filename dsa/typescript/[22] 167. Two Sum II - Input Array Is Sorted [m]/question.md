# 167. Two Sum II - Input Array Is Sorted

## Problem

Given a **1-indexed** array of integers `numbers` sorted in **non-decreasing order**, find two numbers such that they **add up to a target**.

Let the two numbers be:

```
numbers[index1] and numbers[index2]
```

Where:

```
1 <= index1 < index2 <= numbers.length
```

Return the indices as:

```
[index1, index2]
```

---

## Requirements

- Exactly **one solution exists**
- **Cannot use the same element twice**
- Must use **constant extra space**

---

## Example 1

### Input

```text
numbers = [2,7,11,15]
target = 9
```

### Output

```text
[1,2]
```

### Explanation

```
2 + 7 = 9
index1 = 1
index2 = 2
```

---

## Example 2

### Input

```text
numbers = [2,3,4]
target = 6
```

### Output

```text
[1,3]
```

### Explanation

```
2 + 4 = 6
index1 = 1
index2 = 3
```

---

## Example 3

### Input

```text
numbers = [-1,0]
target = -1
```

### Output

```text
[1,2]
```

### Explanation

```
-1 + 0 = -1
index1 = 1
index2 = 2
```

---

## Constraints

- `2 <= numbers.length <= 3 * 10^4`
- `-1000 <= numbers[i] <= 1000`
- `numbers` is sorted in **non-decreasing order**
- `-1000 <= target <= 1000`
- Exactly **one solution exists**