import React, { useContext } from "react";
import Carousel from "./Carousel";
import { ThemeContext } from "./ThemeContext"; // Import ThemeContext
import CoinsTable from "./CoinsTable";
//import CoinPage from "./CoinPage";

function Banner() {
  const { theme } = useContext(ThemeContext); // Access theme from context

  return (
    <div
      className={`bg-cover bg-center bg-no-repeat py-16 transition-colors duration-300 ${
        theme === 'dark'
          ? "bg-gray-800 text-white"
          : "bg-gray-100 text-black"
      } overflow-hidden`}
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-white-500">
            Personal Crypto<span className={theme === 'dark' ? "text-white" : "text-black"}> Portfolio Tracker</span>
          </h2>
        </div>

        <div className="w-full flex justify-center items-center mb-6">
          <Carousel />
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <h3
            className={`${theme === 'dark' ? "text-gray-300" : "text-gray-700"} text-xl md:text-2xl capitalize font-montserrat`}
          >
            Connect Your Hardware Wallet, Binance, Coinbase, MetaMask, Trust Wallet, And Any Other Crypto Platforms To Cryptonize In Just A Few Clicks.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Banner;
