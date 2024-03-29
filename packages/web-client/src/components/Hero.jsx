import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-5 relative">
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          <img
            className="w-full h-[100%] object-cover rounded-lg"
            src="/grocery2.jpg"
            loading="lazy"
            alt="grocery"
          />
          <div className="max-w-[450px] ml-8  max-sm:top-[15%] max-sm:-translate-y-100% -translate-y-[50%] top-[40%] absolute">
            <p className="text-2xl hidden sm:block">100% Fresh from Farmer</p>
            <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold">
              Nature for your healthy body
            </h2>
            <p className="text-gray-500 text-xl ">Starting at</p>
            <div className="space-x-5 flex">
              <div className="font-medium text-red-600 text-xl sm:text-2xl pb-4 sm:pb-0">
                Rp 1.000,-
              </div>
              <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-2 px-2 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer ">
                Shop Now <BsArrowRightCircleFill />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="/grocery3.jpg"
            loading="lazy"
            alt="grocery-man"
            className="h-full w-full object-cover rounded-lg"
          />
          <div className="max-w-[450px] sm:ml-16 md:top-[15%] max-sm:top-40% max-sm:-translate-y-[100%] translate-y-50% md:-translate-x-10 max-sm:translate-x-10 absolute ">
            <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold">
              Shipping Fee
            </h2>
            <p className="text-gray-500 text-xl ">Starting at</p>

            <div className="font-medium text-red-600 text-xl sm:text-2xl pb-4 sm:pb-0">
              Rp 500,-
            </div>
            {/* <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-2 px-2 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer ">
              Shop Now <BsArrowRightCircleFill />
            </div> */}
          </div>
        </div>
        <div className="">
          <img
            src="/grocery4.jpg"
            loading="lazy"
            alt="grocery-man"
            className="h-full w-full object-cover rounded-lg"
          />
          <div className="max-w-[250px] sm:ml-16 lg:top-45% md:top-[45%] -max-sm:top-[50] max-sm:-translate-y-[100%] translate-y-[60%] sm:space-y-2 -translate-x-10 max-sm:translate-x-10 absolute">
            <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold">
              Discount up to 30%
            </h2>

            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-2 px-2 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer ">
              Shop Now <BsArrowRightCircleFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
