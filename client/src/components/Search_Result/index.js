import React from "react";
import "./style.css";

function Search_Result() {
    return (

        <>
            <div id="accordion">
                <div class="card" id="accordion4">
                    <div class="card-header" id="heading4">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                                <h3>Search Results</h3>
                            </button>
                        </h5>
                    </div>

                    <div id="collapse4" class="collapse show" aria-labelledby="heading4" data-parent="#accordion4">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Search_Result;