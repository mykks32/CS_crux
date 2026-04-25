class ZigzagConversion {
	constructor() {}

	/**
	 * Zigzag Conversion
	 *
	 * The string is written in a zigzag pattern on numRows and then read row by row.
	 *
	 * @param s - input string
	 * @param numRows - number of zigzag rows
	 * @returns zigzag converted string
	 *
	 * Example:
	 * s = "PAYPALISHIRING", numRows = 3
	 * Output: "PAHNAPLSIIGYIR"
	 */
	public convert( s: string, numRows: number ): string {
		if ( numRows === 1 || s.length <= numRows ) return s;

		// Creates a 2D string array with independent empty rows.
		const rows: Array<Array<string>> = Array.from({ length: numRows }, () => []);

		let row = 0;
		let dir = -1;

		s.split('').forEach(( char ) => {
			// push char to rows
			rows[row].push(char);

			// if row is 0 row 0,1,2 if row is 3 1,0
			if ( row === 0 ) dir = 1;
			else if ( row === numRows - 1 ) dir = -1;
			row += dir;

		})

		let result = '';
		for (const r of rows) {
			for (const c of r) {
				result += c;
			}
		}

		return result;
	};
}

/**
 * Self-invoking test block
 */
( () => {
	// Create instance
	const obj = new ZigzagConversion();

	// Test Case using Object
	console.log(obj.convert('PAYPALISHIRING', 3));
	console.log(obj.convert('PAYPALISHIRING', 4));
	console.log(obj.convert('AB', 1))
} )()