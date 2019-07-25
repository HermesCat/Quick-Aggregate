import React from "react";
import "./style.css";

function User_Buttons(props) {
  return (
    <>
      <div className="row" id="search_button_info">
        <p>Your saved searches are stored here as buttons.</p>
      </div>
      <div className="row" id="search_button_row">
        <div className="col-9">
          <h4>Your Keywords: </h4>
        </div>
        <div className="col-3 col-xs-8-push">
          <p
            id="edit_button_click"
            onClick={props.handleEdit}
            className="edit_button_list"
          >
            Edit Buttons
          </p>
        </div>
        <div className="row button_array">{props.children}</div>
      </div>
    </>
  );
}

export default User_Buttons;
