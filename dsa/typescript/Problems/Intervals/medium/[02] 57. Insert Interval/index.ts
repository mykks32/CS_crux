class InsertInterval {
	constructor() {}

	/**

	 * Inserts a new interval into a sorted, non-overlapping list of intervals
	 * and merges overlapping intervals if necessary.
	 *
	 * The algorithm works in three phases:
	 * 1. Add all intervals that come before the new interval (no overlap)
	 * 2. Merge all overlapping intervals with the new interval
	 * 3. Add remaining intervals after the merge
	 *
	 * @param {[number, number][]} intervals - Sorted non-overlapping intervals
	 * @param {[number, number]} newInterval - Interval to insert
	 * @returns {[number, number][]} - Updated list of merged intervals
	 *
	 * @example
	 * insert([[1,3],[6,9]], [2,5])
	 * // [[1,5],[6,9]]
	 *
	 * @example
	 * insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])
	 * // [[1,2],[3,10],[12,16]]
	 *
	 * @timeComplexity O(n)
	 * - Single pass through intervals
	 *
	 * @spaceComplexity O(n)
	 * - Output array
	 *
	 * @see https://leetcode.com/problems/insert-interval/
	 */
	public insert( intervals: Array<[ number, number ]>, newInterval: [ number, number ] ): Array<Array<number>> {
		const output: Array<[ number, number ]> = [];
		let current = 0;
		const intervalLength = intervals.length;
		let [ newStart, newEnd ] = newInterval;

		/**
		 * Add all intervals that end before newInterval starts
		 * current = 0 --> 0 < 5 [true] && intervals[0][1] --> [1,2] --> 2 < 4 [true]
		 * current = 1 --> 1 < 5 [true] && intervals[1][1] --> [3, 5] --> 5 < 4 [false]
		 */
		while ( current < intervalLength && intervals[current][1] < newStart ) {
			// output = [[1, 2]]
			output.push(intervals[current]);
			// current = 1
			current++;
		}

		/**
		 * Merge overlapping intervals
		 * current = 1 --> 1 < 5 [true] && intervals[1][0] --> [3, 5] --> 3 <= 8 [true]
		 * current = 2 --> 2 < 5 [true] && intervals[2][0] --> [6, 7] --> 6 <= 8 [true]
		 * current = 3 --> 3 < 5 [true] && intervals[3][0] --> [8, 10] --> 8 <= 8 [true]
		 * current = 4 --> 4 < 5 [true] && intervals[4][0] --> [12, 16] --> 12 <= 8 [false]
		 */
		while ( current < intervalLength && intervals[current][0] <= newEnd ) {
			/**
			 * newStart --> min(4, intervals[1][0] --> [3, 5] --> 3) = 3
			 * newStart --> min(3, intervals[2][0] --> [6, 7] --> 6) = 3
			 * newStart --> min(3, intervals[3][0] --> [8, 10] --> 8) = 3
			 */
			newStart = Math.min(newStart, intervals[current][0]);
			/**
			 * newEnd --> max(8, intervals[1][1] --> [3, 5] --> 5) = 8
			 * newEnd --> max(8, intervals[2][1] --> [6, 7] --> 7) = 8
			 * newEnd --> max(8, intervals[3][1] --> [8, 10] --> 10) = 10
			 */
			newEnd = Math.max(newEnd, intervals[current][1]);
			/**
			 * current = 2
			 * current = 3
			 * current = 4
			 */
			current++;
		}

		// output = [[1, 2], [newStart --> 3, newEnd --> 10]]
		output.push([ newStart, newEnd ]);

		/**
		 * Add remaining intervals
		 * current = 4 --> 4 < 5 [true]
		 * current = 5 --> 5 < 5 [false]
		 */
		while ( current < intervalLength ) {
			// output = [[1, 2], [3, 10], intervals[4] --> [12, 16] ]]
			output.push(intervals[current]);
			// current = 5
			current++;
		}

		// output = [[1, 2], [3, 10], [12, 16]]
		return output;
	};

}

/**
 * Self-inducing Test Block
 */
( () => {
	// Create Instance
	const obj: InsertInterval = new InsertInterval();

	// Test Block using object
	console.log(obj.insert([ [ 1, 3 ], [ 6, 9 ] ], [ 2, 5 ]));
	console.log(obj.insert([ [ 1, 2 ], [ 3, 5 ], [ 6, 7 ], [ 8, 10 ], [ 12, 16 ] ], [ 4, 8 ]));
} )()