export function maxProfit(prices: number[]): number {
  let max_profit = 0

  let min_price = Number.MAX_SAFE_INTEGER

  /*for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      max_profit = Math.max(max_profit, prices[j] - prices[i])
    }
  }*/

  for (let i = 0; i < prices.length; i++) {
    const profit = prices[i] - min_price
    if (profit < 0) {
      min_price = prices[i]
    } else {
      max_profit = Math.max(max_profit, profit)
    }
  }

  return max_profit
};