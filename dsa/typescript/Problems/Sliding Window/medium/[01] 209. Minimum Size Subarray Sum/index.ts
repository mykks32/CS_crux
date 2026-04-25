class MinimumSizeSubarraySum {
	constructor() {}

	/**
	 * Finds the minimal length of a contiguous subarray
	 * of which the sum is greater than or equal to `target`.
	 *
	 * Uses sliding window technique.
	 *
	 * @param {number} target - Target sum
	 * @param {number[]} nums - Array of positive integers
	 * @returns {number} - Minimum length of subarray, or 0 if none exists
	 *
	 * @example
	 * minSubArrayLen(7, [2,3,1,2,4,3]) // 2 → [4,3]
	 *
	 * @example
	 * minSubArrayLen(4, [1,4,4]) // 1
	 *
	 * @example
	 * minSubArrayLen(11, [1,1,1,1,1,1,1,1]) // 0
	 *
	 * @timeComplexity O(n)
	 * - Each element is visited at most twice (expand + shrink)
	 *
	 * @spaceComplexity O(1)
	 * - No extra space used
	 *
	 * @see https://leetcode.com/problems/minimum-size-subarray-sum/
	 */
	public minSubArrayLen(target: number, nums: number[]): number {
		let left = 0;
		let sum = 0;
		let minLength = Infinity;

		for (let right = 0; right < nums.length; right++) {
			// Expand window by adding current element
			sum += nums[right];

			// Shrink window while condition is satisfied
			while (sum >= target) {
				// Update minimum length
				minLength = Math.min(minLength, right - left + 1);

				// Remove left element and move left pointer
				sum -= nums[left];
				left++;
			}
		}

		// If no valid subarray found, return 0
		return minLength === Infinity ? 0 : minLength;
	}
}

/**
 * Self-inducing Test Block
 */
(() => {
	const obj = new MinimumSizeSubarraySum();

	console.log(obj.minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
	console.log(obj.minSubArrayLen(4, [1, 4, 4]));         // 1
	console.log(obj.minSubArrayLen(11, [1,1,1,1,1,1,1,1])); // 0
})();