import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = () => {

    const { resId } = useParams();
    // console.log(resId);

    //Using our Custom Hook: useRestaurantMenu() = for the logic of Data fetching:
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/>

    //destructuring the restaurant info:
    const { name, cuisines, city, costForTwoMessage, avgRating } = resInfo?.cards[0]?.card?.card?.info;

    //destructuring the food items:
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(itemCards);

    const allMenus = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const categories = allMenus.filter(elem => elem.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);

    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-xl">{name}</h1>
            <h3 className="resHeading" style={{color: "grey"}}>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h3 style={{marginBottom: "10px"}}>Menu</h3>
            <ul>
                
                {
                    categories.map(elem => (
                        <li key={elem?.card?.card?.title}>
                            <RestaurantCategory data={elem?.card?.card}/>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default RestaurantMenu;