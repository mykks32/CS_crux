# 26. Remove Duplicates from Sorted Array

## Problem

Given an integer array **nums** sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only **once**.

- The **relative order** of elements must remain the same
- Return **k**, the number of unique elements
- The first **k elements** of `nums` should contain the **unique values**
- Elements beyond index `k - 1` can be ignored

---

## Custom Judge

The judge will test your solution like this:

```java
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // Expected answer

int k = removeDuplicates(nums);

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, your solution is accepted.

---

## Example 1

### Input

```text
nums = [1,1,2]
```

### Output

```text
2, nums = [1,2,_]
```

### Explanation

- Unique elements → `[1,2]`
- Return `k = 2`
- Remaining elements can be ignored

---

## Example 2

### Input

```text
nums = [0,0,1,1,1,2,2,3,3,4]
```

### Output

```text
5, nums = [0,1,2,3,4,_,_,_,_,_]
```

### Explanation

- Unique elements → `[0,1,2,3,4]`
- Return `k = 5`

---

## Constraints

- `1 <= nums.length <= 3 * 10^4`
- `-100 <= nums[i] <= 100`
- `nums` is sorted in **non-decreasing order**