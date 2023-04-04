import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data = setPrices(data)));
  }, []);
  return (
    <div>
      <h2 className="text-4xl bg-emerald-300 text-center text-[#db2777]">
        Awesome affordable price
      </h2>
    </div>
  );
};

export default PriceList;
