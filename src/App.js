import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";


//Lazy Loading:
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () =>{

    const [userName, setUserName] = useState("Default User");

    useEffect(() =>{
        //Make an API call: 
        const data = {
            name: "Ritankar Pal"
        }

        setUserName(data.name);

    }, []);


    return (
        <UserContext.Provider value={{loggedInUser: userName}}>
            <div>
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
    )
}


//Setting the Router Configuration:
const appRouter = createBrowserRouter([

    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },

            // {
            //     path: "/about",
            //     element: <About/>
            // },
        
            {
                path: "/contact",
                element: <Contact/>
            },

            {
                path: "/grocery",
                element: (
                    <Suspense>
                        <Grocery/>
                    </Suspense>
                )
            },
            
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);