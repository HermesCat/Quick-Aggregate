import React from "react";
import AboutModal from "../components/About_Modal";
import PoweredBy from "../components/Powered_By";
import "./style.css";



function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h3 className="page-title">About: </h3>
        </div>
        <AboutModal />
        <div className="row">
          <h3 className="page-title">Powered By: </h3>
        </div>
        <PoweredBy />
      </div>
    </>
  );
}

export default About;
