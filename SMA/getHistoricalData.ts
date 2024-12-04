import axios from "axios";

const BINANCE_API_URL = 'https://api.binance.com';

export default async function getHistoricalData(symbol: string, interval: string, limit: number) {
  const endpoint = `${BINANCE_API_URL}/api/v3/klines`;
  const params = {
    symbol,
    interval,
    limit,
  };

  const response = await axios.get(endpoint, { params });
  return response.data.map((entry: any) => ({
    openTime: entry[0],
    open: parseFloat(entry[1]),
    high: parseFloat(entry[2]),
    low: parseFloat(entry[3]),
    close: parseFloat(entry[4]),
    volume: parseFloat(entry[5]),
    closeTime: entry[6],
  }));
}