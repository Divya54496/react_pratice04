import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () =>{

const [btnReact , setBtnReact] = useState("Login")

console.log("Header render")
console.log(btnReact);


    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL}className="logo"/>
            </div>
            <div className="nav-items">
                <ul>

                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>btnReact === "Login" ? setBtnReact("Logout") : setBtnReact("Login")}>{btnReact}</button>
                </ul>
            </div>
        </div>
    )
}


export default Header;