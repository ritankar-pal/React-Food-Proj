
const ItemList = (props) =>{

    // console.log(props);
    const { items } = props;
    // console.log(items);

    return(
        <div>
            {
                items.map(elem => (
                    <div className="mx-2 my-6 text-left border-solid border-b-2 border-gray-300">
                        <div className="text-left"> 
                            <span className="font-medium">{elem?.card?.info?.name}</span>
                            <h3 className="italic text-gray-600">₹ <span>{elem?.card?.info?.price / 100}</span></h3>
                        </div>
                        <p className="my-2 text-xs text-gray-600 italic">{elem?.card?.info?.description}</p>
                    </div>
                ))
            }
        </div>
    )
};

export default ItemList;