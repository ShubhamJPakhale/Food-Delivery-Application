import { restaurantdata, swiggy_api_URL } from "../config";
import Restaurantcard from "./Restaurantcard"; // This is default export
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react"; // This is named export
import Shimmer from "./ShimmerUI";
import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

//restaurant={restaurantdata[0]}

// This is used to filter the restaurant based on the user search input
function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
  return filterData;
}

// This consisit of all card for restaurant to show on the ui with resturantcard component
const RestaurantList = () => {
  const [searchTxt, setSearchTxt] = useState(""); //for storing entered text in to searchTxt variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  //const [searchClicked, setSearchClicked] = useState("false"); //for checking if search buttin is clicked or not
  //onClick={() => { if (searchClicked === "false") { setSearchClicked("true") } else { setSearchClicked("false") } }}

  // useEffect is used to get the data from api asychrously in react and it rerender when dependency array is true
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const apidata = await fetch(swiggy_api_URL);
      const jsonapidata = await apidata.json();
      // updated state variable restaurants with Swiggy API data
      setAllRestaurants(jsonapidata?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(jsonapidata?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  //new code for showing already restaurant data for reducing server time while loading
  if (allRestaurants && filteredRestaurants === null) {
    setAllRestaurants(restaurantdata);
    setFilteredRestaurants(restaurantdata);
  }

  // This searchData function is used to show the search text filtered data if not then it will show error to user
  function searchData(searchTxt, restaurants) {
    if (searchTxt !== "") {
      const datanew = filterData(searchTxt, restaurants);
      setFilteredRestaurants(datanew);
      setErrorMessage("");
      if (datanew.length === 0) {
        setErrorMessage(
          "No Restaurant found with this name... please try another name for searching restaurant !!!"
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  }

  // check whether user is connected to internet or not
  const online = useOnline();

  if (online === false) {
    return (
      <>
        <h1 className="text-3xl font-medium align-middle text-center text-amber-500 m-5">
          You are offline... please check your internet connection...
        </h1>
      </>
    );
  }

  if (!allRestaurants) return null;

  //if(filteredRestaurants?.length ===0) return <h1>No restaurant found !!</h1>

  return (
    <>
      <div className="flex justify-center py-4 bg-pink-50 m-2">
        <input
          type={"textbox"}
          placeholder="Search restaurant and foods"
          className="border-solid border-1 border-black w-80 rounded-lg pl-3"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
          data-testid="seach-input"
        ></input>
        {/* <div className="searchicon"><AiOutlineSearch/></div> */}
        <button
          className="ml-3 bg-blue-500 p-1 text-white rounded-xl"
          onClick={() => {
            searchData(searchTxt, allRestaurants);
          }}
          data-testid="searchbtn"
        >
          Search
        </button>
      </div>

      {/* this below code is used for showing the all restaurant card in the ui either it is all restaurant or filtered search restaurant */}
      {/* <h1>{searchTxt}</h1> */}

      {/* This below error message is visible when search text not maches any retaurant name in all restaurants  */}
      {errorMessage && <div className="error">{errorMessage}</div>}

      {/* This below will show cards when filtered restaurant else it will show shimmer ui initially till api call happens */}

      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div
          className="flex flex-wrap items-center justify-center m-[5px]"
          data-testid="res_list"
        >
          {filteredRestaurants.map((restaurantfilter) => {
            return (
              <Link
                to={"/restaurant/" + restaurantfilter.data.id}
                key={restaurantfilter.data.id}
              >
                <Restaurantcard
                  key={restaurantfilter.data.id}
                  {...restaurantfilter.data}
                />
              </Link>
            );
          })}
          {/* <Restaurantcard {...restaurantdata[0].data} /> */}
        </div>
      )}
    </>
  );
};

export default RestaurantList;
