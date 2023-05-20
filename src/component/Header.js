import { Link } from "react-router-dom";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import cancel from "../images/cancel.svg";
import menu from "../images/menu.svg";

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
            data-testid="logo" // this is for testing image is loaded or not
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
  let [open, setopen] = useState(false);
  //react redux - cart is subscribing to the cart slice of the store
  const totalItemCount = useSelector((store) => store.cart.totalItemCount);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(totalItemCount, cartItems);

  return (
    <div className="flex min-w-[400px] max-w-full justify-between bg-pink-50 shadow-lg sm:bg-pink-50 md:bg-pink-50 sticky top-0 z-[100]">
      <Title />
      <div>
        {open && (
          <img
            src={cancel}
            className="lg:hidden  fixed right-5 cursor-pointer z-20 top-6 h-[20px] w-[20px]"
            onClick={() => setopen(!open)}
          />
        )}
        {!open && (
          <img
            src={menu}
            className="lg:hidden  fixed right-5 cursor-pointer z-20 top-6 h-[20px] w-[20px]"
            onClick={() => setopen(!open)}
          />
        )}

        <ul
          className={`bg-white my-3 lg:my-0  sm:bg-white md:bg-white lg:bg-pink-50  lg:flex  lg:pl-10 pr-28 lg:static fixed duration-500 ease-linear py-5 cursor-pointer top-0 lg:h-auto h-screen z-10 ${
            !open ? "right-[-100%] " : "right-0"
          }`}
        >
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
            <Link to="/cart" data-testid="cart-item">
              Cart - {totalItemCount} items
            </Link>
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

/*
 <nav className="flex items-center justify-between pt-5">
         <img src={open ? "./src/assets/icon-close.svg" : "./src/assets/icon-hamburger.svg"} className="md:hidden  fixed right-5 cursor-pointer z-20 top-6" onClick={() => setopen(!open)} />
         <img src="./src/assets/logo.svg" alt="logo" className="w-10 ml-7" />
         <ul className={`bg-[#ffffff14] backdrop-blur-md  md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${!open ? 'right-[-100%] ' : 'right-0'}`}>
            {
               menus.map((menu, index) => (
                  <li key={index} className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
                     <a className="text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3">
                        <span className="font-bold mr-1.5">0{index}</span>  {menu.name}</a>
                  </li>
               ))
            }
         </ul>
      </nav>

*/
