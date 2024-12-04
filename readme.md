
# 📊 Crypto Backtesting Tool

A powerful and flexible crypto backtesting platform built with TypeScript, designed to help you test and optimize trading strategies with real market data. This project uses the Binance API to fetch historical data and supports two backtesting methods: Simple Moving Average (SMA) and Volume Profile Visible Range (VPVR).

## 🌟 Features

 • Two Backtesting Methods:
 • SMA (Simple Moving Average): Test strategies using moving average crossovers.
 • VPVR (Volume Profile Visible Range): Analyze strategies based on volume distribution.
 • Binance Integration: Fetch real-time and historical market data directly from the Binance API.
 • TypeScript Powered: Ensure reliability with a strongly typed and maintainable codebase.
 • Performance Metrics: Get detailed reports on profitability, risk, and strategy efficiency.
 • Customizable Parameters: Adjust strategy configurations for maximum flexibility.

## 🚀 Getting Started

Prerequisites

 • Node.js: Version 18.18 or later.

Installation

### 1. Clone the repository

```
git clone <https://github.com/eduardofx/backtesting-crypto-typescript>  
cd backtesting-crypto-typescript
````

### 2. Install dependencies

    npm install  

### 3. Install ts-node-dev and typescript to execute

    npm i -g typescript
    npm i -g ts-node-dev

### 4. Run the project

    Run VPVR
        • npm run start:sma
    RUN SMA
        • npm run start:vpvr

### ⚙️ Configuration

You can customize the backtesting parameters in the index.ts file:

 • SMA

  ```
  const shortPeriod = 7;
  const longPeriod = 25;
  ```

 • VPVR

  ```
  const limit = 800; // Number of candles to analyse
  const binSize = 100; // Bin Size
  ```

## 📈 Backtesting Methods

### 1. SMA (Simple Moving Average)

A classic strategy where a short-term moving average crossing above or below a long-term moving average generates buy or sell signals.

### 2. VPVR (Volume Profile Visible Range)

This method analyzes volume distribution within a visible price range, identifying key levels of support and resistance for optimized trading strategies.

## 📊 Example Results

After running the backtesting, you will receive detailed reports, including:
 • Total Return
 • Win Rate
 • Maximum Drawdown
 • Risk-Adjusted Returns

🛡️ Disclaimer

This tool is for educational and research purposes only. Do not use it for live trading without extensive testing. Cryptocurrency trading involves significant risk, and past performance does not guarantee future results.
