import React from "react";
import { NavLink } from "react-router-dom";

const EmptyCart = ({ text, btnText }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        }
        alt=""
        className="h-[300px] w-[300px] m-3"
      />
      <h2 className="px-14 pt-8 my-4">{text}</h2>
      {btnText && (
        <NavLink to="/">
          <button className="bg-orange-500 px-4 py-2 text-blue-dark hover:drop-shadow-lg backdrop-blur">
            {btnText}
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default EmptyCart;
