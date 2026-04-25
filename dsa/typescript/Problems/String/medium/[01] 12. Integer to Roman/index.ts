class IntegerToRoman {
	constructor() {}

	/**
	 * Converts an integer to its Roman numeral representation using a greedy approach.
	 *
	 * The algorithm repeatedly subtracts the largest possible Roman value
	 * and appends its corresponding symbol.
	 *
	 * Time Complexity: O(1)
	 * - The set of Roman values is fixed (13 symbols), so iteration is constant.
	 *
	 * Space Complexity: O(1)
	 * - Output size is bounded (max for 3999 is fixed).
	 *
	 * @param num - The integer to convert (1 ≤ num ≤ 3999)
	 * @returns The Roman numeral string
	 *
	 * @example
	 * intToRoman(3749) => "MMMDCCXLIX"
	 * intToRoman(58)   => "LVIII"
	 * intToRoman(1994) => "MCMXCIV"
	 */
	public intToRoman( num: number ): string {
		const RomanToInteger: {
			[key: number]: string
		} = {
			'1': 'I',
			'4': 'IV',
			'5': 'V',
			'9': 'IX',
			'10': 'X',
			'40': 'XL',
			'50': 'L',
			'90': 'XC',
			'100': 'C',
			'400': 'CD',
			'500': 'D',
			'900': 'CM',
			'1000': 'M',
		}

		let output: string = '';

		Object.keys(RomanToInteger)
			.map(Number)
			.sort(( a, b ) => b - a)
			.forEach(( value ) => {
				const count = Math.floor(num / value)
				if ( num >= value ) {
					for ( let i = 0; i < count; i++ ) {
						output += RomanToInteger[value]
						num -= value
					}
				}
			})

		return output
	};

	/**
	 * Converts an integer to a Roman numeral using a predefined ordered map.
	 *
	 * This version avoids sorting by using a fixed descending array of tuples.
	 * It iterates once through the list and uses `repeat` for efficiency.
	 *
	 * Time Complexity: O(1)
	 * - Fixed 13-step iteration regardless of input size.
	 *
	 * Space Complexity: O(1)
	 * - Output is bounded (max for 3999 is constant length).
	 *
	 * @param num - The integer to convert (1 ≤ num ≤ 3999)
	 * @returns The Roman numeral representation
	 *
	 * @example
	 * intToRomanUsingMap(3749) => "MMMDCCXLIX"
	 * intToRomanUsingMap(58)   => "LVIII"
	 * intToRomanUsingMap(1994) => "MCMXCIV"
	 */
	public intToRomanUsingMap( num: number ): string {
		const map: [ number, string ][] = [
			[ 1000, "M" ],
			[ 900, "CM" ],
			[ 500, "D" ],
			[ 400, "CD" ],
			[ 100, "C" ],
			[ 90, "XC" ],
			[ 50, "L" ],
			[ 40, "XL" ],
			[ 10, "X" ],
			[ 9, "IX" ],
			[ 5, "V" ],
			[ 4, "IV" ],
			[ 1, "I" ],
		];

		let output = "";

		for ( const [ value, symbol ] of map ) {
			const count = Math.floor(num / value);

			if ( count > 0 ) {
				output += symbol.repeat(count);
				num -= value * count;
			}
		}

		return output;
	}
}

/**
 * Self-invoking test block
 */
( () => {
	// Create instance
	const obj = new IntegerToRoman();

	// Test Case using Object
	console.log(obj.intToRoman(3749));
	console.log(obj.intToRoman(58));
	console.log(obj.intToRoman(1994));

	// Test Case using Map
	console.log(obj.intToRomanUsingMap(3749));
	console.log(obj.intToRomanUsingMap(58));
	console.log(obj.intToRomanUsingMap(1994));
} )()