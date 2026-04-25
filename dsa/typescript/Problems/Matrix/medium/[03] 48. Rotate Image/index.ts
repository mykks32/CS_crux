class RotateImage {
	/**
	 * Problem: [03] 48. Rotate Image
	 * Category: Matrix
	 * Difficulty: medium
	 * -------------------------------------
	 * Rotates an n x n matrix by 90 degrees clockwise in-place.
	 *
	 * The rotation is done in two steps:
	 * 1. Transpose the matrix (swap matrix[i][j] with matrix[j][i])
	 * 2. Reverse each row
	 *
	 * This transforms:
	 * Original → Rotated (90° clockwise)
	 *
	 * @param {number[][]} matrix - Square matrix (n x n)
	 * @returns {void} - Modifies matrix in-place
	 *
	 * @example
	 * rotate([[1,2,3],
	 *         [4,5,6],
	 *         [7,8,9]])
	 * // [[7,4,1],
	 * //  [8,5,2],
	 * //  [9,6,3]]
	 *
	 * @timecomplexity O(n²)
	 * - Each element is visited a constant number of times
	 *
	 * @spacecomplexity O(1)
	 * - In-place transformation (no extra matrix used)
	 *
	 * @see https://leetcode.com/problems/rotate-image/
	 */
	public rotate( matrix: number[][] ): void {
		// transpose
		for (let i = 0; i < matrix.length; i++) {
			for (let j = i + 1; j < matrix.length; j++) {
				[ matrix[i][j], matrix[j][i] ] = [ matrix[j][i], matrix[i][j] ];
			}
		}

		// reverse each row
		for (let i = 0; i < matrix.length; i++) {
			let l = 0, r = matrix.length - 1;
			while (l < r) {
				[ matrix[i][l], matrix[i][r] ] = [ matrix[i][r], matrix[i][l] ];
				l++;
				r--;
			}
		}
	};
}

/**
 * Self-inducing Test Block
 */
( () => {
	// Create Instance
	const obj = new RotateImage();

	// Test Block using Object
	obj.rotate([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]);
	obj.rotate([ [ 5, 1, 9, 11 ], [ 2, 4, 8, 10 ], [ 13, 3, 6, 7 ], [ 15, 14, 12, 16 ] ]);
} )()
