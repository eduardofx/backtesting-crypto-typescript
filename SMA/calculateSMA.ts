export default function calculateSMA(data: number[], window: number): number[] {
  const sma = [];
  for (let i = window - 1; i < data.length; i++) {
    const sum = data.slice(i - window + 1, i + 1).reduce((acc, val) => acc + val, 0);
    sma.push(sum / window);
  }
  return sma;
}