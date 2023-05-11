import { useEffect, useState } from "react";
import { Restaurant_Menu_URL } from "../config";

// This is Custom hook which is used to get Restaurant Menu Details based on restaurant unique id 

const useRestaurantData = (restaurantId)=>{

    // restaurantmenu usestate is used to get the new data which is coming from api 
    // every time it will put new data in it once the id is changed - i.e. off load new data 
    const [restaurantmenu, setRestaurantmenu] = useState(null);

    // useEffect is used to get the data from api call
    useEffect(() => {
        getRestaurantsMenu();
    }, []);

    /* This method is using two nested for loop for fetching api data which is inside the api structure - 

    async function getRestaurantsMenu() {
        try {
            const apidata = await fetch(Restaurant_Menu_URL + id);
            //const apidata = await fetch("https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=6239");
            const jsonapidata = await apidata.json();
            // updated state variable restaurants with Swiggy API data
            setRestInfo(jsonapidata?.data?.cards[0]?.card?.card?.info)
            setRestaurantmenu(jsonapidata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
            console.log(jsonapidata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
            console.log(jsonapidata?.data?.cards[0]?.card?.card?.info?.name);


            // console.log(Object.values(restaurantmenu));
        } catch (error) {
            console.log(error);
        }
    }

    const items = [];
    const imageid=[];

    function Menudata() {
        const arrlength = restaurantmenu.length;
        console.log(arrlength);

        for (let i = 1; i < arrlength - 2; i++) {
            if (restaurantmenu[i]?.card?.card?.itemCards != undefined) {
                let mainitems = restaurantmenu[i]?.card?.card?.itemCards;
                let len = mainitems.length;
                for (let j = 1; j < len; j++) {
                    //let name=mainitems?.card?.info.name;
                    //console.log(mainitems[j]?.card?.info?.name);
                    let lidata = items.push(<li key={mainitems[j]?.card?.info?.id + j}>{mainitems[j]?.card?.info?.name}</li>,mainitems[j]?.card?.info?.imageId);
                    console.log(lidata);
                    let imageid=imageid.push(mainitems[j]?.card?.info?.imageId);
                }
            }
            else {
                console.log("element is undefined");
            }
        }
    }

    Menudata();
    */

    async function getRestaurantsMenu()
    {
        try{
            const restaurantmenunew =await fetch(Restaurant_Menu_URL + restaurantId);
            const jsonrestaurantmenu = await restaurantmenunew.json();

            const menuItemsList = jsonrestaurantmenu.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;
            const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
            const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

            const menuData = menuItemsList.map(item => {
                if((item.card.card["@type"] === itemCategory) || (item.card.card["@type"] === NestedItemCategory) ) {
                return item.card.card;
            }
            })

            const ResMenuData = {
                resinfo : jsonrestaurantmenu.data.cards[0].card.card.info,
                menuData : menuData.filter(value => value !== undefined)
            };

            setRestaurantmenu(ResMenuData);
            
        }
        catch(error)
        {
            console.log(error);
        }
    }

    // return restaurant menu data
    return restaurantmenu;
}

export default useRestaurantData;