import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() =>{
        fetchData();
    }, []);


    const fetchData = async () =>{

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);

        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const filterClickHandler = () =>{
        const filteredList = listOfRestaurants.filter(elem =>(
            elem.info.avgRating > 4.3
        ));
        setFilteredRestaurants(filteredList);
    }

    const searchHandler = () =>{
        // console.log(searchText);
        const filteredRestaurants = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText));
        setFilteredRestaurants(filteredRestaurants);
    }


    const searchChangeHandler = (e) =>{
        setSearchText(e.target.value);
    } 


    //conditional rendering::
    if(listOfRestaurants.length === 0){
        return <Shimmer/>
    }

    return(
        <div className="body">

            <div className="banner">
                <div className="filter">
                    <button className="filter-btn" onClick={filterClickHandler}>Filter Top Rated Restaurants</button>
                </div>

                <div className="search">
                    <input type="text" className="input-txt" value={searchText} onChange={searchChangeHandler}></input>
                    <button className="search-btn" onClick={searchHandler}>Search</button>
                </div>
            </div>

            <div className="res-container">
                {
                    filteredRestaurants.map(elem => (
                        <RestaurantCard key={elem.info.id} resData={elem}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;