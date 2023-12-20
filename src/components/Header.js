import { useState } from "react";
import { LOGO_URL } from "../utils/constants";


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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={loginHandler}>{register}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;