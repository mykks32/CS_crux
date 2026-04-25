class MinimumNumberOfArrows {
	constructor() {}

	/**
	 * Finds the minimum number of arrows required to burst all balloons.
	 *
	 * Each balloon is represented as an interval [start, end].
	 * An arrow shot at position x will burst all balloons where start ≤ x ≤ end.
	 *
	 * Greedy strategy:
	 * - Sort intervals by end coordinate
	 * - Shoot an arrow at the end of the first balloon
	 * - For each next balloon:
	 *   - If it overlaps (start ≤ currentEnd), it is already burst
	 *   - Otherwise, shoot a new arrow
	 *
	 * @param {number[][]} points - Array of balloon intervals
	 * @returns {number} - Minimum number of arrows required
	 *
	 * @example
	 * findMinArrowShots([[10,16],[2,8],[1,6],[7,12]])
	 * // 2
	 *
	 * @example
	 * findMinArrowShots([[1,2],[3,4],[5,6],[7,8]])
	 * // 4
	 *
	 * @example
	 * findMinArrowShots([[1,2],[2,3],[3,4],[4,5]])
	 * // 2
	 *
	 * @timeComplexity O(n log n)
	 * - Sorting dominates
	 *
	 * @spaceComplexity O(1)
	 * - In-place sort (ignoring input modification)
	 *
	 * @see https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
	 */
	public findMinArrowShots(points: number[][]): number {
		// Edge case: no balloons
		if (points.length === 0) return 0;

		// Sort by end coordinate
		points.sort((a, b) => a[1] - b[1]);

		let arrows = 1;
		let end = points[0][1];

		for (let i = 1; i < points.length; i++) {
			// If current balloon starts after last arrow position → need new arrow
			// if subsequent first element is greater than previous end element
			// Add new array as they won't overlap
			if (points[i][0] > end) {
				arrows++;
				// shoot new arrow at this balloon's end
				end = points[i][1];
			}
			// else: overlapping → covered by current arrow
		}

		return arrows;
	}
}

/**
 * Self-inducing Test Block
 */
( () => {
	// Create Instance
	const obj = new MinimumNumberOfArrows();

	// Test Block using Object
	console.log(obj.findMinArrowShots([ [ 10, 16 ], [ 2, 8 ], [ 1, 6 ], [ 7, 12 ] ]));
	console.log(obj.findMinArrowShots([ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]));
	console.log(obj.findMinArrowShots([ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 4, 5 ] ]));
} )()