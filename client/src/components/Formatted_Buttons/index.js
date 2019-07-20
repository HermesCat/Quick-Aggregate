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
<<<<<<< HEAD
        <span id="button_delete_x" className="button-delete" onClick={props.deleteSearchButton}>
=======
        
      </button>
      <span className="button-delete" onClick={() => props.deleteSearchButton(props.id)}>
>>>>>>> 52ac50f9269424f92cd7d5270733101478a3aab3
          x
        </span>
    </div>
  );
}

export default Formatted_Buttons;
