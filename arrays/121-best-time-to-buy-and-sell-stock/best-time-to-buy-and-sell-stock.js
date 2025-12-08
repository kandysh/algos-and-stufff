/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    let start = 0
    let end = start+1;
    while(end < prices.length){
        if(prices[start] > prices[end]) {
            start = end;
        }else{
            profit = Math.max(profit, prices[end] - prices[start])
        }
        end++;
    }
    return profit;
};