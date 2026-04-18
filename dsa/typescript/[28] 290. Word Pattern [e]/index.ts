class WordPattern {
	constructor() {}



	/**
	 * Determines if a given string `s` follows the same pattern as `pattern`.
	 *
	 * A valid pattern means there is a bijection (one-to-one mapping)
	 * between each character in `pattern` and each word in `s`.
	 *
	 * @param {string} pattern - A string representing the pattern (e.g., "abba")
	 * @param {string} s - A space-separated string of words (e.g., "dog cat cat dog")
	 * @returns {boolean} - Returns true if `s` follows the pattern, otherwise false
	 *
	 * @example
	 * // Example 1
	 * wordPattern("abba", "dog cat cat dog") // true
	 *
	 * @example
	 * // Example 2
	 * wordPattern("abba", "dog cat cat fish") // false
	 *
	 * @example
	 * // Example 3
	 * wordPattern("aaaa", "dog cat cat dog") // false
	 *
	 * @timeComplexity O(n)
	 * - We iterate through the pattern and words once.
	 *
	 * @spaceComplexity O(k)
	 * - Two maps store at most k unique mappings.
	 *
	 * @see https://leetcode.com/problems/word-pattern/
	 */
	public wordPattern( pattern: string, s: string ): boolean {
		const word = s.split(' ')
		if ( pattern.length !== word.length ) return false;

		// Two maps for bidirectional mapping (p → w and w → p)
		const mapPW: Map<string, string> = new Map();
		const mapWP: Map<string, string> = new Map();

		for ( let i = 0; i < pattern.length; i++ ) {
			const wordP = pattern[i]
			const wordS = word[i]

			// Check consistency in both directions
			if ( mapPW.has(wordP) && mapPW.get(wordP) !== wordS ||
				mapWP.has(wordS) && mapWP.get(wordS) !== wordP
			) {
				return false
			}

			// Store mapping
			mapPW.set(pattern[i], word[i]);
			mapWP.set(word[i], pattern[i]);
		}
		return true
	};
}

/**
 * Self-Inducing Test Block
 */
( () => {
		// Create Instance
		const obj = new WordPattern();

		// Test Block Using Object
		console.log(obj.wordPattern('abba', 'dog cat cat dog'));
		console.log(obj.wordPattern('abba', 'dog cat cat fish'));
		console.log(obj.wordPattern('aaaa', 'dog cat cat dog'))
	}
)()