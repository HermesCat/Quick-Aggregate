import React from "react";
import "./style.css";

function User_Buttons(props) {
    return (

        <>
            <div className="row" id="search_button_info">
                <p>Your saved searches are stored here as buttons.</p>
            </div>
            <div className="row" id="search_button_row">
                <h5>Your Keywords: </h5>
            </div>

        </>

    );
}

export default User_Buttons;
