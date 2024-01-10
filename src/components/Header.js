import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Header = () =>{

    const [register, setRegister] = useState("LOGIN");

    const loginHandler = () =>{
        register === "LOGIN" ? setRegister("LOGOUT") : setRegister("LOGIN");
    }

    return(
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} alt="foodLogo"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button className="login-btn" onClick={loginHandler}>{register}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;