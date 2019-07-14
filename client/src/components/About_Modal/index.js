import React from "react";
import "./style.css";

function About_Modal() {
    return (

        <>
            <div className="row">
                <div type="card" className="modal-image about1" data-toggle="modal" data-target="#modal1">
                    <div className=" wrapper image-hover">
                        <h4 className="modal-image-stripe">About Quick Aggregate</h4>
                    </div>
                </div>
                <div type="card" className="modal-image about2" data-toggle="modal" data-target="#modal2">
                    <div className=" wrapper image-hover">
                        <h4 className="modal-image-stripe">Your Keywords</h4>
                    </div>
                </div>
                <div type="card" className="modal-image about3" data-toggle="modal" data-target="#modal3">
                    <div className=" wrapper image-hover">
                        <h4 className="modal-image-stripe">Our</h4>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="modal1" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title main-title-modal" id="exampleModalLabel"><span className="highligher-modal">Quick</span>Aggregate</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            1
      </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="modal2" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title main-title-modal" id="exampleModalLabel"><span className="highligher-modal">Quick</span>Aggregate</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            2
      </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modal3" tabindex="-1" role="dialog" aria-labelledby="modal3" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title main-title-modal" id="exampleModalLabel"><span className="highligher-modal">Quick</span>Aggregate</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            3
      </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default About_Modal;
