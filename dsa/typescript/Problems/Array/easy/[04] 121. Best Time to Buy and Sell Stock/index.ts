class MaxProfit {
	constructor() {}

	/**
	 * Find the maximum profit in the given stock array
	 *
	 * @param prices stock prices array
	 * @returns number max profit number
	 */
	maxProfit(prices: number[]): number {
		let minPrice = Infinity;
		let maxProfit = 0;

		for (const price of prices) {
			if (price < minPrice) {
				minPrice = price;
			} else {
				maxProfit = Math.max(maxProfit, price - minPrice);
			}
		}

		return maxProfit;
	}
}

( () => {
	console.log(new MaxProfit().maxProfit([ 7, 1, 5, 3, 6, 4 ]));
	console.log(new MaxProfit().maxProfit([ 7, 6, 4, 3, 1 ]));
	console.log(new MaxProfit().maxProfit([ 2, 4, 1 ]));

} )()