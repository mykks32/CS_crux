// 3. Binary Search (First Occurrence)
// Find the first occurrence of a target in a sorted array.

export class BinarySearch {
    constructor() {}

    // nums = [1,2,3,4,5], target=4
    public firstOccurrence(nums: Array<number>, target: number): number {
        // left = 0, right = 4
        let [left, right] = [0, nums.length -1];
        // result = -1
        let result = -1;

        // iter1: 0 <= 4 true
        // iter2: 3 <= 4 true
        while (left <= right) {
            // iter1: (0 + 4)/2 = 2
            // iter2: mid = (3 + 4)/2 => 3
            const mid = Math.floor((left + right) / 2);

            // iter1: nums[2] = 3 != 4 => false
            // iter2: nums[3] = 4 => (4 === 4) true
            if (nums[mid] === target) {
                // iter2: result = 3
                result = mid;
                // iter2: right = (3-1) => 2
                // this gives first occurrence if [1,2,4,4,4,5]
                right = mid -1;
            }
            // iter1: nums[2] = 3 < 4 => true
            else if (nums[mid] < target) {
                // iter1: left = 2 + 1
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}