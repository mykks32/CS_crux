# 380. Insert Delete GetRandom O(1)

**Difficulty:** Medium

## Problem Description

You need to implement a data structure `RandomizedSet` that supports:

### Operations

1. `insert(val)`
    - Insert `val` if not present
    - Return `true` if inserted, `false` if already exists

2. `remove(val)`
    - Remove `val` if present
    - Return `true` if removed, `false` if not found

3. `getRandom()`
    - Return a **random element** from the current set
    - Each element must have **equal probability**
    - Guaranteed at least one element exists

## Requirement

All operations must run in **average O(1) time complexity**.

---

## Key Idea

To achieve O(1):

We use:
- Array → to store elements (for random access)
- HashMap → to store index of each element

---

## Data Structure Design

### 1. Array (nums)
- Stores all elements
- Enables O(1) random access

### 2. HashMap (map)
- Key: value
- Value: index in array

---

## Operations

### Insert(val)
- If val exists → return false
- Add val to array
- Store index in map

---

### Remove(val)
- If val not exists → return false
- Swap with last element in array
- Update map for swapped element
- Remove last element
- Delete from map

---

### getRandom()
- Pick random index from array
- Return element

---

## Example Flow

### Input
["insert", "remove", "insert", "getRandom", ...]

### Output
[true, false, true, 2, ...]

---

## Explanation

- insert(1) → [1]
- insert(2) → [1,2]
- remove(1) → [2]
- getRandom() → always 2

---

## Complexity

| Operation  | Time Complexity |
|------------|----------------|
| insert     | O(1) average   |
| remove     | O(1) average   |
| getRandom  | O(1)           |

## Constraints

- -2³¹ ≤ val ≤ 2³¹ - 1
- At most 2 × 10⁵ calls will be made  