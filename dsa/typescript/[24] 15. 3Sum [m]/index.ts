class ThreeSum {
    constructor() {
    }

    /**
     *
     *
     * @param nums
     */
    threeSum(nums: number[]): number[][] {
        // Two Pointers
        nums.sort((a, b) => a - b);
        let index: number = 0;
        let left: number = index + 1;
        let right: number = nums.length - 1;

        const output: Array<Array<number>> = [];

        while (index < nums.length - 1) {
            while (left < right) {

                console.log('index', index, 'left', left, 'right', right);
                const sum = nums[left] + nums[right];
                if (sum == -nums[index]) {
                    output.push([nums[index], nums[left], nums[right]]);
                    console.log(output);
                }

                if (nums[left] < nums[right]) {
                    left++
                } else {
                    right--;
                }
            }
            index++;
            left = index + 1;
            right = nums.length - 1;
        }

        return output;
    }
}

/**
 * Self-inducing Test Block
 */
(() => {
        // Create Instance
        const
            obj = new ThreeSum();

        // Test Case Block using object
        console.log(obj.threeSum([-1, 0, 1, 2, -1, -4]));
        // console.log(obj.threeSum([0, 1, 1]))
        // console.log(obj.threeSum([0, 0, 0]))
    }

)
()