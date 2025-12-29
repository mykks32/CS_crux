// 2. Longest Substring Without Repeating Characters (Sliding Window)
// Find the length of the longest substring without repeating characters.

export class LengthOfLongestSubstring {
    constructor() {}

    // Passing s = "HELLO"
    public lengthOfLongestSubstring(s: string): number {
        // Set(0) {}
        const set = new Set<string>();


        let left = 0;
        let maxLength = 0;

        // iter1: 0 < 5
        // iter2: 1 < 5
        // iter3: 2 < 5
        // iter4: 3 < 5
        for (let right = 0; right < s.length; right++) {
            // iter1: false
            // iter2: false
            // iter3: false
            // iter4: true
            while (set.has(s[right])) {
                // delete the set when set contains the substring
                set.delete(s[left]);
                left++;
            }
            // iter1: Set(1) {"H"}
            // iter2: Set(2) {"H", "E"}
            // iter3: Set(3) {"H","E","L"}
            set.add(s[right]);
            // iter1: 1 =>(0, 1)
            // iter2: 2 =>(1, 2)
            // iter3: 3 =>(3, 3)
            maxLength = Math.max(maxLength, right - left +1);
        }
        // return 3
        return maxLength
    }
}