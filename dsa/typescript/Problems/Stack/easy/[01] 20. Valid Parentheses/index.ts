class ValidParentheses {
	constructor() {}

	/**
	 * Problem: 20. Valid Parentheses
	 * Category: Stack
	 * Difficulty: Easy
	 * ------------------
	 *
	 * Determines if the input string of brackets is valid.
	 *
	 * A string is valid if:
	 * - Open brackets are closed by the same type
	 * - Open brackets are closed in the correct order
	 * - Every closing bracket has a corresponding opening bracket
	 *
	 * Uses a stack to track opening brackets and matches them
	 * with closing brackets using a mapping.
	 *
	 * @param {string} s - Input string containing '(', ')', '{', '}', '[' and ']'
	 * @returns {boolean} - True if valid, otherwise false
	 *
	 * @example
	 * isValid("()") // true
	 *
	 * @example
	 * isValid("()[]{}") // true
	 *
	 * @example
	 * isValid("(]") // false
	 *
	 * @timecomplexity O(n)
	 * - Each character is processed once
	 *
	 * @spacecomplexity O(n)
	 * - Stack may store all opening brackets
	 *
	 * @see https://leetcode.com/problems/valid-parentheses/
	 */
	public isValid(s: string): boolean {

		// Stack to store opening brackets
		const stack = new Array<string>();

		// Mapping of closing → opening brackets
		const parentheses = new Map<string, string>([
			[')', '('],
			['}', '{'],
			[']', '[']
		]);

		// Helper: push element to stack
		const push = (str: string) => {
			stack.push(str);
		};

		// Helper: pop element from stack
		const pop = () => {
			return stack.pop();
		};

		// Helper: check if stack is empty
		const isEmpty = () => {
			return stack.length === 0;
		};

		// Traverse input string
		for (const p of s) {

			// If opening bracket → push to stack
			if (!parentheses.has(p)) {
				push(p);
			}

			// If closing bracket → validate
			else {
				if (isEmpty()) return false;

				if (pop() !== parentheses.get(p)) {
					return false;
				}
			}
		}

		// Valid if no unmatched brackets remain
		return stack.length === 0;
	}
}

/**
 * Self-inducing Test Block
 */
( () => {
	// Create Instance
	const obj = new ValidParentheses()

	// Test Block using Object
	console.log(obj.isValid('()'));
	console.log(obj.isValid("()[]{}"));
	console.log(obj.isValid("(]"));
	console.log(obj.isValid("([])"));
	console.log(obj.isValid("([)]"));
} )()
