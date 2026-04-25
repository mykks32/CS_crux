# 134. Gas Station

## Problem

There are **n gas stations** along a **circular route**, where the amount of gas at the `i`th station is `gas[i]`.

You have a car with an **unlimited gas tank** and it costs `cost[i]` units of gas to travel from the `i`th station to its next `(i + 1)`th station. You begin the journey with an **empty tank** at one of the gas stations.

Given two integer arrays `gas` and `cost`, return the **starting gas station's index** if you can travel around the circuit once in the clockwise direction. Otherwise, return **-1**.

If there exists a solution, it is guaranteed to be **unique**.

---

## Examples

### Example 1

**Input:**

```text
gas = [1,2,3,4,5]
cost = [3,4,5,1,2]
```

**Output:**

```text
3
```

**Explanation:**

- Start at station 3 (index 3) and fill up 4 units of gas. Tank = 0 + 4 = 4
- Travel to station 4: Tank = 4 - 1 + 5 = 8
- Travel to station 0: Tank = 8 - 2 + 1 = 7
- Travel to station 1: Tank = 7 - 3 + 2 = 6
- Travel to station 2: Tank = 6 - 4 + 3 = 5
- Travel to station 3: Tank = 5 - 5 + 4 = 4 → completed the circuit

**Starting index = 3**

---

### Example 2

**Input:**

```text
gas = [2,3,4]
cost = [3,4,3]
```

**Output:**

```text
-1
```

**Explanation:**

- Starting at station 0 or 1: not enough gas to travel
- Starting at station 2: Tank = 0 + 4 = 4
    - Travel to 0: Tank = 4 - 3 + 2 = 3
    - Travel to 1: Tank = 3 - 3 + 3 = 3
    - Travel to 2: Tank = 3 - 4 = -1 → cannot complete circuit

**No starting station allows completing the circuit → return -1**

---

## Constraints

- `n == gas.length == cost.length`
- `1 <= n <= 10^5`
- `0 <= gas[i], cost[i] <= 10^4`
- Input is guaranteed to have **at most one unique solution**