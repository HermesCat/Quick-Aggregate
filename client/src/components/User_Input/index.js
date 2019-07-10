import React from "react";
import "./style.css";



function User_Input() {



  return (
    <>

      <div className="row">
        <div class="input-group mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text"
              id="inputGroup-sizing-default"
            >
              Keyword
                </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>




    </>
  );
}


export default User_Input;
