import React from "react";
import ReactDOM from "react-dom/client";
import MenuItems from "./Menuitems";

const HorecaMenu = ({ itemCategory }) => {
  return (
    <div data-testid="menuitems">
      {itemCategory?.itemCards?.map((item, index) => (
        <MenuItems key={index} menu={item?.card?.info} />
        //console.log(item)
      ))}
    </div>
  );
};

export default HorecaMenu;
