class TwoSum {
	constructor() {}

	/**
	 * Finds two numbers in the array `nums` such that they add up to `target`
	 * and returns their indices.
	 *
	 * Each input is guaranteed to have exactly one solution,
	 * and you may not use the same element twice.
	 *
	 * @param {number[]} nums - Array of integers
	 * @param {number} target - Target sum value
	 * @returns {number[]} - Indices of the two numbers that add up to target
	 *
	 * @example
	 * obj.twoSum([2, 7, 11, 15], 9) // [0, 1]
	 *
	 * @timeComplexity O(n)
	 * @spaceComplexity O(n)
	 *
	 * @see https://leetcode.com/problems/two-sum/
	 */
	public twoSum( nums: number[], target: number ): number[] {
		// Map stores: number -> index
		// This helps us quickly check if complement exists
		const map: Map<number, number> = new Map();

		for ( let index = 0; index < nums.length; index++ ) {
			// Calculate the number needed to reach target
			const complement = target - nums[index];

			// If complement already seen, we found the answer
			if ( map.has(complement) ) {
				return [ map.get(complement)!, index ];
			}

			// Store current number with its index
			map.set(nums[index], index);
		}

		// No valid pair found
		return [];
	}
}

/**
 * Self-inducing Test Block
 */
( () => {
	// Create Instance
	const obj = new TwoSum();

	// Test cases
	console.log(obj.twoSum([ 2, 7, 11, 15 ], 9));   // [0, 1]
	console.log(obj.twoSum([ 3, 2, 4 ], 6));        // [1, 2]
	console.log(obj.twoSum([ 3, 3 ], 6));           // [0, 1]
} )();