// 1. Two Sum (Array + Hash Map)
// Given an array and a target, return indices of two numbers whose sum equals target.

export class TwoSum {
    constructor() {}

    public twoSum (nums: Array<number>, target: number): Array<number> {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const need = target - nums[i];
            if (map.has(need)) return [map.get(need), i];
            map.set(nums[i], i);
        }
        return [];
    }
}
