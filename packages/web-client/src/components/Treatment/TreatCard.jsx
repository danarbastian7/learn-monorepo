import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdCall } from "react-icons/md";
import * as Icon from "react-icons";
const TreatCard = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-gray-300 w-[50px] h-[50px] text-accentDark text-[24px] grid place-items-center rounded-full">
        {/* {icon} */}
        <Icon.icon />
      </div>
      <div>
        <h3 className="text-accent font-medium text-xl">{title}</h3>
        <p className="text-gray-500 text-[14px]">Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};

export default TreatCard;
