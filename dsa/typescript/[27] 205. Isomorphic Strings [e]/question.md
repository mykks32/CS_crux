# 205. Isomorphic Strings

**Difficulty:** Easy

## Problem Description

Two strings `s` and `t` are **isomorphic** if:
- Characters in `s` can be replaced to get `t`
- Each character must map consistently

## Rules

- Each character in `s` must map to exactly one character in `t`
- No two characters in `s` can map to the same character in `t`
- A character can map to itself

## Objective

Return:
- `true` if `s` and `t` are isomorphic
- `false` otherwise

## Key Idea

We need a **one-to-one mapping** (bijection):
- `s → t`
- `t → s` (to avoid conflicts)

## Approach

Use two hash maps:

1. `mapST` → maps characters from `s` to `t`
2. `mapTS` → maps characters from `t` to `s`

## Steps

For each character pair `(c1, c2)`:
- If `c1` is already mapped:
    - Check if it maps to `c2`, else return `false`
- If `c2` is already mapped:
    - Check if it maps to `c1`, else return `false`
- Otherwise, create both mappings

## Examples

### Example 1

Input:
- s = "egg"
- t = "add"

Output:
- true

Explanation:
- e → a
- g → d

---

### Example 2

Input:
- s = "f11"
- t = "b23"

Output:
- false

Explanation:
- '1' would need to map to both '2' and '3'

---

### Example 3

Input:
- s = "paper"
- t = "title"

Output:
- true

Explanation:
- p → t
- a → i
- e → l
- r → e

## Constraints

- 1 ≤ s.length ≤ 5 × 10⁴
- t.length == s.length
- Strings contain ASCII characters  