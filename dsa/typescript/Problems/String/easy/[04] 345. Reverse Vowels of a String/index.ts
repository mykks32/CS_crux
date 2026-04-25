class ReverseString {
    constructor() {
    }

    public reverseVowels(s: string): string {
        const vowels = "aeiouAEIOU";
        const arr = Array<string>()
        const arrStr = s.split("");

        // get vowel from string
        for (let char of s) {
            if (vowels.includes(char)) {
                arr.push(char);
            }
        }
        // arr = [ 'I', 'e', 'e', 'A' ]
        // calculate length of array
        let len = arr.length;

        // Replace array string with vowel array in reverse order
        for (let i = 0; i < arrStr.length; i++) {
           if (vowels.includes(arrStr[i])) {
               arrStr[i] = arr[len - 1]
               len--
           }
        }
        // arrStr = [ 'A', 'c', 'e', 'C', 'r', 'e', 'I', 'm']

        // Convert array to string
        return arrStr.join("");
    };
}

(() => {
    console.log(new ReverseString().reverseVowels('IceCreAm'))
    console.log(new ReverseString().reverseVowels('leetcode'))
})()
