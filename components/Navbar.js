import React from "react";
import "../CSS/nav.css"
import logo from "../assets/logo.png"

const Navbar=()=>{

return (
    <>
    <div id="nav_body">

        <img id="img_body" src={logo} />

        <ul id="nav_body_ul">
            <li>
                Home
            </li>
            <li>
               About
            </li>
            <li>
                Menu
            </li>
            <li>
                Reservations
            </li>
            <li>
                Order Online
            </li>
            <li>
                Login
            </li>
        </ul>
        </div>


    </>
)

}

export default Navbar;