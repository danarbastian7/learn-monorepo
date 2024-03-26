import React from "react";
import featured from "./Featured.json";
import FeaturedCard from "./FeaturedCard";

const FeaturedSectionFruits = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits & Vegetables</h3>
          <p className="text-gray-600 mt-2">
            Buy farm fresh fruits and vegetables online at the best prices
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Fruits</button>
          <button className="text-gray-600 hover:text-accent">
            Vegetables
          </button>
          <button className="text-gray-600 hover:text-accent">Bread</button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            src="/vegetablebag.jpg"
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
        {featured.map((res) => (
          <FeaturedCard
            key={res.id}
            img={res.img}
            name={res.name}
            price={res.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSectionFruits;
