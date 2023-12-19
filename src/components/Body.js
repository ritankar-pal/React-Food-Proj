import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{

    const[listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() =>{
        fetchData();
    }, []);


    const fetchData = async () =>{

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=tru");

        const json = await data.json();
        console.log(json);

        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }



    const filterClickHandler = () =>{
        const filteredList = listOfRestaurants.filter(elem =>(
            elem.info.avgRating > 4.3
        ));
        setListOfRestaurants(filteredList);
    }

    if(listOfRestaurants.length === 0){
        return <Shimmer/>
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