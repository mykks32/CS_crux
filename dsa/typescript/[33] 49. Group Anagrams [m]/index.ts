class GroupAnagrams {
	constructor() {}

	/**
	 * Groups strings that are anagrams of each other.
	 *
	 * Two strings are anagrams if they contain the same characters
	 * with the same frequency, regardless of order.
	 *
	 * @param {string[]} strs - Array of input strings
	 * @returns {string[][]} - Array of grouped anagrams
	 *
	 * @example
	 * groupAnagrams(["eat","tea","tan","ate","nat","bat"])
	 * // [["eat","tea","ate"], ["tan","nat"], ["bat"]]
	 *
	 * @example
	 * groupAnagrams([""])
	 * // [[""]]
	 *
	 * @example
	 * groupAnagrams(["a"])
	 * // [["a"]]
	 *
	 * @timeComplexity O(n * k log k)
	 * - n = number of strings
	 * - k = max length of a string
	 * - sorting each string takes O(k log k)
	 *
	 * @spaceComplexity O(n * k)
	 * - storing grouped anagrams
	 *
	 * @see https://leetcode.com/problems/group-anagrams/
	 */
	public groupAnagrams(strs: string[]): string[][] {

		// word -> (char -> count)
		const map: Map<string, Map<string, number>> = new Map();

		// Build frequency map for each word
		for (let i = 0; i < strs.length; i++) {
			const word = strs[i];

			// make unique key
			const key = word + "#" + i;

			// initialize if not exists & ensure entry exists (handles "" case)
			!map.has(key) && map.set(key, new Map<string, number>());

			[...word].forEach((char) => {
				// count characters
				map.get(key)!.set(
					char,
					(map.get(key)!.get(char) ?? 0) + 1
				);
			});
		}

		// signature -> list of anagrams
		const freqGroups: Map<string, string[]> = new Map();

		for (const key of map.keys()) {
			const freqMap = map.get(key)!;

			// convert freq map to sorted string key (e.g. a1e1t1)
			const signature = [...freqMap.entries()]
				.sort((a, b) => a[0].localeCompare(b[0]))
				.map(([char, count]) => char + count)
				.join('');

			// group words by signature
			if (!freqGroups.has(signature)) {
				freqGroups.set(signature, []);
			}

			freqGroups.get(signature)!.push(key.split("#")[0]);
		}

		return [...freqGroups.values()];
	}}

/**
 * Self-inducing Test Block
 */
( () => {
	// Create Instance
	const obj = new GroupAnagrams();

	// Test Block using Object
	console.log(obj.groupAnagrams([ "eat", "tea", "tan", "ate", "nat", "bat" ]));
	console.log(obj.groupAnagrams([ "" ]));
	console.log(obj.groupAnagrams([ "","" ]));
	console.log(obj.groupAnagrams([ "a" ]));
} )()