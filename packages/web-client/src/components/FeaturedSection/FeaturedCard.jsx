import React from "react";
import { useToast } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

const FeaturedCard = ({ img, name, price }) => {
  const toast = useToast();

  return (
    <div className="border border-gray-200 hover:scale-105 transition-transform rounded-lg relative">
      <img src={img} alt={name} />
      <div className="space-y-2 relative p-4">
        <div className="text-yellow-400 flex gap-[20px]">
          <AiFillStar />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
