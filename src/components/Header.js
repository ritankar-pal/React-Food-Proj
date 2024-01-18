import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Header = () =>{

    const [register, setRegister] = useState("LOGIN");

    const loginHandler = () =>{
        register === "LOGIN" ? setRegister("LOGOUT") : setRegister("LOGIN");
    }

    return(
        <div className="flex justify-between p-2 bg-orange-400 shadow-orange-400">
            <div className="logo">
                <img src={LOGO_URL} alt="foodLogo" className="w-24"/>
            </div>

            <div>
                <ul className="flex m-4 content-center font-semibold text-lg">
                    <li className="p-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/grocery">Groceries</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button className="p-4" onClick={loginHandler}>{register}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;