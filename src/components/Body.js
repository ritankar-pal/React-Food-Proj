import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () =>{

    const[listOfRestaurants, setListOfRestaurants] = useState(resList);


    const filterClickHandler = () =>{
        const filteredList = listOfRestaurants.filter(elem =>(
            elem.info.avgRating > 4.3
        ));
        setListOfRestaurants(filteredList);
    }

    return(
        <div className="body">

            <div className="filter">
                <button className="filter-btn" onClick={filterClickHandler}>Filter Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {
                    listOfRestaurants.map(elem => (
                        <RestaurantCard key={elem.info.id} resData={elem}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;