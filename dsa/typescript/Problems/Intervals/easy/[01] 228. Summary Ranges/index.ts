class SummaryRanges {
	constructor() {}

	/**
	 * Summarizes a sorted array of unique integers into the smallest list of ranges.
	 *
	 * A range [a, b] includes all numbers from a to b (inclusive).
	 * - If a === b → represented as "a"
	 * - If a !== b → represented as "a->b"
	 *
	 * @param {number[]} nums - Sorted array of unique integers
	 * @returns {string[]} - Array of summarized ranges
	 *
	 * @example
	 * summaryRanges([0,1,2,4,5,7])
	 * // ["0->2", "4->5", "7"]
	 *
	 * @example
	 * summaryRanges([0,2,3,4,6,8,9])
	 * // ["0", "2->4", "6", "8->9"]
	 *
	 * @example
	 * summaryRanges([])
	 * // []
	 *
	 * @timeComplexity O(n)
	 * - Each element is visited once
	 *
	 * @spaceComplexity O(1)
	 * - Output array not included in space calculation
	 *
	 * @see https://leetcode.com/problems/summary-ranges/
	 */
	public summaryRanges( nums: number[] ): string[] {
		const output: string[] = [];

		let current = 0;

		// Traverse the array
		while ( current < nums.length ) {
			// Start of a new range
			const start = nums[current];

			// Expand while consecutive numbers exist
			while (
				current + 1 < nums.length &&
				nums[current + 1] === nums[current] + 1
				) {
				current++;
			}

			// End of the current range
			const end = nums[current];

			// Add range to output
			if ( start === end ) {
				output.push(`${start}`);
			} else {
				output.push(`${start}->${end}`);
			}

			// Move to next range
			current++;
		}

		return output;
	}
}

/**
 * Self-inducing Test Block
 */
( () => {
	// Create Instance
	const obj = new SummaryRanges();

	// Test Block using Object
	console.log(obj.summaryRanges([ 0, 1, 2, 4, 5, 7 ]));
	console.log(obj.summaryRanges([ 0, 2, 3, 4, 6, 8, 9 ]));
} )()