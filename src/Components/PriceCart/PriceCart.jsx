import React from "react";

const PriceCart = ({ price }) => {
  return (
    <div className="bg-indigo-700 mt-4 rounded-md text-center p-5 my-3">
      <h2>{price.option}</h2>
      <h5>
        <span className="text-xl font-bold text-purple-700">{price.price}</span>
        /Mon
      </h5>
      <h2>Features:{}</h2>
      {
        price.features.map(feature=><li>{feature}</li>)
      }
    </div>
  );
};

export default PriceCart;
