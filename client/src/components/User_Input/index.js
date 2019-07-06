import React from "react";
import "./style.css";

function User_Input(props) {
    return (

        <>
            <div className="row">
                <div class="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Keyword</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
            </div>

            <div className="row">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Search-Type</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">News</option>
                        <option value="2">Twitter</option>
                        <option value="3">Recipes</option>
                    </select>
                </div>
            </div>
            <div className="row search-button">
                <button>Search</button>
            </div>
        </>




    );
}

export default User_Input;
