import {TwoSum} from "./src/1-two-sum";
import {LengthOfLongestSubstring} from "./src/2-longest-substring";

class Main {
    constructor() {};

    public start(): void {
        // 1. Two Sum (Array + Hash Map)
        const twoSum = new TwoSum();
        console.log(twoSum.twoSum([1,2,3,4,5], 9));
        // Time: O(n)
        // Space: O(n)

        // 2. Longest Substring Without Repeating Characters (Sliding Window)
        const longSubString = new LengthOfLongestSubstring();
        console.log(longSubString.lengthOfLongestSubstring("HELLO"));
        // Time: O(n)
        // Space: O(n)
    }
}

(() => new Main().start())()