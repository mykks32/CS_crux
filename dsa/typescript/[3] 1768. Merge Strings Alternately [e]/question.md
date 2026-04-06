# 1768. Merge Strings Alternately

**Difficulty:** Easy

## Problem Description

You are given two strings `word1` and `word2`.

Merge the strings by:
- Adding characters in **alternating order**
- Starting with `word1`

If one string is longer:
- Append the remaining characters to the end

## Objective

- Alternate characters from both strings
- Append leftover characters (if any)
- Return the final merged string

## Example 1

### Input

word1 = "abc"  
word2 = "pqr"

### Output

apbqcr

### Explanation

- a (word1) + p (word2)
- b + q
- c + r

→ Result: **apbqcr**

## Example 2

### Input

word1 = "ab"  
word2 = "pqrs"

### Output

apbqrs

### Explanation

- a + p
- b + q
- Remaining: rs

→ Result: **apbqrs**

## Example 3

### Input

word1 = "abcd"  
word2 = "pq"

### Output

apbqcd

### Explanation

- a + p
- b + q
- Remaining: cd

→ Result: **apbqcd**

## Constraints

- 1 ≤ word1.length, word2.length ≤ 100
- Strings contain only lowercase English letters  