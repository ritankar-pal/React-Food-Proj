import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) =>{

    console.log(props);
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } = resData?.info;
    const { deliveryTime } = resData?.info.sla;

    return(
        <div className="m-2 p-2 w-[250] text-left bg-slate-100 rounded-md hover:bg-slate-200">
            <img src={CDN_URL + cloudinaryImageId} className="rounded-sm"></img>
            <h4 className="res-name font-bold">{name}</h4>
            <h4 className="italic text-gray-500">{cuisines.join(", ")}</h4>
            <h4 className="text-gray-500">{avgRatingString} Stars</h4>
            <h4 className="text-gray-700">{costForTwo}</h4>
            <h4 className="text-gray-600">ETA: {deliveryTime} MINS</h4>
        </div>
    )
}


//Higher Order Component Of RestaurantCard:
export const withPromotedLabel = (RestaurantCard) =>{
    return (props) =>{
        // console.log(props);
        return(
            <div>
                <label className="absolute bg-black text-white rounded-sm m-2">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}


export default RestaurantCard;