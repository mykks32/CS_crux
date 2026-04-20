class LongestSubstring {
	constructor() {}

	/**
	 * Finds the length of the longest substring without repeating characters.
	 *
	 * Uses sliding window + HashSet to maintain a window of unique characters.
	 *
	 * @param {string} s - Input string
	 * @returns {number} - Length of the longest unique-character substring
	 *
	 * @example
	 * lengthOfLongestSubstring("abcabcbb") // 3 ("abc")
	 *
	 * @example
	 * lengthOfLongestSubstring("bbbbb") // 1 ("b")
	 *
	 * @example
	 * lengthOfLongestSubstring("pwwkew") // 3 ("wke")
	 *
	 * @timeComplexity O(n)
	 * - Each character is visited at most twice (left + right pointer)
	 *
	 * @spaceComplexity O(min(n, charset))
	 * - Set stores unique characters in current window
	 *
	 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/
	 */
	public lengthOfLongestSubstring( s: string ): number {
		let left = 0;
		const set: Set<string> = new Set();
		let maxLen = 0;

		for ( let right = 0; right < s.length; right++ ) {
			// If duplicate found, shrink window until valid
			while ( set.has(s[right]) ) {
				console.log(set)
				set.delete(s[left]);
				left++;
			}

			// Add current character
			set.add(s[right]);

			// Update max length
			maxLen = Math.max(maxLen, right - left + 1);
		}

		return maxLen;
	}
}

/**
 * Self-inducing Test Block
 */
( () => {
	// Create Instance
	const obj = new LongestSubstring();

	// Test Block using Object
	// console.log(obj.lengthOfLongestSubstring('abcabcbb'));
	// console.log(obj.lengthOfLongestSubstring('bbbbb'));
	console.log(obj.lengthOfLongestSubstring('pwwkew'))
} )()