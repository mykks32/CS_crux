# 121. Best Time to Buy and Sell Stock

**Difficulty:** Easy

## Problem Description

You are given an array `prices` where:
- `prices[i]` is the stock price on the ith day

You must:
- Buy on one day
- Sell on a **later** day

## Objective

Return the **maximum profit** you can achieve from one transaction.  
If no profit is possible, return `0`.

## Key Idea

- You need to find:
    - The **minimum price so far**
    - The **maximum profit** at each step

## Approach

Traverse the array once:

1. Keep track of:
    - `minPrice` → smallest price seen so far
    - `maxProfit` → maximum profit found so far

2. For each price:
    - Update `minPrice = min(minPrice, price)`
    - Calculate profit = `price - minPrice`
    - Update `maxProfit = max(maxProfit, profit)`

## Examples

### Example 1

Input:
- prices = [7,1,5,3,6,4]

Output:
- 5

Explanation:
- Buy at 1 (day 2), sell at 6 (day 5)
- Profit = 6 - 1 = 5

---

### Example 2

Input:
- prices = [7,6,4,3,1]

Output:
- 0

Explanation:
- Prices keep decreasing → no profitable transaction

## Constraints

- 1 ≤ prices.length ≤ 10⁵
- 0 ≤ prices[i] ≤ 10⁴  