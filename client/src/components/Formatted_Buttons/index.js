import React from "react";
import "./style.css";
import "../../utils/API";

function Formatted_Buttons(props) {
  return (
    <div>
      <button
        className="user-keyword"
        id={props.search}
        onClick={() => props.saveBtnSearch(props.api, props.search)}
      >
        {props.search}
        <span className="button-delete" onClick={props.deleteSearchButton}>
          x
        </span>
      </button>
    </div>
  );
}

export default Formatted_Buttons;
