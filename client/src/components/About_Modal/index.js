import React from "react";
import "./style.css";

function About_Modal() {
    return (

        <>
            <div className="modal fade aboutModal" tabindex="-1" role="dialog" id="aboutModal1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content aboutModalContent">
                        <div className="modal-header">
                            <h1 id="mainTitle">
                                <span className="highlighter">Syndir Match</span>
                            </h1>
                        </div>
                        <div className="modal-body">
                            <h2 id="infoHeading">General Info: </h2>
                            <p>
                                Simply put, filling out the survey enables the application to match you with people who, in essence,
                                think, speak or feel similarly to you, based on the responses to the questions.  It's a new take on
                                putting like minded people together, and weeding out the people who might not be preferable to you...
            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade aboutModal" tabindex="-1" role="dialog" id="aboutModal2">
                <div className="modal-dialog" role="document">
                    <div className="modal-content aboutModalContent">
                        <div className="modal-header">
                            <h1 id="mainTitle">
                                <span className="highlighter">Syndir Match</span>
                            </h1>
                        </div>
                        <div className="modal-body">
                            <h2 id="infoHeading">How Sentiment Scan Works: </h2>
                            <p>
                                In essence, it is the process of determining the emotional tone behind a series of words, used to gain an
              understanding of the the attitudes, opinions and emotions expressed within an online mention.</p>
                            <p>
                                All in all, sentiment analysis boils down to one thing: It's the process of analyzing online pieces of writing to
                                determine the emotional tone they carry. In simple words, sentiment analysis is used to find the author's attitude
              towards something. Tools categorize pieces of writing as positive, neutral, or negative.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade aboutModal" tabindex="-1" role="dialog" id="aboutModal3">
                <div className="modal-dialog" role="document">
                    <div className="modal-content aboutModalContent">
                        <div className="modal-header">
                            <h1 id="mainTitle">
                                <span className="highlighter">Syndir Match</span>
                            </h1>
                        </div>
                        <div className="modal-body">
                            <h2 id="infoHeading">How to Interact with Other Users:  </h2>
                            <p>
                                Syndir Match carefully analyzes your input to match you with users who tend to think more like you do.
                                Since we've already taken care of the hard part, feel free to reach out to any of your matches and speak candidly.
                                Please use appropriate Etiquette and remember to treat everyone with respect.
            </p>

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
