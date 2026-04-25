class MergeIntervals {
	constructor() {}

	/**
	 * Merges overlapping intervals using pointer expansion (while-loop approach).
	 *
	 * Intervals are first sorted, then consecutive overlapping intervals
	 * are merged into a single range.
	 *
	 * @param {number[][]} intervals - Array of intervals [start, end]
	 * @returns {number[][]} - Merged intervals
	 *
	 * @example
	 * merge([[1,3],[2,6],[8,10],[15,18]])
	 * // [[1,6],[8,10],[15,18]]
	 *
	 * @example
	 * merge([[1,4],[4,5]])
	 * // [[1,5]]
	 *
	 * @timeComplexity O(n log n)
	 * - Sorting dominates
	 *
	 * @spaceComplexity O(n)
	 * - Output array
	 *
	 * @see https://leetcode.com/problems/merge-intervals/
	 */
	public merge( intervals: Array<Array<number>> ): Array<Array<number>> {
		// Sort intervals by start
		intervals.sort(( a: Array<number>, b: Array<number> ) => a[0] - b[0]);

		const output: Array<Array<number>> = [];
		let current: number = 0;

		const intervalLen: number = intervals.length;

		// Traverse the array
		while ( current < intervalLen ) {
			// Start of a new merged range
			let start: number = intervals[current][0];
			let end: number = intervals[current][1];

			// Expand while overlapping intervals exist
			while (
				current + 1 < intervalLen &&
				end >= intervals[current + 1][0]
				) {
				// Update End Properly
				end = Math.max(end, intervals[current + 1][1]);
				current++;
			}

			// Add merged interval
			output.push([ start, end ]);

			// Move to next interval
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
	const obj: MergeIntervals = new MergeIntervals();

	// Test Block using Object
	console.log(obj.merge([ [ 1, 3 ], [ 2, 6 ], [ 8, 10 ], [ 15, 18 ] ]));
	console.log(obj.merge([ [ 1, 4 ], [ 4, 5 ] ]));
	console.log(obj.merge([ [ 4, 7 ], [ 1, 4 ] ]));
	console.log(obj.merge([ [ 1, 4 ], [ 2, 3 ] ]));
	console.log(obj.merge([ [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8, 9 ], [ 1, 10 ] ]));
} )()
