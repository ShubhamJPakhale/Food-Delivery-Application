import { Link } from "react-router-dom";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

//redux
import { useSelector } from "react-redux";

//import { VscHome } from "react-icons/vsc";

//import logo from "../images/Food_Delivery.jpg";

// <></> => This is known as React.fragment which gives many jsx a single parent and wraps all code in to single div tag

// a tag is replaced with Link tag for avoid rerendering of whole SPA (single page application)

const Title = () => {
  return (
    <>
      {/* <h1 id="title" key="titlehead">Food Junction</h1> */}
      {/* <img src={logo} alt="Food Junction" width={50} height={50}></img> */}
      <div className="flex pl-3 pt-3">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPoqdY7-n5XF1HkFq8TY_TxLDq07EEj9vV_5j071NSat4H4K17LJVZCIiekkxgCyYQsaw&usqp=CAU"
            className="h-12 "
            alt="logo"
          />
        </Link>
        <Link to="/">
          <h1 className="pl-5 pt-3 hover:text-orange-500 font-bold text-xl">
            Food Junction
          </h1>
        </Link>
      </div>
    </>
  );
};

// write above code for styling in react for tags ->
// const styleobj={
//     backgroundColor : "Green",
// }

//style={styleobj} -> write this inside tag for styling

//--------------

//<div style={{backgroundColor : "red"}} ></div> -> this is known as inline styling in react

const Header = () => {
  //react redux - cart is subscribing to the cart slice of the store
  const totalItemCount = useSelector((store) => store.cart.totalItemCount);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(totalItemCount, cartItems);

  return (
    <div className="flex min-w-[400px] max-w-full justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50 sticky top-0 z-[100]">
      <Title />
      <div className="navitems">
        <ul className="flex py-5 cursor-pointer">
          <li className="px-3 hover:text-orange-500 text-lg font-normal">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 hover:text-orange-500 text-lg font-normal">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3 hover:text-orange-500 text-lg font-normal">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3 hover:text-orange-500 text-lg font-normal">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-3 hover:text-orange-500 text-lg font-normal">
            <Link to="/cart">Cart - {totalItemCount} items</Link>
          </li>
          <li className="px-3 hover:text-orange-500 text-lg font-normal">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
