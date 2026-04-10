class JumpGame {
	constructor() {}

	/**
	 * You are given an integer array nums.
	 * You are initially positioned at the array's first index,
	 * and each element in the array represents your maximum jump length at that position.
	 *
	 * The function determines whether you can reach the last index.
	 *
	 * @example
	 * Input: nums = [2,3,1,1,4]
	 * Output: true
	 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
	 *
	 * @example
	 * Input: nums = [3,2,1,0,4]
	 * Output: false
	 *
	 * @param nums - Array of non-negative integers representing jump lengths
	 * @returns {boolean} `true` if the last index is reachable, otherwise `false`
	 *
	 * @timeComplexity O(n) - each element is visited once
	 * @spaceComplexity O(1) - uses only a constant amount of extra space
	 */
	public canJump( nums: number[] ): boolean {
		let maxReach = 0;

		for ( let i = 0; i < nums.length; i++ ) {
			// If current index is not reachable
			if ( i > maxReach ) return false;

			// Update the farthest we can reach
			maxReach = Math.max(maxReach, i + nums[i]);

			// If we can already reach the end
			if ( maxReach >= nums.length - 1 ) return true;
		}

		return true;
	}
}

/**
 * Self-invoking test block
 */
( () => {
	// Create instance
	const obj = new JumpGame();

	// Test cases
	console.log(obj.canJump([ 2, 3, 1, 1, 4 ]))
	console.log(obj.canJump([ 3, 2, 1, 0, 4 ]))
	console.log(obj.canJump([ 1 ]))
	console.log(obj.canJump([ 0 ]))
	console.log(obj.canJump([ 0, 1 ]))
} )()