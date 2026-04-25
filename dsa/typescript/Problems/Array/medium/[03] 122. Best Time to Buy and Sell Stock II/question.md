# 122. Best Time to Buy and Sell Stock II

**Difficulty:** Medium

## Problem Description

You are given an array `prices` where:
- `prices[i]` is the stock price on the ith day

You can:
- Buy and sell the stock multiple times
- Hold **at most one share** at any time

You may also:
- Buy and sell on the same day (but not hold multiple shares)

## Objective

Return the **maximum profit** you can achieve.

## Key Idea

- Capture **every increasing price difference**
- If today's price is higher than yesterday → take profit

## Approach

Traverse the array:

- For each day `i`:
    - If `prices[i] > prices[i-1]`
        - Add `prices[i] - prices[i-1]` to profit

This works because:
- Instead of finding one big transaction, we sum all smaller profitable ones

## Examples

### Example 1

Input:
- prices = [7,1,5,3,6,4]

Output:
- 7

Explanation:
- Buy at 1 → sell at 5 → profit = 4
- Buy at 3 → sell at 6 → profit = 3
- Total = 7

---

### Example 2

Input:
- prices = [1,2,3,4,5]

Output:
- 4

Explanation:
- Profit = (2-1) + (3-2) + (4-3) + (5-4) = 4

---

### Example 3

Input:
- prices = [7,6,4,3,1]

Output:
- 0

Explanation:
- Prices decrease → no profit possible

## Constraints

- 1 ≤ prices.length ≤ 3 × 10⁴
- 0 ≤ prices[i] ≤ 10⁴  