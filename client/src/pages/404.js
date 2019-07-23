import React from "react";
import "./style.css";

function Four_Oh_Four(props) {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">OOOPS!</h1>
                <p className="lead">We couldn't find your content!</p>
                <hr className="my-4" />
                <p>Click the button to go back home!</p>
                <a className="btn four-oh-four" href="/" role="button">Home</a>
            </div>
        </div>

    );
}

export default Four_Oh_Four;