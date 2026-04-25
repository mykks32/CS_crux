class ContainsDuplicateII {
	constructor() {}

	/**
	 * Determines if the array contains two equal elements such that
	 * their indices are at most `k` distance apart.
	 *
	 * In other words, checks if there exist i and j such that:
	 * nums[i] === nums[j] AND |i - j| <= k
	 *
	 * @param {number[]} nums - Input array of integers
	 * @param {number} k - Maximum allowed index difference
	 * @returns {boolean} - True if such a duplicate exists, otherwise false
	 *
	 * @example
	 * containsNearbyDuplicate([1, 2, 3, 1], 3) // true
	 *
	 * @example
	 * containsNearbyDuplicate([1, 0, 1, 1], 1) // true
	 *
	 * @example
	 * containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2) // false
	 *
	 * @timecomplexity O(n)
	 * - Each element is processed once
	 *
	 * @spacecomplexity O(k)
	 * - Stores at most k elements in a HashMap/Set
	 *
	 * @see https://leetcode.com/problems/contains-duplicate-ii/
	 */
	public containsNearbyDuplicate( nums: number[], k: number ): boolean {
		// Map stores: number -> last seen index
		const seen: Map<number, number> = new Map();

		for ( let i = 0; i < nums.length; i++ ) {
			const value = nums[i];
			// If value seen before, check distance condition
			if ( seen.has(value) ) {
				const prevIndex = seen.get(value)!;
				// If within allowed range, return true
				if ( i - prevIndex <= k ) return true;
			}
			// Update last seen index of current value
			seen.set(value, i);
		}
		// Otherwise return false
		return false;
	}
}

/**
 * Self-inducing Test Block
 */
( () => {
	const obj = new ContainsDuplicateII();

	console.log(obj.containsNearbyDuplicate([ 1, 2, 3, 1 ], 3)); // true
	console.log(obj.containsNearbyDuplicate([ 1, 0, 1, 1 ], 1)); // true
	console.log(obj.containsNearbyDuplicate([ 1, 2, 3, 1, 2, 3 ], 2)); // false
} )();