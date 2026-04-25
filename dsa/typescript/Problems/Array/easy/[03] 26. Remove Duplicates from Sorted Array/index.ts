class SortedArray {
    constructor() {
    }

    public removeDuplicates(nums: number[]): number {
        const len = nums.length;
        const uniqueSet = new Set<number>();

        // Create a uniqueSet from nums array
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (nums[i] === nums[j]) {
                    uniqueSet.add(nums[j]);
                }
            }
        }

        // Empty array
        nums.length = 0

        // Push to the empty array
        for (let unique of uniqueSet) {
            nums.push(unique)
        }

        return nums.length;
    };
}

(() => {
    // console.log(new SortedArray().removeDuplicates([1, 1, 2]))
    console.log(new SortedArray().removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
})()