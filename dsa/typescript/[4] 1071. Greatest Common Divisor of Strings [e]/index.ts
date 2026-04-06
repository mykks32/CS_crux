class GCD {
    constructor() {}

    public static gcdOfStrings(str1: string, str2: string): string {
        const len1 = str1.length;
        const len2 = str2.length;

        // Check concatenation property: no common divisor exists
        if (str1 + str2 != str2 + str1) return '';

        // Find minStr between Them
        const minStr = len1 < len2 ? str1 : str1;

        // minimum length between them
        let min = Math.min(len1, len2);

        while (min > 0) {
            // if divisible by min break the loop
            if (len1 % min === 0 && len2 % min === 0) {
                break;
            }
            min--
        }

        // Slice string from index 0 to min
        return minStr.slice(0, min)
    };
}

(() => {
    console.log(GCD.gcdOfStrings("ABCABC", "ABC"));
    // "ABC"
    console.log(GCD.gcdOfStrings("ABABAB", "ABAB"));
    // "AB"
    console.log(GCD.gcdOfStrings("LEET", "CODE"));
    // ""
    console.log(GCD.gcdOfStrings("AAAAAB", "AAA"));
    // ""
})();