import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdCall } from "react-icons/md";
import treatData from "./Treat.json";
import TreatCard from "./TreatCard";

const Treat = () => {
  return (
    <div className="container pt-16">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {treatData &&
          treatData.map((res) => (
            <TreatCard key={res.title} title={res.title} icon={res.icon} /> // Corrected component name
          ))}
      </div>
    </div>
  );
};

export default Treat;
