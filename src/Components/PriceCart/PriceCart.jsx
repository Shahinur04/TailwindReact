import React from "react";
import Feature from "../Features/Feature";

const PriceCart = ({ price }) => {
  return (
    <div className="bg-indigo-700 mt-4 rounded-md text-center p-5 my-3 flex flex-col">
      <h2>{price.option}</h2>
      <h5>
        <span className="text-xl font-bold text-purple-700">{price.price}</span>
        /Mon
      </h5>
      <h2 className="text-white text-2xl">Features:{}</h2>
      
      {
        price.features.map((feature,idx)=><Feature 
        key={feature.idx} feature={feature}></Feature>)
      }
      <button className="hover:bg-fuchsia-700 w-full bg-teal-400 my-3 rounded-md text-white font-bold p-2 mt-auto">Buy Now</button>
    </div>
  );
};

export default PriceCart;
