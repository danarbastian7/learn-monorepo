import React from "react";

const CategoryCard = ({ img, name, count }) => {
  return (
    <div className="border border-gray-20 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg cursor-pointer">
      <div className="flex justify-between items-center p-6">
        <div className="space-y-4">
          <h3 className="font-medium text-xl">{name}</h3>
          <p className="text-gray-500">{count} Products</p>
        </div>
        <img
          src={img}
          loading="lazy"
          alt={name}
          className="w-[100px] h-[100px] border-red-200 border rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
