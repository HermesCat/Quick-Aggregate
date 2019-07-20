import React from "react";
import "./style.css";
import "../../utils/API";

function Formatted_Buttons(props) {
  return (
    <div>
      <button
        className={`user-keyword ${props.api}-buttons`}
        id={props.search}
        onClick={() => props.saveBtnSearch(props.api, props.search)}
      >
        {props.search}
        
      </button>
      <span className="button-delete" onClick={() => props.deleteSearchButton(props.id)}>
          x
        </span>
    </div>
  );
}

export default Formatted_Buttons;
