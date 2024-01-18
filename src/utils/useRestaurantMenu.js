import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";


const useRestaurantMenu = (resId) =>{

    const [resInfo, setResinfo] = useState(null);

    const [] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();

        // console.log(json);

        setResinfo(json.data);
    }

    return resInfo;

};

export default useRestaurantMenu;