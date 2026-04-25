class ValidAnagram {
	constructor() {}

	/**
	 * Determines whether string `t` is an anagram of string `s`
	 * using TWO frequency maps.
	 *
	 * An anagram means both strings contain the same characters
	 * with exactly the same frequency.
	 *
	 * @param {string} s - The original string
	 * @param {string} t - The string to compare against
	 * @returns {boolean} - True if `t` is an anagram of `s`, else false
	 *
	 * @example
	 * obj.isAnagram("anagram", "nagaram") // true
	 * obj.isAnagram("rat", "car") // false
	 *
	 * @timeComplexity O(n)
	 * - One pass to build maps + one pass to compare
	 *
	 * @spaceComplexity O(k)
	 * - Two maps storing character frequencies
	 *   where k = number of unique characters
	 *
	 * @see https://leetcode.com/problems/valid-anagram/
	 */
	public isAnagram(s: string, t: string): boolean {
		// Early exit: different lengths → impossible
		if (s.length !== t.length) return false;

		// Two frequency maps (less optimal but very clear)
		const mapS: Map<string, number> = new Map();
		const mapT: Map<string, number> = new Map();

		// Build frequency counts
		for (let i = 0; i < s.length; i++) {
			const charS = s[i];
			const charT = t[i];

			// Count characters in s
			mapS.set(charS, (mapS.get(charS) ?? 0) + 1);

			// Count characters in t
			mapT.set(charT, (mapT.get(charT) ?? 0) + 1);
		}

		// Compare both maps
		for (const [key, value] of mapS) {
			// Missing key OR mismatched frequency → not anagram
			if (!mapT.has(key) || mapT.get(key) !== value) return false;
		}

		// All frequencies match
		return true;
	}

	/**
	 * Determines whether string `t` is an anagram of string `s`
	 * using a SINGLE frequency map (optimized approach).
	 *
	 * Idea:
	 * - Increment count for characters in `s`
	 * - Decrement count for characters in `t`
	 * - Final map must contain all zeros
	 *
	 * @param {string} s - The original string
	 * @param {string} t - The string to compare against
	 * @returns {boolean} - True if `t` is an anagram of `s`, else false
	 *
	 * @example
	 * obj.isAnagramSingleMap("anagram", "nagaram") // true
	 * obj.isAnagramSingleMap("rat", "car") // false
	 *
	 * @timeComplexity O(n)
	 * - Single pass through both strings
	 *
	 * @spaceComplexity O(k)
	 * - One map storing character frequency differences
	 *
	 * @note
	 * - More optimal and preferred in interviews than two-map approach
	 */
	public isAnagramSingleMap(s: string, t: string): boolean {
		// Early exit: different lengths → impossible
		if (s.length !== t.length) return false;

		// Single map to track frequency difference
		const map: Map<string, number> = new Map();

		for (let i = 0; i < s.length; i++) {
			const charS = s[i];
			const charT = t[i];

			// Increment for s
			map.set(charS, (map.get(charS) ?? 0) + 1);

			// Decrement for t
			map.set(charT, (map.get(charT) ?? 0) - 1);
		}

		// Validate all counts return to zero
		for (const val of map.values()) {
			if (val !== 0) return false;
		}

		return true;
	}
}

/**
 * Self-inducing Test Block
 */
(() => {
	// Create Instance
	const obj = new ValidAnagram();

	// Test Block using Object
	console.log(obj.isAnagram('anagram', 'nagaram')); // true
	console.log(obj.isAnagram('rat', 'car')); // false

	console.log(obj.isAnagramSingleMap('anagram', 'nagaram')); // true
	console.log(obj.isAnagramSingleMap('rat', 'car')); // false
})();