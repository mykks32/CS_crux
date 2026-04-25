# 605. Can Place Flowers

## Problem

You are given a **flowerbed** represented as an array:

- `0` → empty plot
- `1` → plot already planted

You need to determine if **n new flowers** can be planted **without violating the no-adjacent-flowers rule**.

---

## Input

- `flowerbed`: integer array of 0's and 1's
- `n`: integer, number of flowers to plant

### Constraints

- `1 <= flowerbed.length <= 2 * 10^4`
- `flowerbed[i]` is 0 or 1
- No two adjacent flowers exist initially
- `0 <= n <= flowerbed.length`

---

## Task

Return:

- `true` → if `n` flowers can be planted
- `false` → otherwise

---

## Example 1

### Input

```text
flowerbed = [1,0,0,0,1], n = 1
```

### Output

```text
true
```

---

## Example 2

### Input

```text
flowerbed = [1,0,0,0,1], n = 2
```

### Output

```text
false
```

---

### Explanation

- Flowers **cannot be adjacent**
- In Example 1, there is **space for 1 flower** (index 2)
- In Example 2, **only 1 spot available**, so planting 2 flowers is impossible