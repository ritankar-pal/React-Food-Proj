import { CDN_URL } from "../utils/constants";


const ItemList = (props) =>{

    // console.log(props);
    const { items } = props;
    // console.log(items);

    return(
        <div>
            {
                items.map(elem => (
                    <div key={elem?.card?.info?.id} className="mx-2 my-6 border-solid border-b-2 border-gray-300">
                        <div className="flex justify-around align-middle">
                            <div className="text-left w-9/12"> 
                                <span className="font-medium">{elem?.card?.info?.name}</span>
                                <h3 className="italic text-gray-600">₹ <span>{elem?.card?.info?.price / 100}</span></h3>
                                <p className="my-2 text-xs text-gray-600 italic">{elem?.card?.info?.description}</p>
                            </div>
                            
                            <div className="w-3/12 relative">
                                <div className="absolute bottom-2 left-9">
                                    <button className="w-20 h-8 border border-green-200 rounded-md bg-white text-green-600 hover:bg-green-50">Add+</button>
                                </div>
                                <img className="m-4 w-28 rounded-md" src={CDN_URL + elem?.card?.info?.imageId} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default ItemList;