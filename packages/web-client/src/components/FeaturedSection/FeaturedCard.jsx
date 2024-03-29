import React from "react";
import { useToast } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";

const FeaturedCard = ({ img, name, price }) => {
  const toast = useToast();

  return (
    <div className="border border-gray-200 hover:scale-105 transition-transform rounded-lg relative">
      <img src={img} alt={name} loading="lazy" />
      <div className="space-y-2 relative p-4">
        <div className="text-yellow-400 flex gap-[20px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
        <h3 className="font-medium">{name}</h3>
        <h3 className="text-2xl font-medium text-red-600">{price}</h3>
        <button className="absolute  bg-accent text-white text-[28px] w-[50px] rounded-full grid place-items-center cursor-pointer">
          <TiShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default FeaturedCard;
