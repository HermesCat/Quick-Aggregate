import React from "react";
import "./style.css";

function PoweredBy() {
  return (
    <>
      <div className="container powered-container">
        <img
          className="about-icons react-logo"
          alt="React.js"
          src="../img/icons/react-logo.png"
        />
        <img
          className="about-icons mongo-logo"
          alt="Mongo DB"
          src="../img/icons/mongo-logo.png"
        />
        <img
          className="about-icons node-logo"
          alt="Node.js"
          src="../img/icons/node-logo.png"
        />
        <img
          className="about-icons bootstrap-logo"
          alt="Bootstrap"
          src="../img/icons/bootstrap-logo.png"
        />
        <img
          className="about-icons heroku-logo"
          alt="Heroku"
          src="../img/icons/heroku-logo.png"
        />
      </div>
    </>
  );
}

export default PoweredBy;
