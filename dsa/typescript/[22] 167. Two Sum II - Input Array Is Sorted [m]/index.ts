class TwoSumII {
    constructor() {
    }

    /**
     * Finds two numbers in a sorted array that add up to the target.
     * Uses the two-pointer technique.
     *
     * @param numbers - A sorted array of integers (non-decreasing order)
     * @param target - The target sum to find
     * @returns A 1-indexed array containing the indices of the two numbers
     *
     * @example
     * Input:
     *  numbers = [2, 7, 11, 15], target = 9
     * Output:
     *  [1, 2]
     *
     * @example
     * Input:
     *  numbers = [0, 0, 3, 4], target = 0
     * Output:
     *  [1, 2]
     *
     * @complexity
     * Time Complexity: O(n) — each element is visited at most once
     * Space Complexity: O(1) — constant extra space used
     *
     * @see https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
     */
    public twoSum(numbers: number[], target: number): number[] {
        // Two sum index array
        const result: Array<number> = [];

        // Two Pointer
        let left: number = 0;
        let right: number = numbers.length - 1;

        // Iterate until left < right
        while (left < right) {
            const sum = numbers[left] + numbers[right];
            // if two point array sum is target
            if (sum === target) {
                // push the index + 1 of left and right to the array
                result.push(left + 1, right + 1);
                return result;
            }

            // if sum less increase left index else decrease right index
            if (sum < target) {
                // move right pointer to next
                left++
            } else {
                // move right pointer to previous
                right--
            }
        }

        return result;
    }
}

/**
 * Self-Invoking Test Block
 */
(() => {
        // Create Instance
        const
            obj = new TwoSumII();

        // Test cases with object
        console.log(obj.twoSum([2, 7, 11, 15], 9));
        console.log(obj.twoSum([2, 3, 4], 6));
        console.log(obj.twoSum([-1, 0], -1));
        console.log(obj.twoSum([0, 0, 3, 4], 0))
    }
)()
