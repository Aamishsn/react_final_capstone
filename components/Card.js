import React from "react";
import "../CSS/card.css"
const Card=(props)=>{
    return(
        <div id="card_grid">
                        <div>
                        <img src={props.image} id="card_img"/>
                        </div>
                        <div>
                            <span id="card_text1">{props.title}</span> <span id="card_text2">${props.price}</span>
                        </div>
                        <div>
                            <p id="card_text3">{props.des}</p>
                        </div>
                        <div>
                            <p id="card_text4">Order a delivery </p>
                        </div>
                    </div>
    )
}

export default Card