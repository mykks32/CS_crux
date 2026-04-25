class Kids {
    constructor() {}

    public kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
        // Find the maximum number int the array
        const max = Math.max(...candies);

        let result = new Array<boolean>()

        // Chack if the candy + extraCandies is less than max in array
        // If true -> push [true] else [false]
        for (const candy of candies) {
            if ( candy + extraCandies < max ) {
                result.push(false)
            } else {
                result.push(true);
            }
        }
        return result;
    };
}

(() => {
    console.log(new Kids().kidsWithCandies([2,3,5,1,3], 3));
    // [true,true,true,false,true]
    console.log(new Kids().kidsWithCandies([4,2,1,1,2], 1));
    // [true,false,false,false,false]
    console.log(new Kids().kidsWithCandies([12,1,12], 10));
    // [true,false,true]
})()