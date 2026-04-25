class MergeStrings {
    constructor() {}

    public static mergeAlternately(word1: string, word2: string): string {
        const arr1 = word1.split('');
        const arr2 = word2.split('');
        const len = arr1.length + arr2.length;

        let i = 0;
        let j = 0;
        let result = new Array<string>(len);

        while (i < arr1.length || j < arr2.length) {
            if (i < arr1.length) {
                result.push(arr1[i]);
                i++;
            }

            if (j < arr2.length) {
                result.push(arr2[j]);
                j++;
            }
        }

        return result.join('');
    }
}

(() => {
    console.log(MergeStrings.mergeAlternately("abc", "pqr"));
    // apbqcr
    console.log(MergeStrings.mergeAlternately("ab", "pqrs"));
    // apbqrs
    console.log(MergeStrings.mergeAlternately("abcd", "pq"));
    // apbqcd
})();