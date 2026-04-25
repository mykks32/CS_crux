class RotateArray {
    constructor() {}

    /**
     * Rotate Array
     *
     * @param nums nums array
     * @param k rotate constant
     */
    public rotate(nums: number[], k: number): void {
        const arr = new Array<number>();
        const len = nums.length;

        // Fallback
        if (len <= 1) return;
        // Normalize k
        k = k % len;
        // No rotation needed
        if (k === 0) return;
        let index = len - k;

        for (let i = 0; i < len; i++) {
            // Cycle by k in new array
            arr[i] = nums[index];

            // for cycle
            index++;
            if (index === len) {
                index = 0;
            }
        }

        // Empty nums array
        nums.length = 0;

        // Copy array to nums
        let i = 0;
        for (let num of arr) {
            nums[i] = num;
            i++;
        }

        // stdout
        console.log(arr);
    };

    /**
     * Optimized Array Rotate or Reverse
     *
     * @param nums nums Array
     * @param k Rotation constant
     */
    public optimizedRotate(nums: number[], k: number): void {
        const n = nums.length;
        k = k % n;

        this.reverse(nums, 0, n - 1);
        this.reverse(nums, 0, k - 1);
        this.reverse(nums, k, n - 1);

        // stdout
        console.log(nums);
    }

    /**
     * Easy Way to reverse Array
     *
     * @param nums Input Array
     * @param left Left Element
     * @param right Right Element
     * @private
     */
    private reverse(nums: number[], left: number, right: number) {
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
}

(() => {
    new RotateArray().rotate([1,2,3,4,5,6,7], 3);
    new RotateArray().rotate([-1,-100,3,99], 2);
    new RotateArray().rotate([1,2], 2);

    // Optimized
    new RotateArray().optimizedRotate([1,2,3,4,5,6,7], 3);
    new RotateArray().optimizedRotate([-1,-100,3,99], 2);
    new RotateArray().optimizedRotate([1,2], 2);
})()