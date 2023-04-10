import React from "react";
import "../CSS/table.css"
import BookingForm from "./BookingForm";

const BookingPage=()=>{

return (

    <div id="table_main">
        <div>
            <h1 id="table_text1">Reserve a Table</h1>
        
            <BookingForm />
        </div>
    </div>
)

}

export default BookingPage;