import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PriceCart from "../PriceCart/PriceCart";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch('prices.json')
      .then((res) => res.json())
      .then((data => setPrices(data)));
  }, []);
  return (
    <div>
      <h2 className="text-4xl bg-emerald-300 text-center text-[#db2777]">
        Awesome affordable price
      </h2>
      <div className="grid grid-cols-3 gap-3">
      {
        prices.map(price=><PriceCart
        key={price.id} price={price}></PriceCart>)
      }
      </div>
    </div>
  );
};

export default PriceList;
