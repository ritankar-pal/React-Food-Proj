import { useEffect, useState } from "react";


const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {

        //If the user is "offline" we'll update the status to false:
        window.addEventListener("offline", (event) => {
            setOnlineStatus(false);
        });
        
        //If the user is "online" we'll update the status to true:
        window.addEventListener("online", (event) => {
            setOnlineStatus(true);
        });
    }, []);

    return onlineStatus;

};

export default useOnlineStatus;
