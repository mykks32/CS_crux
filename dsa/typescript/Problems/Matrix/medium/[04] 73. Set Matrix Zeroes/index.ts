class SetMatrixZeroes {
	constructor() {}

	/**
	 * Problem: [04] 73. Set Matrix Zeroes
	 * Category: Matrix
	 * Difficulty: medium
	 * -------------------------------------
	 * Modifies the matrix such that if an element is 0,
	 * its entire row and column are set to 0.
	 *
	 * The approach uses two sets to track:
	 * - Rows that must be zeroed
	 * - Columns that must be zeroed
	 *
	 * Steps:
	 * 1. Traverse the matrix and record rows & columns containing 0
	 * 2. Traverse again and update cells based on recorded rows/columns
	 *
	 * @param {number[][]} matrix - m x n matrix
	 * @returns {void} - Modifies matrix in-place
	 *
	 * @example
	 * setZeroes([[1,1,1],[1,0,1],[1,1,1]])
	 * // [[1,0,1],[0,0,0],[1,0,1]]
	 *
	 * @example
	 * setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])
	 * // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
	 *
	 * @timecomplexity O(m * n)
	 * - Two full traversals of the matrix
	 *
	 * @spacecomplexity O(m + n)
	 * - Stores row indices and column indices in Sets
	 *
	 * @see https://leetcode.com/problems/set-matrix-zeroes/
	 */
	public setZeroes( matrix: number[][] ): void {
		// @ts-ignore
		const rows = new Set();
		// @ts-ignore
		const cols = new Set();

		const m = matrix.length;
		const n = matrix[0].length;

		for (let i = 0; i < m; i++) {
			for (let j = 0; j < n; j++) {
				if (matrix[i][j] === 0) {
					rows.add(i);
					cols.add(j);
				}
			}
		}

		for (let i = 0; i < m; i++) {
			for (let j = 0; j < n; j++) {
				if (rows.has(i) || cols.has(j)) {
					matrix[i][j] = 0;
				}
			}
		}
	};
}

/**
 * Self-inducing Test Block
 */
( () => {
	// Create Instance
	const obj = new SetMatrixZeroes();

	// Test Block using Object
	obj.setZeroes([ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ])
	obj.setZeroes([ [ 0, 1, 2, 0 ], [ 3, 4, 5, 2 ], [ 1, 3, 1, 5 ] ]);
} )()
