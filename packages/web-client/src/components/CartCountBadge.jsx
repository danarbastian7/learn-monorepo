import React from "react";

const CartCountBadge = ({ size }) => {
  //   const size = "20px";
  return (
    <div
      className={`w-6 h-6 rounded-full absolute inline-flex items-center justify-center text-white text-xl ${size}  -right-3 top-0 bg-red-600`}
    >
      0
    </div>
  );
};

export default CartCountBadge;
