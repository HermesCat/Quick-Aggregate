import React from "react";
import "./style.css";
import "../../utils/API";

function Formatted_Buttons(props) {
    // console.log(props)
    return (
       <div className="button">
            <button
            onClick={() => props.saveBtnSearch(props.api, props.search)}
            >
            {props.search}
            </button>
       </div>
    );
}

export default Formatted_Buttons;
