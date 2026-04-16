class Subsequence {
    constructor() {
    }

    /**
     * Given two strings s and t,
     * return true if s is a subsequence of t,
     * or false otherwise.
     *
     * A subsequence is a string formed by deleting
     * some characters without changing the order.
     *
     * @example
     * Input:
     *  s = 'abc'
     *  t = 'ahbgdc'
     *
     * Output:
     *  true
     *
     * Explanation:
     *  Characters 'a', 'b', 'c' appear in order in "ahbgdc"
     *
     * @param s - subsequence string
     * @param t - main string
     *
     * @returns
     * boolean
     *
     * @timeComplexity O(n) — iterate through string t once
     * @spaceComplexity O(1) — no extra data structures used
     */
    public isSubsequence(s: string, t: string): boolean {
        // Index of substring & string
        let subIndex = 0;
        let stringIndex = 0;

        // Count matching character count
        let match = 0;

        // Length of substring and string
        const subLen = s.length;
        const stringLen = t.length;

        // Iterate through string
        while (stringIndex < stringLen) {
            // Check if char match the string in proper order
            if (s[subIndex] === t[stringIndex]) {
                subIndex++;
                match++
            }
            stringIndex++;
        }
        // Return true if length of match is equal to subString
        return match === subLen;
    };
}

/**
 * Self-invoking test block
 */
(() => {
    // Create Instance
    const obj = new Subsequence();

    // Test Cases using object
    console.log(obj.isSubsequence('abc', 'ahbgdc'));
    console.log(obj.isSubsequence('axc', 'ahbgdc'))
})()