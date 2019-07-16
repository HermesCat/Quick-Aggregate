import React from "react";
import "./style.css";

function Powered_By() {
    return (
        <>
            <div className="container">
                <img className="about-icons" alt="React.js" src="../img/icons/react-logo.png" />
                <img className="about-icons" alt="Mongo DB" src="../img/icons/mongo-logo.png" />
                <img className="about-icons" alt="Node.js" src="../img/icons/node-logo.png" />
                <img className="about-icons" alt="Bootstrap" src="../img/icons/bootstrap-logo.png" />
                <img className="about-icons" alt="Heroku" src="../img/icons/heroku-logo.png" />

            </div>
        </>

    );
}

export default Powered_By;