import restaurantdata from "../config.js";
import { IMG_URL_ID } from "../config.js";
import {IoStar} from "react-icons/io5";
import {VscCircleFilled} from "react-icons/vsc";
import { Link } from "react-router-dom";
import React from "react";
import ReactDOM  from "react-dom/client";


const Restaurantcard = ({name,cloudinaryImageId,cuisines,avgRating,costForTwoString})=>{
    //const {name,cloudinaryImageId,cuisines,avgRating,costForTwoString}=restaurant.data;

    // props.restaurantdata.data?.cloudinaryImageId

    //style in react 
    const styleObj={
        backgroundColor:"lightgreen",
    }

    const styleobjmore={
        backgroundColor:"coral",
    }
//border-1 border-solid border-grey shadow-lg	shadow-zinc-300

    return(
        
       <div className="w-[270px] p-[10px] m-[15px] hover:shadow-lg hover:shadow-slate-400">
        {/* <Link to="/restaurant/{key}"> */}
            <div className="top-0"><img className="w-[100%]" alt="Food image" src={IMG_URL_ID + cloudinaryImageId} /></div>
            <div>
                <div className="text-lg font-semibold pt-3">{name}</div>
                <div className="text-base font-light ">{cuisines.join(", ")}</div>
            </div>
            <div className="flex justify-between py-2">
                <div className="flex justify-between" style={avgRating < 4 ? styleObj : styleobjmore}>
                    <span className="p-1 "><IoStar /></span>
                    <span className="pr-1">{avgRating}</span>
                </div>
                <div className="py-1"><VscCircleFilled/></div>
                <div className="font-light">{costForTwoString}</div>
            </div>
            {/* </Link> */}
       </div>
    )
};

export default Restaurantcard;