import HorecaMenu from "./HorecaMenu";
import React from "react";
import ReactDOM  from "react-dom/client";

const HorecaCategory = ({restaurantMenu})=>{
    return(
        <div>
            {restaurantMenu?.map((item,index)=>(
                <HorecaMenu itemCategory={item} key={index} />
                // console.log(item)
            ))}
        </div>
    )
}

export default HorecaCategory;