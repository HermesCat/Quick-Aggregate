import React from "react";
import User_Buttons from "../User_Buttons";
import User_Input from "../User_Input";
import "./style.css";



function Search_Box() {
    return (
        <div id="accordion">
            <div class="card" id="accordion1">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div className="row">
                                <h3>My Searches</h3>
                            </div>
                        </button>
                    </h5>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion1">
                    <div class="card-body">
                        <User_Buttons />
                    </div>
                </div>
            </div>
            <div class="card" id="accordion2">
                <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <div className="row">
                                <h3>New Search</h3>
                            </div>
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion2">
                    <div class="card-body">
                        < User_Input />
                    </div>
                </div>
            </div>
            <div class="card d-lg-none" id="accordion3">
                <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <div className="row">
                                <h3>Search Results</h3>
                            </div>
                        </button>
                    </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion3">
                    <div class="card-body">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search_Box;