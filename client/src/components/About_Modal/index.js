import React from "react";
import "./style.css";

function About_Modal() {
    return (

        <>
            <div className="row">
                <div type="button" className="modal-image about1" data-toggle="modal" data-target="#exampleModal">
                    About Quick Aggregate
            </div>
                <div type="button" className="modal-image about2" data-toggle="modal" data-target="#exampleModal">
                    Your Keywords
            </div>
                <div type="button" className="modal-image about3" data-toggle="modal" data-target="#exampleModal">
                    Our APIs
            </div>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
      </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default About_Modal;
