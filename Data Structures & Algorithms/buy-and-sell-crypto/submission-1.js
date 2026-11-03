class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxPrice = 0;
        for(let i = 1; i < prices.length ; i++)
        {
            const price = prices[i];
            const selling = prices[i] - minPrice
            if(selling > maxPrice)
                maxPrice = selling;
            if(price < minPrice)
                minPrice = price;
        }
        return maxPrice
    }
}
