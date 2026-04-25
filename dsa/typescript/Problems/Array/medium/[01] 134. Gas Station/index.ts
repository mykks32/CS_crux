class GasStation {
    constructor() {
    }

    // there are n station i.e. for above n = 5
    // At 'i' station -> gas[i]
    // i.e. At 1 st -> gas[1] -> 1
    // And to travel from 1 to 2
    // cost[1] -> 3 unit is needed
    // if circle one then return the starting index otherwise -1
    //
    // gas = [1, 2, 3, 4, 5]
    // cost = [3, 4, 5, 1, 2]
    //
    public canCompleteCircuit(gas: number[], cost: number[]): number {
        let totalTank: number = 0;
        let currTank: number = 0;
        let start: number = 0;


        // for i = 0 -> t = 1
        for (let i = 0; i < gas.length; i++) {
            // for i = 0 -> diff = -2
            // for i = 1 -> diff = -2
            // for i = 2 -> diff = -2
            // for i = 3 -> diff = 3
            // for i = 4 -> diff = 3
            const diff = gas[i] - cost[i];

            // for i = 0 -> totalTank = -2
            // for i = 1 -> totalTank = -2
            // for i = 2 -> totalTank = -2
            // for i = 3 -> totalTank = 3
            // for i = 4 -> totalTank = 6
            totalTank += diff;

            // for i = 0 -> currTank = -2
            // for i = 1 -> currTank = -2
            // for i = 2 -> currTank = -2
            // for i = 3 -> currTank = 3
            // for i = 4 -> currTank = 6
            currTank += diff;

            // for i = 0 :: true -> start = 1 & currTank = 0
            // for i = 1 :: true -> start = 2 & currTank = 0
            // for i = 2 :: true -> start = 3 & currTank = 0
            // for i = 3 :: false
            // for i = 4 :: false
            if (currTank < 0) {
                start = i + 1
                currTank = 0
            }
        }

        // totalTank = 6 > 0 -> 3
        return totalTank >= 0 ? start : -1
    };

}


console.log((() => new GasStation().canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))())
console.log((() => new GasStation().canCompleteCircuit([2, 3, 4], [3, 4, 3]))())