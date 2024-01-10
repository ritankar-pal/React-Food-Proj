import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";



const RestaurantMenu = () => {

    const [resInfo, setResinfo] = useState(null);

    const { resId } = useParams();
    // console.log(resId);

    //load the specific Restaurant Details:
    useEffect(() => {
        fetchMenu();
    }, []);

    //684427
    const fetchMenu = async () =>{
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        // console.log(json);

        setResinfo(json.data);
    }   

    if(resInfo === null) return <Shimmer/>

    //destructuring the restaurant info:
    const { name, cuisines, city, costForTwoMessage, avgRating } = resInfo?.cards[0]?.card?.card?.info;

    //destructuring the food items:
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

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