import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import HorecaInfo from "./HorecaInfo";
import { MenuShimmer } from "./ShimmerUI";
import React from "react";
import ReactDOM from "react-dom/client";
import HorecaCategory from "./HorecaCategory";

const RestaurantMenuDetails = () => {
  const { restaurantId } = useParams();

  const resMenuData = useRestaurantData(restaurantId);

  return !resMenuData ? (
    <MenuShimmer />
  ) : (
    <div className="ResDetailsContainer">
      <HorecaInfo {...resMenuData.resinfo} />
      <HorecaCategory restaurantMenu={resMenuData?.menuData} />
    </div>
  );
};

export default RestaurantMenuDetails;
