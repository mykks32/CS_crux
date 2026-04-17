class IsomorphicStrings {
	constructor() {}

	/**
	 * Checks whether two strings are isomorphic.
	 *
	 * Two strings are isomorphic if there is a one-to-one mapping between
	 * characters of `s` and `t` (bijection).
	 *
	 * @param s - First input string
	 * @param t - Second input string
	 * @returns true if strings are isomorphic, otherwise false
	 *
	 * @example
	 * isIsomorphic("egg", "add")      // true
	 * isIsomorphic("foo", "bar")      // false
	 * isIsomorphic("paper", "title")  // true
	 * isIsomorphic("ab", "aa")        // false
	 *
	 * @complexity
	 * Time Complexity: O(n)
	 * Space Complexity: O(k)
	 * - n = length of strings
	 * - k = unique characters stored in maps
	 *
	 * @see https://leetcode.com/problems/isomorphic-strings/
	 */
	public isIsomorphic( s: string, t: string ): boolean {
		// Length mismatch → not isomorphic
		if ( s.length !== t.length ) return false;

		// Two maps for bidirectional mapping (s → t and t → s)
		const mapST = new Map<string, string>();
		const mapTS = new Map<string, string>();

		for ( let i = 0; i < s.length; i++ ) {
			const charS = s[i];
			const charT = t[i];

			// Check consistency in both directions
			if (
				( mapST.has(charS) && mapST.get(charS) !== charT ) ||
				( mapTS.has(charT) && mapTS.get(charT) !== charS )
			) {
				return false;
			}

			// Store mapping
			mapST.set(charS, charT);
			mapTS.set(charT, charS);
		}

		return true;
	}
}

/**
 * Self-inducing Test Block
 */
( () => {
	// Create Instance
	const obj = new IsomorphicStrings();

	// Test Block using object
	console.log(obj.isIsomorphic('egg', 'add'));
	console.log(obj.isIsomorphic('f11', 'b23'));
	console.log(obj.isIsomorphic('paper', 'title'));
} )()