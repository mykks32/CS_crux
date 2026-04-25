class SpiralMatrix {
	constructor() {}

	/**
	 * Returns all elements of a matrix in spiral order traversal.
	 *
	 * The traversal follows:
	 * - Left → Right (top row)
	 * - Top → Bottom (right column)
	 * - Right → Left (bottom row)
	 * - Bottom → Top (left column)
	 *
	 * This process continues inward layer by layer until all elements are visited.
	 *
	 * @param {number[][]} matrix - 2D matrix of numbers
	 * @returns {number[]} - Elements in spiral order
	 *
	 * @example
	 * spiralOrder([[1,2,3],[4,5,6],[7,8,9]])
	 * // [1,2,3,6,9,8,7,4,5]
	 *
	 * @example
	 * spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])
	 * // [1,2,3,4,8,12,11,10,9,5,6,7]
	 *
	 * @timecomplexity O(m * n)
	 * - Each element is visited exactly once
	 *
	 * @spacecomplexity O(1) extra space (excluding output)
	 * - Only pointers are used (top, bottom, left, right)
	 * - Output array is required for result
	 *
	 * @see https://leetcode.com/problems/spiral-matrix/
	 */
	public spiralOrder( matrix: number[][] ): number[] {
		let top = 0;
		let bottom = matrix.length - 1;
		let left = 0;
		let right = matrix[0].length - 1;

		let output = new Array<number>()

		while ( top <= bottom && left <= right ) {
			// Top row ( left -> right )
			for ( let i = left; i <= right; i++ ) {
				output.push(matrix[top][i]);
			}
			top++;

			// Right column ( Top -> Bottom )
			for ( let j = top; j <= bottom; j++ ) {
				output.push(matrix[j][right]);
			}
			right--;

			// Bottom row ( Right -> Left )
			if ( top <= bottom ) {
				for ( let i = right; i >= left; i-- ) {
					output.push(matrix[bottom][i]);
				}
			}
			bottom--;

			// Left Column ( Bottom -> Top )
			if ( left <= right ) {
				for ( let j = bottom; j >= top; j-- ) {
					output.push(matrix[j][left]);
				}
			}
			left++;
		}
		return output
	}
}

/**
 * Self-induced Test Block
 */
( () => {
	// Create Instance
	const obj = new SpiralMatrix();

	// Test Block using Object
	console.log(obj.spiralOrder([ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ] ]));
	console.log(obj.spiralOrder([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]));
} )()