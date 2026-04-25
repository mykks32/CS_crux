# 345. Reverse Vowels of a String

## Problem

Given a string **s**, reverse **only the vowels** in the string and return it.

### Vowels

- `'a', 'e', 'i', 'o', 'u'`
- Can appear in **lowercase and uppercase**
- Can appear **multiple times**

---

## Task

- Reverse **only vowels**
- Keep all **consonants and positions unchanged**

---

## Example 1

### Input

```text
s = "IceCreAm"
```

### Output

```text
"AceCreIm"
```

### Explanation

- Vowels in `s` → `['I', 'e', 'e', 'A']`
- Reverse vowels → `['A', 'e', 'e', 'I']`
- Result → `"AceCreIm"`

---

## Example 2

### Input

```text
s = "leetcode"
```

### Output

```text
"leotcede"
```

---

## Constraints

- `1 <= s.length <= 3 * 10^5`
- `s` consists of **printable ASCII characters**