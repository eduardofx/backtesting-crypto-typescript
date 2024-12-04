import calculateVPVR from "./calculateVPVR";
import getHistoricalData from "./getHistoricalData";

async function backtestVPVR(symbol: string, interval: string, limit: number, binSize: number) {
  const data = await getHistoricalData(symbol, interval, limit);
  const vpvr = calculateVPVR(data, binSize);

  const highVolumeNodes = vpvr.slice(0, 5); // Top 5 high volume
  console.log('Top Volume Nodes:', highVolumeNodes);

  let balance = 1000; // The initial capital in USDT
  let btc = 0;
  let inPosition = false;

  for (let i = 0; i < data.length; i++) {
    const currentPrice = data[i].close;

    // Verify support of VPVR
    const isNearSupport = highVolumeNodes.some(
      ([level]) => Math.abs(currentPrice - parseFloat(level)) <= binSize * 0.5
    );

    if (isNearSupport && !inPosition) {
      // Buy BTC
      btc = balance / currentPrice;
      balance = 0;
      inPosition = true;
      console.log(`BUY at ${currentPrice} USD`);
    } else if (!isNearSupport && inPosition) {
      // Sell BTC
      balance = btc * currentPrice;
      btc = 0;
      inPosition = false;
      console.log(`SELL at ${currentPrice} USD`);
    }
  }

  console.log(`Final Balance: ${balance.toFixed(2)} USDT`);
}

// Execute  backtest
(async () => {
  const symbol = 'BTCUSDT';
  const interval = '1h';
  const limit = 800; // Number of candles to analyse
  const binSize = 100; // Bin Size

  await backtestVPVR(symbol, interval, limit, binSize);
})();