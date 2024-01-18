import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    //Check Online Status from Custome Hook:
    const internetStatus = useOnlineStatus();

    useEffect(() =>{
        fetchData();
    }, []);


    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // console.log(listOfRestaurants);


    const fetchData = async () =>{

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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


    if(!internetStatus) return <h1 style={{"color": "red"}}>Looks Like You're Offline. Please Turn On your Internet Connectivity.</h1>

    //conditional rendering::
    if(listOfRestaurants.length === 0){
        return <Shimmer/>
    }

    return(
        <div className="p-2">

            <div className="flex justify-between my-4">
                <div className="filter p-2">
                    <button className="p-2 text-base font-medium bg-slate-200 rounded-md hover:bg-slate-300 " onClick={filterClickHandler}>Filter Top Rated Restaurants</button>
                </div>

                <div className="search p-2">
                    <input type="text" className="mr-2 p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-orange-500" value={searchText} onChange={searchChangeHandler}></input>
                    <button className="p-2 text-base font-medium bg-slate-200 rounded-md hover:bg-slate-300" onClick={searchHandler}>Search</button>
                </div>
            </div>

            <div className="m-4 p-4 res-container flex flex-wrap justify-between">
                {
                    filteredRestaurants.map(elem => (
                        <Link key={elem.info.id} to={"/restaurant/" + elem.info.id}>
                            {
                                elem.info.avgRating >= 4.5 ? <RestaurantCardPromoted resData={elem}/> : <RestaurantCard resData={elem}/>
                            }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;