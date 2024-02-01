import ItemList from "./ItemList";

const RestaurantCategory = (props) =>{

    console.log(props);
    const { data } = props;
    // console.log(data);

    return(
        <div>
            <div className="w-7/12 mx-auto my-4 p-2 bg-gray-50 shadow-md cursor-pointer">
                <div className="flex align-middle justify-between">
                    <h2 className="font-bold">{data.title} <span>({data.itemCards.length})</span></h2>
                    <span className="">🔽</span>
                </div>

                <ItemList items={data.itemCards}/>
            </div>


        </div>
    )
}

export default RestaurantCategory;