import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () =>{

const [btnReact , setBtnReact] = useState("Login")

console.log("Header render")
console.log(btnReact);


useEffect(()=>{
       
})


    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL}className="logo"/>
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
                   <Link to="/contact-us">Contact Us</Link>
                   </li>
                    
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>btnReact === "Login" ? setBtnReact("Logout") : setBtnReact("Login")}>{btnReact}</button>
                </ul>
            </div>
        </div>
    )
}


export default Header;