import {TwoSum} from "./src/1-two-sum";
import {LengthOfLongestSubstring} from "./src/2-longest-substring";
import {BinarySearch} from "./src/3-binary-search";

class Main {
    constructor() {};

    public start(): void {
        // 1. Two Sum (Array + Hash Map)
        const twoSum = new TwoSum();
        console.log("Two Sum: " + twoSum.twoSum([1,2,3,4,5], 9));
        // Time: O(n)
        // Space: O(n)

        // 2. Longest Substring Without Repeating Characters (Sliding Window)
        const longSubString = new LengthOfLongestSubstring();
        console.log("Long Substring: " + longSubString.lengthOfLongestSubstring("HELLO"));
        // Time: O(n)
        // Space: O(n)

        // 3. Binary Search (First Occurrence)
        const search = new BinarySearch();
        console.log("Binary Search: " + search.firstOccurrence([1,2,3,3,4,5], 3));
        // 	Time: O(log n) // (n / 2^k) = 1 so, O(log(n))
        // 	Space: O(1) // constant extra space
    }
}

(() => new Main().start())()