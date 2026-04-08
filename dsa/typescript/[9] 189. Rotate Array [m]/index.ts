class RotateArray {
    constructor() {}

    public rotate(nums: number[], k: number): void {
        const arr = new Array<number>();
        const len = nums.length;

        // Fallback
        if (len <= 1) return console.log(nums);
        // Normalize k
        k = k % len;
        // No rotation needed
        if (k === 0) return console.log(nums);
        let index = len - k;

        for (let i = 0; i < len; i++) {
            // Cycle by k in new array
            arr[i] = nums[index];

            console.log(`arr[${i}]`, arr[i]);
            console.log(`nums[${index}]`, arr[index])

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

        console.log(arr);
    };
}

(() => {
    new RotateArray().rotate([1,2,3,4,5,6,7], 3);
    new RotateArray().rotate([-1,-100,3,99], 2);
    new RotateArray().rotate([1,2], 2);
})()