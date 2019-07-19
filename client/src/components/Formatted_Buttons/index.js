import React from "react";
import "./style.css";

function Formatted_Buttons(props) {
    console.log(props)
    return (
        <div className="button">
            <button className="user-keyword">{props.search}</button>
        </div>
    );
}

export default Formatted_Buttons;
