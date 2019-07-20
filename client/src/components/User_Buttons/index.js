import React from "react";
import "./style.css";

// getElementById('button_delete_x').style.display='block';
const handleClick = () => {
    let button_delete_target = document.getElementById('button_delete_x');
    console.log(button_delete_target);
    button_delete_target.style = ("display: block")

}

function User_Buttons(props) {
    return (
        <>
            <div className="row" id="search_button_info">
                <p>Your saved searches are stored here as buttons.</p>
            </div>
            <div className="row" id="search_button_row">
                <div className="col-9"><h4>Your Keywords: </h4></div>
                <div className="col-3">
                    <p id="edit_button_click" onClick={() => handleClick()} className="edit_button_list">Edit Buttons</p>
                </div>
                <div className="row button_array">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default User_Buttons;
