import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const Header = () =>{

    const [register, setRegister] = useState("LOGIN");

    const { loggedInUser } = useContext(UserContext);
    // console.log(loggedInUser);


    const loginHandler = () =>{
        register === "LOGIN" ? setRegister("LOGOUT") : setRegister("LOGIN");
    }

    return(
        <div className="flex justify-between p-2 bg-orange-400 shadow-orange-400">
            <div className="logo w-1/12">
                <img src={LOGO_URL} alt="foodLogo" className="w-24"/>
            </div>

            <div>
                <ul className="flex m-4 content-center font-semibold text-lg w-11/12">
                    <li className="p-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="p-4">
                        {loggedInUser}
                    </li>
                    <li>
                        <button className="p-4" onClick={loginHandler}>{register}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;