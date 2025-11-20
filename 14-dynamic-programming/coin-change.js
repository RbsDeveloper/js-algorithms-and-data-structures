// Greedy Coin Change (works only with specific coin systems like US currency)
function numberOfCoins(amount){
    const coins = [25,10,5,1];// Largest to smallest

    let coinNum = 0; // Count how many coins we use
    let amountLeft = amount; // Track remaining amount to make

    /*
      Helper returns the largest coin we can use that
      does not exceed the remaining amount.

      Example: amountLeft = 37
      → helper returns 25
    */
    function helper (amountLeft){
        for(let coin of coins){
            if(amountLeft>=coin) return coin; // First valid coin
        }
        return 0 // No valid coin (should not happen for [25,10,5,1])
    }
    /*
      Subtract coins one by one until amountLeft becomes 0.
    */
    while(amountLeft){

        const coinToSubtract = helper(amountLeft)

        if(coinToSubtract === 0 && amountLeft > 0) return "Not possible with given coin denominations" // No coin can fit, meaning the coin system cannot form this amount

        amountLeft = amountLeft - coinToSubtract; // Reduce the remaining amount
        coinNum++ // Count this coin
    }
 
    return coinNum; // Total coins used
}

console.log(numberOfCoins(110))

// Dynamic Programming 
function numberOfCoinsDp(coins, amount, memo = {}) {
  if (amount === 0) return 0;        // Base case: we formed the exact amount
  if (amount < 0) return Infinity;   // Base case: invalid 
  if (memo[amount] !== undefined) return memo[amount]; // Return result if already computed

  let minCoins = Infinity; // Track the best (minimum) number of coins

  /*
    Try every coin as the FIRST coin used.


    Example: amount = 11, coins = [1,5,6]
    Try:
      - Use 1 → solve amount 10
      - Use 5 → solve amount 6
      - Use 6 → solve amount 5

    DP explores ALL these paths and takes the minimum.
  */

  for (let coin of coins) {
    
    const sub = numberOfCoinsDp(coins, amount-coin, memo);
    minCoins = Math.min(minCoins, sub + 1);
  }
  
  memo[amount] = minCoins; // Save result for future calls
  return minCoins;
}

