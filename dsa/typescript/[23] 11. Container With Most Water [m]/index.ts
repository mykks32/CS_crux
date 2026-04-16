class ContainerWithMostWater {
    constructor() {
    }

    /**
     * Find the maximum water container area using two pointers.
     *
     * @param height - Array of vertical line heights
     *
     * @example
     * maxArea([1,8,6,2,5,4,8,3,7]) // 49
     * maxArea([1,1]) // 1
     *
     * @returns Maximum water area
     *
     * @timeComplexity O(n) - Iterates over the given array max size only
     * @spaceComplexity O(1) - only a few variables used, no extra data structures
     *
     * @see https://leetcode.com/problems/container-with-most-water/
     */
    public maxArea(height: number[]): number {
        // Two Pointer
        let left = 0;
        let right = height.length - 1;

        // Max Area
        let maxArea = 0;
        let count = 0;

        // Iterate until pointers meet
        while (left < right) {
            // Calculate container area
            const area = Math.min(height[left], height[right]) * (right - left);

            // Update maximum area
            maxArea = Math.max(maxArea, area);

            // Move pointer if smaller than subsequent other
            if (height[left] <= height[right]) {
                left++;
            } else {
                right--;
            }
            count++;
        }
        return maxArea;
    };
}

/**
 * Self-invoking Test Block
 */
(() => {
    // Create Instance
    const obj = new ContainerWithMostWater();

    // Test Case Block with object
    console.log(obj.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
    console.log(obj.maxArea([1, 1]))
    console.log(obj.maxArea([8,7,2,1]))
})()