import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/Redux/cartslice";
import EmptyCart from "./EmptyCart";

import { addItem, removeItem } from "../utils/Redux/cartslice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return Object.values(cartItems).length > 0 ? (
    <div className="flex mt-5 mx-6 p-20 justify-center items-center sm:p-0 xsm:p-0 mob:p-0 sm:flex-col xsm:flex-col mob:flex-col">
      <div className="lg:w-[60%] md:w-[60%] xl:w-[60%]">
        <div className="bg-white drop-shadow-md flex-col p-6 min-w-[350px] max-w-[450px] m-2">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-lg mt-2.5 text-title font-bold ">Cart Items</h1>
            <button
              className="w-[80px] h-[24px]  mt-2.5 text-base rounded-md bg-green-600 text-white"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          </div>
          {Object.values(cartItems).map((item) => {
            return (
              <div className="my-3" key={item.id}>
                <div className="flex items-center mt-2">
                  <p className="w-48 text-sm">{item?.name}</p>
                  <div className="px-5">
                    <div className="bg-white  flex justify-evenly items-center w-[85px] h-[30px] ml-2 mr-2 mt-1 text-gray-count outline-none border border-gray ">
                      <button
                        className="text-xl font-semibold text-green-700 "
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        {" "}
                        -{" "}
                      </button>
                      <span className="text-base text-green-700">
                        {item.quantity}
                      </span>
                      <button
                        className="text-xl font-semibold text-green-700 "
                        onClick={() => dispatch(addItem(item))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="ml-10 w-48 text-sm">
                    ₹ {Math.round((item?.price / 100) * item.quantity)}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="border-t-2 border-t-gray-900 flex justify-between">
            <p className="py-3 font-semibold text-xl ">Total Payment </p>
            <p className="py-3 font-semibold text-xl mr-12">
              ₹{" "}
              {Object.values(cartItems)
                .map((item) => (item.price / 100) * item.quantity)
                .reduce((acc, curr) => Math.round(acc + curr), 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container mx-auto">
      <EmptyCart
        text={"Your cart is empty ! "}
        btnText={"SEE RESTAURANTS NEAR YOU"}
      />
    </div>
  );
};

export default Cart;
