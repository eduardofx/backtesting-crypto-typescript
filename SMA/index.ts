import calculateSMA from "./calculateSMA";
import getHistoricalData from "./getHistoricalData";


async function backtest(symbol: string, interval: string, limit: number) {
  const data = await getHistoricalData(symbol, interval, limit);
  const closePrices = data.map((entry: { close: object; }) => entry.close);

  // Set periods for moving averages.
  const shortPeriod = 7;
  const longPeriod = 25;

  const shortSMA = calculateSMA(closePrices, shortPeriod);
  const longSMA = calculateSMA(closePrices, longPeriod);

  let balance = 1000; // Initial capital USDT
  let btc = 0;
  let inPosition = false;

  // Backtesting loop
  for (let i = longPeriod - 1; i < closePrices.length; i++) {
    const currentPrice = closePrices[i];
    const shortMA = shortSMA[i - (longPeriod - 1)];
    const longMA = longSMA[i - (longPeriod - 1)];

    if (shortMA > longMA && !inPosition) {
      // Buy BTC
      btc = balance / currentPrice;
      balance = 0;
      inPosition = true;
      console.log(`BUY at ${currentPrice} USD`);
    } else if (shortMA < longMA && inPosition) {
      // Sell BTC
      balance = btc * currentPrice;
      btc = 0;
      inPosition = false;
      console.log(`SELL at ${currentPrice} USD`);
    }
  }

  console.log(`Final Balance: ${balance.toFixed(2)} USDT`);
}

(async () => {
  await backtest('BTCUSDT', '1h', 1000); // 1000 candles of 1 hour
})();