import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) =>{

    const { resData } = props;
    // console.log(resData);

    const {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo} = resData?.info;
    const { deliveryTime } = resData?.info.sla;

    return(
        <div className="res-card">
            <img src={CDN_URL + cloudinaryImageId} style={{width: "230px"}}></img>
            <h4 className="res-name">{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>ETA: {deliveryTime} MINS</h4>
        </div>
    )
}

export default RestaurantCard;