class BestTimeToBuyAndSellStock {
	constructor() {}

	/**
	 * Find max profit from stock prices array [Greedy Approach]
	 *
	 * Idea:
	 * - Add all increasing differences (prices[i] > prices[i-1])
	 *
	 * Time Complexity: O(n)
	 * - Single pass through the array
	 *
	 * Space Complexity: O(1)
	 * - No extra space used
	 *
	 * @param prices stock prices array
	 * @returns max profit
	 */
	public maxProfit(prices: number[]): number {
		let profit = 0;

		for (let i = 1; i < prices.length; i++) {
			// Check if next is greater than previous
			if (prices[i] > prices[i - 1]) {
				// Add difference
				profit += prices[i] - prices[i - 1];
			}
		}

		return profit;
	}

	/**
	 * Find max profit from stock prices array [Valley and Peak Method]
	 *
	 * Idea:
	 * - Find local minima (valley → buy)
	 * - Find local maxima (peak → sell)
	 * - Repeat and accumulate profit
	 *
	 * Time Complexity: O(n)
	 * - Each element is visited at most once
	 *
	 * Space Complexity: O(1)
	 * - Only variables used, no extra data structures
	 *
	 * @param prices stock prices array
	 * @returns max profit
	 */
	public anotherMaxProfitApproach(prices: number[]): number {
		const n = prices.length;
		let profit = 0;
		let i = 0;

		while (i < n - 1) {
			// Find valley (buy)
			while (i < n - 1 && prices[i] >= prices[i + 1]) {
				i++;
			}
			const buy = prices[i];

			// Find peak (sell)
			while (i < n - 1 && prices[i] <= prices[i + 1]) {
				i++;
			}
			const sell = prices[i];

			profit += sell - buy;
		}

		return profit;
	}
}

(() => {
	const obj = new BestTimeToBuyAndSellStock();

	console.log(obj.maxProfit([7, 1, 5, 3, 6, 4]));
	console.log(obj.maxProfit([1, 2, 3, 4, 5]));
	console.log(obj.maxProfit([7, 6, 4, 3, 1]));

	console.log(obj.anotherMaxProfitApproach([7, 1, 5, 3, 6, 4]));
})();