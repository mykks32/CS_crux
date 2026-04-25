class ValidSudoku {
	constructor() {}

	/**
	 * Validates whether a partially filled 9x9 Sudoku board is valid.
	 *
	 * A valid Sudoku board must satisfy:
	 * 1. Each row contains digits 1-9 without repetition
	 * 2. Each column contains digits 1-9 without repetition
	 * 3. Each 3x3 sub-box contains digits 1-9 without repetition
	 *
	 * Empty cells are represented by '.'
	 *
	 * @param {string[][]} board - 9x9 Sudoku board
	 * @returns {boolean} - True if valid, otherwise false
	 *
	 * @example
	 * isValidSudoku([
	 *  ["5","3",".",".","7",".",".",".","."],
	 *  ["6",".",".","1","9","5",".",".","."],
	 *  [".","9","8",".",".",".",".","6","."],
	 *  ["8",".",".",".","6",".",".",".","3"],
	 *  ["4",".",".","8",".","3",".",".","1"],
	 *  ["7",".",".",".","2",".",".",".","6"],
	 *  [".","6",".",".",".",".","2","8","."],
	 *  [".",".",".","4","1","9",".",".","5"],
	 *  [".",".",".",".","8",".",".","7","9"]
	 * ]) // true
	 *
	 * @timeComplexity O(1)
	 * - The board size is fixed (9x9), so all operations run in constant time.
	 *
	 * @spaceComplexity O(1)
	 * - The Set stores at most 81 entries (fixed upper bound).
	 * @see https://leetcode.com/problems/valid-sudoku/
	 */
	public isValidSudoku(board: string[][]): boolean {

		// Check all 3x3 sub-boxes
		for (let boxRow = 0; boxRow < 3; boxRow++) {
			for (let boxCol = 0; boxCol < 3; boxCol++) {
				// Set to track values inside current 3x3 box
				const set: Set<string> = new Set();
				// Traverse each cell inside the 3x3 box
				for (let i = 0; i < 3; i++) {
					for (let j = 0; j < 3; j++) {
						// Convert box coordinates to actual board coordinates
						const row = boxRow * 3 + i;
						const col = boxCol * 3 + j;
						// Skip empty cells
						if (board[row][col] !== '.') {
							const val = board[row][col];
							// If duplicate found in box → invalid Sudoku
							if (set.has(val)) return false;
							set.add(val);
						}
					}
				}
			}
		}
		// Check each row for duplicates
		for (let i = 0; i < 9; i++) {
			const set: Set<string> = new Set();
			for (let j = 0; j < 9; j++) {
				const val = board[i][j];
				// Skip empty cells
				if (val !== '.') {
					if (set.has(val)) return false;
					set.add(val);
				}
			}
		}
		// Check each column for duplicates
		for (let j = 0; j < 9; j++) {
			const set: Set<string> = new Set();
			for (let i = 0; i < 9; i++) {
				const val = board[i][j];
				// Skip empty cells
				if (val !== '.') {
					if (set.has(val)) return false;
					set.add(val);
				}
			}
		}
		// If no duplicates found, Sudoku is valid
		return true;

	}

	/**
	 * @timecomplexity O(1)
	 * - Fixed 9x9 board size → constant operations
	 *
	 * @spacecomplexity O(1)
	 * - Set stores at most 81 elements (bounded constant)
	 */
	public isValidSudokuOptimized(board: string[][]): boolean {
		// Set to track seen row, column, and box constraints
		const seen = new Set<string>();
		// Traverse rows
		for (let i = 0; i < 9; i++) {
			// Traverse columns
			for (let j = 0; j < 9; j++) {
				// Current cell value
				const val = board[i][j];
				// Skip empty cells
				if (val === '.') continue;
				// Compute 3x3 box index
				const box = Math.floor(i / 3) * 3 + Math.floor(j / 3);
				// Build unique constraint keys
				const rowKey = `r${i}-${val}`;
				const colKey = `c${j}-${val}`;
				const boxKey = `b${box}-${val}`;
				// If any constraint already exists → invalid board
				if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
					return false;
				}
				// Mark constraints as seen
				seen.add(rowKey);
				seen.add(colKey);
				seen.add(boxKey);
			}
		}
		// If no violations found → valid Sudoku
		return true;

	}
}

/**
 * Self-inducing Test Block
 */
( () => {
	// Create Instance
	const obj = new ValidSudoku();

	// Test Block using object
	console.log(obj.isValidSudoku([
		[ "5", "3", ".", ".", "7", ".", ".", ".", "." ]
		, [ "6", ".", ".", "1", "9", "5", ".", ".", "." ]
		, [ ".", "9", "8", ".", ".", ".", ".", "6", "." ]
		, [ "8", ".", ".", ".", "6", ".", ".", ".", "3" ]
		, [ "4", ".", ".", "8", ".", "3", ".", ".", "1" ]
		, [ "7", ".", ".", ".", "2", ".", ".", ".", "6" ]
		, [ ".", "6", ".", ".", ".", ".", "2", "8", "." ]
		, [ ".", ".", ".", "4", "1", "9", ".", ".", "5" ]
		, [ ".", ".", ".", ".", "8", ".", ".", "7", "9" ]
	]));

	console.log(obj.isValidSudoku([
		[ "8", "3", ".", ".", "7", ".", ".", ".", "." ]
		, [ "6", ".", ".", "1", "9", "5", ".", ".", "." ]
		, [ ".", "9", "8", ".", ".", ".", ".", "6", "." ]
		, [ "8", ".", ".", ".", "6", ".", ".", ".", "3" ]
		, [ "4", ".", ".", "8", ".", "3", ".", ".", "1" ]
		, [ "7", ".", ".", ".", "2", ".", ".", ".", "6" ]
		, [ ".", "6", ".", ".", ".", ".", "2", "8", "." ]
		, [ ".", ".", ".", "4", "1", "9", ".", ".", "5" ]
		, [ ".", ".", ".", ".", "8", ".", ".", "7", "9" ]
	]));
} )()