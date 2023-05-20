import { ITEM_IMG_CDN_URL } from "../config";
import React from "react";
import ReactDOM from "react-dom/client";
import { IoStar } from "react-icons/io5";
import { VscCircleFilled } from "react-icons/vsc";

const HorecaInfo = (resinfo) => {
  return (
    <div className="flex bg-slate-100 w-full">
      <div className="ml-5 mt-2 mb-2">
        <img
          src={ITEM_IMG_CDN_URL + resinfo?.cloudinaryImageId}
          alt={resinfo?.name}
          className="h-[150px] w-[200px]"
        />
      </div>
      <div className="ml-[75px] mt-3">
        <div className="font-bold text-3xl">{resinfo?.name}</div>
        <div className="font-semibold text-lg">{resinfo?.areaName}</div>
        <div className="font-light text-base">
          {resinfo?.cuisines?.join(",")}
        </div>
        <div className="flex justify-between">
          <div
            style={
              resinfo?.avgRatingString < 4
                ? { backgroundColor: "var(--light-red)" }
                : resinfo?.avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { backgroundColor: "orange", color: "black" }
            }
            className="flex justify-between m-1 "
          >
            <span className="m-1">
              <IoStar />
            </span>
            <span className="m-1 ">{resinfo?.avgRatingString}</span>
          </div>
          <div className="m-2">
            <VscCircleFilled />
          </div>
          <div className="m-2">{resinfo?.costForTwoMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default HorecaInfo;
