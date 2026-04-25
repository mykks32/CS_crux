class ThreeSum {
	constructor() {
	}

	/**
	 * Finds all unique triplets in the array which gives the sum of zero.
	 *
	 *
	 * @param {number[]} nums - Input array of integers
	 * @returns {number[][]} - Array of triplets [a, b, c] such that a + b + c = 0
	 *
	 * @example
	 * threeSum([-1, 0, 1, 2, -1, -4])
	 * // Possible output: [[-1, 0, 1], [-1, -1, 2]] (may vary due to logic limitations)
	 *
	 * @timeComplexity O(n^2)
	 *  - Sorting: O(n log n)
	 *  - Outer loop: O(n)
	 *  - Two-pointer scan: O(n) per iteration
	 *
	 * @spaceComplexity O(1)
	 *  - Excluding output array
	 */
	public threeSum( nums: number[] ): number[][] {
		// Sort the array
		nums.sort(( a, b ) => a - b);
		// First Index
		let index: number = 0;

		// Output Array
		const output: Array<Array<number>> = [];

		// Iterate to less than two index
		while ( index < nums.length - 2 ) {

			// Skip duplicate index
			if ( index > 0 && nums[index] === nums[index - 1] ) {
				index++;
				continue;
			}
			// Two Pointer
			let left = index + 1;
			let right = nums.length - 1;

			while ( left < right ) {
				// Find Sum of two number and compare it with index element
				const sum = nums[index] + nums[left] + nums[right];
				if ( sum === 0 ) {
					output.push([ nums[index], nums[left], nums[right] ]);

					// if sum < index element, increment left otherwise decrement right
					// Skip duplicate left
					while ( left < right && nums[left] === nums[left + 1] ) {
						left++
					}

					// Skip duplicate right
					while ( left < right && nums[right] === nums[right - 1] ) {
						right--;
					}

					left++;
					right--;
				} else if ( sum < 0 ) {
					left++;
				} else {
					right--;
				}
			}
			// Increase index
			index++;
		}

		return output;
	}
}

/**
 * Self-inducing Test Block
 */
( () => {
		// Create Instance
		const
			obj = new ThreeSum();

		// Test Case Block using object
		console.log(obj.threeSum([ -1, 0, 1, 2, -1, -4 ]));
		console.log(obj.threeSum([ 0, 1, 1 ]))
		console.log(obj.threeSum([ 0, 0, 0 ]))
	}

)
()