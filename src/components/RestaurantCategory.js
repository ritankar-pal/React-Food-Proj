import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) =>{

    const { data, showItems, index, showIndex } = props;
    // console.log(data);

    useEffect(() => {
        showIndex(0);
    }, []);

    const menuShowHandler = () =>{
        showIndex(index);
    }


    return(
        <div>
            <div className="w-6/12 mx-auto my-4 p-2 bg-gray-50 shadow-md cursor-pointer">
                <div className="flex align-middle justify-between" onClick={menuShowHandler}>
                    <h2 className="font-bold">{data.title} <span>({data.itemCards.length})</span></h2>
                    {showItems ? <span className="">🔼</span> : <span className="">🔽</span>}
                </div>

                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;