class RansomNote {
	constructor() {}

	/**
	 * Determines whether the ransomNote can be constructed from the characters in magazine.
	 *
	 * Each character in magazine can only be used once.
	 * The function uses frequency maps to compare required vs available characters.
	 *
	 * @param ransomNote - The string you want to construct
	 * @param magazine - The string providing available characters
	 * @returns true if ransomNote can be constructed, otherwise false
	 *
	 * @example
	 * canConstruct("aab", "baa") // true
	 * canConstruct("aa", "ab")   // false
	 *
	 * @timeComplexity O(n + m)
	 * - n = length of ransomNote
	 * - m = length of magazine
	 * - We iterate through both strings once and then through ransomMap.
	 *
	 * @spaceComplexity O(k)
	 * - k = number of unique characters in input strings
	 * - We store character frequencies in two Maps
	 *
	 * @see https://leetcode.com/problems/ransom-note/
	 */
	public canConstruct( ransomNote: string, magazine: string ): boolean {
		// Two Map
		const magMap: Map<string, number> = new Map();
		const ransomMap: Map<string, number> = new Map<string, number>();

		let count = 0;

		// ransomNote frequency map
		[ ...ransomNote ].forEach(( char ) => {
			ransomMap.set(char, ( ransomMap.get(char) ?? 0 ) + 1)
		});

		// magazine frequency map
		[ ...magazine ].forEach(char => {
			magMap.set(char, ( magMap.get(char) ?? 0 ) + 1);
		});

		// compare frequencies
		for ( const [ key, value ] of ransomMap ) {
			// Check char is present in the map if yes return true
			if ( value <= ( magMap.get(key) ?? 0 ) ) {
				count++;
			}
		}

		return count === ransomMap.size;
	};
}

/**
 * Self-inducing Test Block
 */
( () => {
	// Create Instance
	const obj = new RansomNote();

	// Test Block using object
	console.log(obj.canConstruct('a', 'b'))
	console.log(obj.canConstruct('aa', 'ab'))
	console.log(obj.canConstruct('aa', 'aab'))
} )()