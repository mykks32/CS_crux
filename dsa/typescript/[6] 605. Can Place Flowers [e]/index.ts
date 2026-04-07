class Flowers {
    constructor() {
    }

    public canPlaceFlowers(flowerbed: number[], n: number): boolean {
        let len = flowerbed.length;
        let count = 0;

        // flowerbed[0] -> 1
        // flowerbed[1] -> 0
        // flowerbed[2] -> 0
        for (let i = 0; i < len; i++) {
            // flowerbed[0] false
            // flowerbed[1] true
            // flowerbed[2] true
            if (flowerbed[i] === 0) {
                // 1===0 false flowerbed[0] false
                // 2===0 false flowerbed[1] true
                const empty_left = (i === 0) || (flowerbed[i - 1] === 0);

                // 1===5 false flowerbed[2] true
                // 2===5 false flowerbed[3] true
                const empty_right = (i === len - 1) || (flowerbed[i + 1] === 0);

                // true -> for i = 2
                if (empty_left && empty_right) {
                    // insert into index of array
                    flowerbed[i] = 1;
                    // Increase count
                    count++;
                    // if (count >= n) then return true
                    if (count >= n) {
                        return true;
                    }
                }
            }
        }
        // Return fallback true || false
        return count >= n;
    }
}

// Test
(() => {
    console.log(new Flowers().canPlaceFlowers([1, 0, 0, 0, 1], 1));
    console.log(new Flowers().canPlaceFlowers([1, 0, 0, 0, 1], 2));
})();