import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "./ThemeContext"; // if you're using a theme context

const Carousel = () => {
  const { theme } = useContext(ThemeContext);

  // We'll fetch coins in USD:
  const currency = "USD";
  const symbol = "$";

  // State for fetched coins
  const [coins, setCoins] = useState([]);

  // Fetch coins from CoinGecko
  const fetchCoins = async () => {
    try {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: currency,
            order: "market_cap_desc",
            per_page: 10, // get 10 coins
            page: 1,
            sparkline: false,
            price_change_percentage: "24h",
          },
        }
      );
      setCoins(data);
    } catch (error) {
      console.error("Error fetching coins:", error);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div
      className={`py-10 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-blue-500">
          Market Overview
        </h2>

        {/* Coins Container */}
        <div className="flex flex-wrap gap-6 justify-center">
          {coins.map((coin) => {
            const profit = coin.price_change_percentage_24h >= 0;

            return (
              <div
                key={coin.id}
                className={`rounded-lg shadow-md p-4 w-44 text-center ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >

                { <img
                     src={coin.image}
                     alt={coin.name}
                     className="h-10 w-10 mb-2 mx-auto"
                   /> }

                {/* Coin Name + Symbol */}
                <div className="text-lg font-bold mb-2">
                  {coin.name} ({coin.symbol.toUpperCase()})
                </div>

                {/* Price */}
                <div className="text-2xl font-semibold">
                  {symbol}
                  {coin.current_price.toLocaleString()}
                </div>

                {/* 24h Change */}
                <div
                  className={`font-semibold ${
                    profit ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {profit && "+"}
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
