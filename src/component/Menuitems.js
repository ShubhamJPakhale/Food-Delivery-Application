import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ITEM_IMG_CDN_URL } from "../config";

//react-redux code
import { addItem, removeItem } from "../utils/Redux/cartslice";
import { useDispatch, useSelector } from "react-redux";

const Menuitems = ({ menu }) => {
  const { name, imageId, price, id } = menu;

  const dispatch = useDispatch();
  const [itemcount, setItemCount] = useState(0);

  const handleAddItem = (menuitem) => {
    dispatch(addItem(menuitem));
    setItemCount(itemcount + 1);
  };

  const handleRemoveItem = (id) => {
    let updateitemcount;
    dispatch(removeItem(id));
    updateitemcount = itemcount > 0 ? itemcount - 1 : 0;
    setItemCount(updateitemcount);
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex items-center justify-center pl-2 pr-2 m-6">
      <div>
        <div className="font-semibold text-lg w-[700px] m-2 ">{name}</div>
        <div className="font-light text-normal m-2">
          ₹ {Math.round(price / 100)}
        </div>
      </div>
      <div className="ml-5 mt-2 mb-2 w-[100px] h-[100px]">
        {imageId && (
          <img
            src={ITEM_IMG_CDN_URL + imageId}
            alt={name}
            loading="lazy"
            className="w-[100px] h-[100px] rounded-lg"
          />
        )}
        {/* below code for if imageid is not available then we are using hardcode image id for showing image in menuitems */}
        {!imageId && (
          <img
            src={ITEM_IMG_CDN_URL + "vclexhmfqsns1ltlhmvb"}
            alt={name}
            loading="lazy"
            className="w-[100px] h-[100px] rounded-lg"
          />
        )}

        <div className="bg-white flex justify-evenly items-center w-[85px] h-[30px] ml-2 mr-2 mt-1 text-gray-count outline-none border border-gray ">
          <button
            className="text-xl font-semibold text-green-700 "
            onClick={() => handleRemoveItem(id)}
          >
            {" "}
            -{" "}
          </button>
          <span className="text-base text-green-700">{itemcount}</span>
          <button
            className="text-xl font-semibold text-green-700 "
            onClick={() => handleAddItem(menu)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menuitems;
