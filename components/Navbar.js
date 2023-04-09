import React from "react";
import "../CSS/nav.css"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Navbar=()=>{

return (
    <>
    <div id="nav_body">
        <div class="img_div">
        <Link to="/"><img id="img_body" src={logo} /></Link>
        
        </div>
        <div class="img_div">
        <ul id="nav_body_ul">
            <li>
                <Link to="/" className="link_class">Home</Link>
            </li>
            <li>
            <Link to="/" className="link_class">About</Link>
            </li>
            <li>
            <Link to="/" className="link_class">Menu</Link>
            </li>
            <li>
            <Link to="/table" className="link_class">Reservations</Link>
            </li>
            <li>
            <Link to="/" className="link_class">Order Online</Link>
            </li>
            <li>
            <Link to="/" className="link_class">Login</Link>
            </li>
        </ul>
        </div>
        </div>


    </>
)

}

export default Navbar;