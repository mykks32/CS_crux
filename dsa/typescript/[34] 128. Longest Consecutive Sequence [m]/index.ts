class LongestConsecutiveSequence {
	constructor() {}

	/**
	 * Finds the length of the longest consecutive elements sequence.
	 *
	 * A consecutive sequence means numbers that follow each other
	 * without gaps (e.g., 1,2,3,4).
	 *
	 * The algorithm runs in O(n) time using a Set.
	 *
	 * @param {number[]} nums - Array of integers
	 * @returns {number} - Length of the longest consecutive sequence
	 *
	 * @example
	 * longestConsecutive([100, 4, 200, 1, 3, 2]) // 4
	 * // sequence: [1,2,3,4]
	 *
	 * @example
	 * longestConsecutive([0,3,7,2,5,8,4,6,0,1]) // 9
	 *
	 * @example
	 * longestConsecutive([1,0,1,2]) // 3
	 *
	 * @timeComplexity O(n)
	 * - Each number is processed at most twice
	 *
	 * @spaceComplexity O(n)
	 * - Set stores all unique numbers
	 *
	 * @see https://leetcode.com/problems/longest-consecutive-sequence/
	 */
	public longestConsecutive( nums: number[] ): number {
		if ( nums.length === 0 ) return 0;
		// Store all numbers for O(1) lookup
		const set: Set<number> = new Set(nums);

		let maxLength = 0;

		for ( const num of set ) {
			// Only start counting if it's the beginning of a sequence
			if ( !set.has(num - 1) ) {
				let current = num;
				let length = 1;
				// Expand the sequence forward
				while ( set.has(current + 1) ) {
					current++;
					length++;
				}
				// Update maximum length
				maxLength = Math.max(maxLength, length);
			}
		}

		return maxLength;
	}
}

/**
 * Self-inducing Test Block
 */
( () => {
	// Create Instance
	const obj = new LongestConsecutiveSequence();

	// Test Block using Object
	console.log(obj.longestConsecutive([ 100, 4, 200, 1, 3, 2 ]));
	console.log(obj.longestConsecutive([ 0, 3, 7, 2, 5, 8, 4, 6, 0, 1 ]));
	console.log(obj.longestConsecutive([ 1, 0, 1, 2 ]));
} )()