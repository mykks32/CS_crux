class LongestCommonPrefix {
	constructor() {}

	/**
	 * Finds the longest common prefix using findIndex approach
	 *
	 * Idea:
	 * - Compare characters at each index across all strings
	 * - Stop at the first mismatch
	 *
	 * Time Complexity: O(n * m)
	 * - n = number of strings
	 * - m = length of the first string
	 * - For each character, we check all strings using every()
	 *
	 * Space Complexity: O(1)
	 * - No extra space apart from a few variables
	 *
	 * @param strs array of strings
	 * @returns longest common prefix
	 */
	public longestCommonPrefix( strs: string[] ): string {
		if ( !strs.length ) return '';

		const i = strs[0].split('').findIndex(( c, i ) =>
			!strs.every(s => s[i] === c)
		);

		return i < 0 ? strs[0] : strs[0].slice(0, i);
	}

	/**
	 * Finds the longest common prefix using reduce
	 *
	 * Idea:
	 * - Iterate over characters of first string
	 * - Maintain a prefix and stop further processing when mismatch occurs
	 *
	 * Time Complexity: O(n * m)
	 * - n = number of strings
	 * - m = length of the first string
	 * - For each character, every() checks all strings
	 *
	 * Space Complexity: O(1)
	 * - Only an accumulator object is used (constant space)
	 *
	 * @param strs array of strings
	 * @returns longest common prefix
	 */
	public longestCommonPrefixUsingReduce( strs: string[] ): string {
		if ( !strs.length ) return '';

		return strs[0]
			.split('')
			.reduce(( acc, char, i ) => {
				// If already stopped, just return accumulator
				if ( !acc.continue ) return acc;

				// Check all strings at index i
				const allMatch = strs.every(str => str[i] === char);

				if ( allMatch ) {
					acc.prefix += char;
				} else {
					acc.continue = false; // stop further processing
				}

				return acc;
			}, { prefix: '', continue: true }).prefix;
	}
}

( () => {
	const obj = new LongestCommonPrefix();

	console.log(obj.longestCommonPrefix([ "flower", "flow", "flight" ])); // fl
	console.log(obj.longestCommonPrefix([ "dog", "racecar", "car" ]));   // ""

	console.log(obj.longestCommonPrefixUsingReduce([ "flower", "flow", "flight" ])); // fl
} )();