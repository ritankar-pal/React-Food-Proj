import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";



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

    const allMenuItems = allMenus.filter(elem => elem.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(allMenuItems);

    return(
        <div className="menu-container">
            <h1>{name}</h1>
            <h3 className="resHeading" style={{color: "grey"}}>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h3 style={{marginBottom: "10px"}}>Menu</h3>
            <ul>
                {
                    itemCards.map(elem => (
                        <li key={elem.card.info.id} style={{listStyle: "none"}}>
                            <h3>{elem.card.info.name}</h3>
                            <h4 style={{fontWeight: "normal"}}>Rs {elem.card.info.price / 100}</h4>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;