class IndexOfTheFirstOccurrence {
	constructor() {}

	/**
	 * Returns the index of the first occurrence of `needle` in `haystack`.
	 * If `needle` is not found, returns -1.
	 *
	 * @param {string} haystack - The main string to search within
	 * @param {string} needle - The substring to search for
	 * @returns {number} Index of first occurrence, or -1 if not found
	 *
	 * @example
	 * strStr("sadbutsad", "sad") // returns 0
	 * strStr("leetcode", "leeto") // returns -1
	 *
	 * @timeComplexity O(n * m)
	 * @spaceComplexity O(m)
	 */
	public strStr(haystack: string, needle: string): number {
		const len = needle.length;

		for (let i = 0; i < haystack.length; i++) {
			// Window of size needle length
			const window = haystack.slice(i, i + len);

			// Check if window matches needle
			if (
				window.length === len &&
				window.includes(needle)
			) {
				return i;
			}
		}

		return -1;
	}
}

/**
 * Self-invoking test block
 */
(() => {
	// Create instance
	const obj = new IndexOfTheFirstOccurrence();

	// Test cases
	console.log(obj.strStr("sadbutsad", "sad"));   // 0
	console.log(obj.strStr("leetcode", "leeto"));  // -1
})();