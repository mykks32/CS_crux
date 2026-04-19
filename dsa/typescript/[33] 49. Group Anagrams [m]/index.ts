class GroupAnagrams {
	constructor() {}

	/**
	 * Groups strings that are anagrams of each other using a
	 * frequency-map-based signature construction approach.
	 *
	 * Each word is converted into a character frequency map,
	 * which is then transformed into a unique signature string.
	 * Words with identical signatures are grouped together.
	 *
	 * ⚠️ Note: This is a more complex approach than sorting-based grouping.
	 *
	 * @param {string[]} strs - Array of input strings
	 * @returns {string[][]} - Groups of anagrams
	 *
	 * @example
	 * groupAnagrams(["eat","tea","tan","ate","nat","bat"])
	 * // [["eat","tea","ate"], ["tan","nat"], ["bat"]]
	 *
	 * @timeComplexity O(n * k log k)
	 * - n = number of words
	 * - k = max length of word (sorting inside signature step)
	 *
	 * @spaceComplexity O(n * k)
	 * - Stores frequency maps + grouped results
	 *
	 * @see https://leetcode.com/problems/group-anagrams/
	 */
	public groupAnagrams( strs: string[] ): string[][] {

		// word -> (char -> count)
		const map: Map<string, Map<string, number>> = new Map();

		// Build frequency map for each word
		for ( let i = 0; i < strs.length; i++ ) {
			const word = strs[i];

			// make unique key
			const key = word + "#" + i;

			// initialize if not exists & ensure entry exists (handles "" case)
			!map.has(key) && map.set(key, new Map<string, number>());

			[ ...word ].forEach(( char ) => {
				// count characters
				map.get(key)!.set(
					char,
					( map.get(key)!.get(char) ?? 0 ) + 1
				);
			});
		}

		// signature -> list of anagrams
		const freqGroups: Map<string, string[]> = new Map();

		for ( const key of map.keys() ) {
			const freqMap = map.get(key)!;

			// convert freq map to sorted string key (e.g. a1e1t1)
			const signature = [ ...freqMap.entries() ]
				.sort(( a, b ) => a[0].localeCompare(b[0]))
				.map(( [ char, count ] ) => char + count)
				.join('');

			// group words by signature
			if ( !freqGroups.has(signature) ) {
				freqGroups.set(signature, []);
			}

			freqGroups.get(signature)!.push(key.split("#")[0]);
		}

		return [ ...freqGroups.values() ];
	}

	/**
	 * Groups strings that are anagrams using sorted-string key approach.
	 *
	 * Each word is sorted alphabetically and used as a key.
	 * All words with the same sorted form are grouped together.
	 *
	 * This is the standard and most efficient interview solution.
	 *
	 * @param {string[]} strs - Array of input strings
	 * @returns {string[][]} - Groups of anagrams
	 *
	 * @example
	 * groupAnagramsII(["eat","tea","tan","ate","nat","bat"])
	 * // [["eat","tea","ate"], ["tan","nat"], ["bat"]]
	 *
	 * @timeComplexity O(n * k log k)
	 * - Sorting each word dominates runtime
	 *
	 * @spaceComplexity O(n * k)
	 * - Stores grouped words in a Map
	 *
	 * @see https://leetcode.com/problems/group-anagrams/
	 */
	public groupAnagramsII( strs: Array<string> ): Array<Array<string>> {
		// key: sorted string, value: anagrams
		const map: Map<string, Array<string>> = new Map();

		// group words by sorted character key
		[ ...strs ].forEach(( str ) => {
			const key = str.split('').sort().join('');

			if ( !map.has(key) ) map.set(key, []);
			map.get(key)!.push(str);
		});

		// return grouped anagrams
		return Array.from(map.values());
	}
}

/**
 * Self-inducing Test Block
 */
( () => {
	// Create Instance
	const obj = new GroupAnagrams();

	// Test Block using Object
	console.log(obj.groupAnagrams([ "eat", "tea", "tan", "ate", "nat", "bat" ]));
	console.log(obj.groupAnagrams([ "" ]));
	console.log(obj.groupAnagrams([ "", "" ]));
	console.log(obj.groupAnagrams([ "a" ]));

	console.log(obj.groupAnagramsII([ "eat", "tea", "tan", "ate", "nat", "bat" ]));
	console.log(obj.groupAnagramsII([ "" ]));
	console.log(obj.groupAnagramsII([ "", "" ]));
	console.log(obj.groupAnagramsII([ "a" ]));
} )()