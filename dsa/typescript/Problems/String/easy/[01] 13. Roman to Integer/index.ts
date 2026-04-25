class Roman {
    constructor() {
    }

    public romanToInt(s: string): number {
        const romans: {
            [key: string]: number
        } = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }

        const arr: Array<string> = s.split('');

        let output: number = 0;

        for (let i = 0; i < arr.length; i++) {
            const current = romans[arr[i] as keyof typeof romans]!;
            const next = romans[arr[i + 1] as keyof typeof romans] ?? 0;

            if (next && current < next) {
                output -= current;
            } else {
                output += current;
            }
        }
        console.log(output);
        return output;
    }
}

(() => new Roman().romanToInt(
    'XXVII'
))()