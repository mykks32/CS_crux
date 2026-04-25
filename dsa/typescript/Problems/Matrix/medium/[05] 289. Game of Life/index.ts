class GameOfLife {
	constructor() {}

	/**
	 * Problem: [05] 289. Game of Life
	 * Category: Matrix
	 * Difficulty: medium
	 * -------------------------------------
	 * Simulates one iteration of Conway's Game of Life.
	 *
	 * Rules:
	 * - Any live cell (1) with fewer than 2 live neighbors dies (underpopulation)
	 * - Any live cell with 2 or 3 live neighbors lives on
	 * - Any live cell with more than 3 live neighbors dies (overpopulation)
	 * - Any dead cell (0) with exactly 3 live neighbors becomes alive (reproduction)
	 *
	 * The board is updated in-place.
	 *
	 * @param {number[][]} board - Binary matrix representing game state (0 = dead, 1 = alive)
	 * @returns {void} - Modifies board in-place
	 *
	 * @example
	 * gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])
	 *
	 * @timecomplexity O(m * n)
	 * - Each cell is processed once with neighbor checks
	 *
	 * @spacecomplexity O(m * n)
	 * - Your current approach uses extra map + copy matrix
	 *
	 * @see https://leetcode.com/problems/game-of-life/
	 */
	public gameOfLife( board: number[][] ): void {
		// All 8 possible directions for neighbor traversal
		const directions8: Array<[ number, number ]> = [
			[ -1, -1 ], [ -1, 0 ], [ -1, 1 ],
			[ 0, -1 ], [ 0, 1 ],
			[ 1, -1 ], [ 1, 0 ], [ 1, 1 ]
		];

		// Board dimensions
		const m: number = board.length;
		const n: number = board[0] ? board[0].length : 0;

		// Store valid neighbors for each cell
		const neighbours = new Map<string, Array<[ number, number ]>>();

		// Build neighbor list for each cell
		for ( let i = 0; i < m; i++ ) {
			for ( let j = 0; j < n; j++ ) {

				const key = `${i},${j}`;

				if ( !neighbours.has(key) ) {
					neighbours.set(key, new Array<[ number, number ]>());
				}

				// Check all 8 directions
				for ( let [ row, col ] of directions8 ) {
					const ni = i + row;
					const nj = j + col;

					// Validate boundaries
					if ( ni >= 0 && ni < m && nj >= 0 && nj < n ) {
						neighbours.get(key)!.push([ ni, nj ]);
					}
				}
			}
		}

		// Copy board to preserve original state during updates
		const copy = board.map(row => [ ...row ]);

		// Apply Game of Life rules
		for ( let str of neighbours.keys() ) {
			const parts = str.split(',');
			const i = Number(parts[0]!);
			const j = Number(parts[1]!);
			let livesCount = 0;

			// Count live neighbors
			for ( let [ row, col ] of neighbours.get(str) ?? [] ) {
				livesCount += copy[row]![col]!;
			}
			// Rule 1 & 3: live cell dies
			if ( copy[i]![j] === 1 && ( livesCount < 2 || livesCount > 3 ) ) {
				board[i]![j] = 0;
			}

			// Rule 4: dead cell becomes live
			else if ( copy[i]![j] === 0 && livesCount === 3 ) {
				board[i]![j] = 1;
			}
		}

		console.log('map board output', board);
	};

	/**
	 * Simulates one iteration of Conway's Game of Life in-place using state encoding.
	 *
	 * State encoding:
	 * - 1  → live cell (alive → alive)
	 * - 0  → dead cell (dead → dead)
	 * - -1 → live cell that becomes dead
	 * - 2  → dead cell that becomes live
	 *
	 * Strategy:
	 * Step 1: Compute live neighbors and mark transitions in-place
	 * Step 2: Normalize values back to 0 and 1
	 *
	 * @param {number[][]} board - 2D grid (0 = dead, 1 = live)
	 * @returns {void} - Modifies board in-place
	 *
	 * @timecomplexity O(m * n)
	 * - Each cell is visited once and checks 8 neighbors
	 *
	 * @spacecomplexity O(1)
	 * - No extra grid used (only constant variables)
	 *
	 * @see https://leetcode.com/problems/game-of-life/
	 */
	public gameOfLifeII( board: number[][] ): void {
		// Grid Dimensions
		const m: number = board.length;
		const n: number = board[0] ? board[0].length : 0;

		// All 8 possible directions for neighbor traversal
		const directions8: Array<[ number, number ]> = [
			[ -1, -1 ], [ -1, 0 ], [ -1, 1 ],
			[ 0, -1 ], [ 0, 1 ],
			[ 1, -1 ], [ 1, 0 ], [ 1, 1 ]
		];

		// Helper: check valid cell
		const isValid = ( row: number, col: number ) =>
			row >= 0 && row < m && col >= 0 && col < n

		// Step 1: mark transitions based on live neighbors
		for ( let i = 0; i < m; i++ ) {
			for ( let j = 0; j < n; j++ ) {
				let liveNeighbors = 0;

				// Count live neighbors
				for ( let [ row, col ] of directions8 ) {
					const ni = i + row;
					const nj = j + col;

					// Math.abs ensures we treat -1 as live (previous state)
					if ( isValid(ni, nj) && Math.abs(board[ni]![nj]!) === 1 ) {
						liveNeighbors++;
					}
				}

				// Rule 1 & 3: live cell dies
				if ( board[i]![j]! === 1 ) {
					if ( liveNeighbors < 2 || liveNeighbors > 3 ) {
						board[i]![j]! = -1; // live → dead
					}
				}
				// Rule 4: dead cell becomes live
				else {
					if ( liveNeighbors === 3 ) {
						board[i]![j]! = 2; // dead → live
					}
				}
			}
		}

		// Step 2: finalize board (convert to 0/1)
		for ( let i = 0; i < m; i++ ) {
			for ( let j = 0; j < n; j++ ) {
				board[i]![j]! = board[i]![j]! > 0 ? 1 : 0;
			}
		}

		console.log('another output', board)
	}
}

/**
 * Self-inducing Test Block
 */
( () => {
	// Create Instance
	const obj = new GameOfLife();

	// Test Block using Object
	obj.gameOfLife([ [ 0, 1, 0 ], [ 0, 0, 1 ], [ 1, 1, 1 ], [ 0, 0, 0 ] ]);
	obj.gameOfLife([ [ 1, 1 ], [ 1, 0 ] ]);

	obj.gameOfLifeII([ [ 0, 1, 0 ], [ 0, 0, 1 ], [ 1, 1, 1 ], [ 0, 0, 0 ] ]);
	obj.gameOfLifeII([ [ 1, 1 ], [ 1, 0 ] ]);
} )()
