class HappyNumber {
	constructor() {}

	/**
	 * Determines whether a number is a "happy number".
	 *
	 * A happy number is defined as a number that eventually reaches 1
	 * when replaced by the sum of the squares of its digits repeatedly.
	 * If it enters a cycle that does not include 1, it is not happy.
	 *
	 * @param {number} n - Input number
	 * @returns {boolean} - True if the number is happy, otherwise false
	 *
	 * @example
	 * isHappy(19) // true
	 * Explanation: 1² + 9² → 82 → ... → 1
	 *
	 * @example
	 * isHappy(2) // false
	 * Explanation: enters cycle and never reaches 1
	 *
	 * @timeComplexity O(log n * k)
	 * - log n for digit breakdown per iteration
	 * - k is number of iterations before cycle/termination
	 *
	 * @spaceComplexity O(k)
	 * - Set stores previously seen numbers to detect cycles
	 *
	 * @see https://leetcode.com/problems/happy-number/
	 */
	isHappy(n: number): boolean {
		// Track numbers already seen to detect cycles
		const set: Set<number> = new Set();

		// Continue until we either reach 1 or detect a cycle
		while (n !== 1) {
			// If number repeats → cycle detected → not happy
			if (set.has(n)) return false;

			set.add(n);

			// Replace number with sum of squares of its digits
			n = n
				.toString()
				.split('')
				.reduce((sum, d) => sum + Number(d) * Number(d), 0);
		}

		// If we reach 1, it's a happy number
		return true;
	}
}

/**
 * Self-inducing Test Block
 */
(() => {
	// Create Instance
	const obj = new HappyNumber();

	// Test cases
	console.log(obj.isHappy(19)); // true
	console.log(obj.isHappy(2));  // false
})();