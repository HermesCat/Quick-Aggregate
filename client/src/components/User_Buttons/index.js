import React, {Component} from "react";
import "./style.css";
import Formatted_Buttons from '../Formatted_Buttons'



function User_Buttons(props) {
    return (
        <>
            <div className="row" id="search_button_info">
                <p>Your saved searches are stored here as buttons.</p>
            </div>
            <div className="row" id="search_button_row">
                <h4>Your Keywords: </h4>
                <div className="row button_array">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default User_Buttons;
