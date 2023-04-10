import React from "react";
import "../CSS/footer.css"
import logo_footer from "../assets/logo_f.png"
import { Link } from "react-router-dom";

const Footer=()=>{

return (

    <div id="footer_body">
        <div id="cr">
            <h5>CopyRight @ Little Lemon 2023</h5>
        </div>
        <div id="center_div">
        <div></div>
        <div>
        <ul className="ul_body">
            <li>
                <Link to="/" className="link_class_f">Home</Link>
            </li>
            <li>
            <Link to="/" className="link_class_f">About</Link>
            </li>
            <li>
            <Link to="/" className="link_class_f">Menu</Link>
            </li>
            </ul>

        </div>
        <div>
        <ul className="ul_body">
            <li>
            <Link to="/booking_table" className="link_class_f">Reservations</Link>
            </li>
            <li>
            <Link to="/" className="link_class_f">Order Online</Link>
            </li>
            <li>
            <Link to="/" className="link_class_f">Login</Link>
            </li>
        </ul>
        </div>
       </div>
       <div id="footer_div">
       <Link to="/" className="link_class_f">
       <img id="footer_img" src={logo_footer}/>
       </Link>
            
       </div>


    </div>
)

}

export default Footer;