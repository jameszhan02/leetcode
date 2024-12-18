/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  //two pointer approach
  let buyDate = 0
  let sellDate = 0
  let maxProfit = 0
  while (sellDate < prices.length) {
    const currentPrice = prices[sellDate]
    const buyPrice = prices[buyDate]
    //reason why this is work
    //A1. always looking for a smaller number to buy
    //Q: -> I was worry about what if the smallest buy wont give you the max profit
    //A2. that is ok since we already sotre the "maxprofit" (on going) in a var
    if (buyPrice < currentPrice) {
      const currentProfit = currentPrice - buyPrice
      maxProfit = Math.max(maxProfit, currentProfit)
    } else {
      buyDate = sellDate
    }
    sellDate++
  }

  return maxProfit
}
// @lc code=end
