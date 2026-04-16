# 392. Is Subsequence

## Problem

Given two strings `s` and `t`, return **true** if `s` is a **subsequence** of `t`, or **false** otherwise.

---

## What is a Subsequence?

A **subsequence** is formed by deleting some characters **without changing the order** of the remaining characters.

### Examples

- `"ace"` is a subsequence of `"abcde"` ✅
- `"aec"` is **not** a subsequence of `"abcde"` ❌

---

## Example 1

### Input

```text
s = "abc"
t = "ahbgdc"
```

### Output

```text
true
```

### Explanation

Characters `a`, `b`, `c` appear in order in `"ahbgdc"`

---

## Example 2

### Input

```text
s = "axc"
t = "ahbgdc"
```

### Output

```text
false
```

### Explanation

Character `x` does not appear in correct order

---

## Constraints

- `0 <= s.length <= 100`
- `0 <= t.length <= 10^4`
- `s` and `t` consist only of **lowercase English letters**

---

## Follow-up

If there are **many incoming strings**:

```text
s1, s2, s3, ... sk   where k >= 10^9
```

and you need to check them **against the same `t`**, then:

- Preprocess string `t`
- Store character indices
- Use **Binary Search** for faster lookup

This reduces repeated scanning and improves performance.