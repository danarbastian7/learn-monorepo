import React from "react";

const Banner = () => {
  return (
    <div className="container pt-16 ">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 h-500px">
        <div className="overflow-hidden rounded-lg">
          <img
            src="/banner2.jpg"
            alt="banner1"
            className="hover:scale-105 transition-transform"
            loading="lazy"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="/banner3.jpg"
            alt="banner2"
            className="hover:scale-105 transition-transform"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
