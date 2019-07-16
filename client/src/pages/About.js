import React from 'react';
import About_Modal from "../components/About_Modal";
import Powered_By from "../components/Powered_By";

function About() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h3 className="page-title">About: </h3>
                </div>
                <About_Modal />
                <div className="row">
                    <h3 className="page-title">Powered By: </h3>
                </div>
                <Powered_By />

            </div>
        </>
    )
}

export default About