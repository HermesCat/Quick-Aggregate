import React from "react";
import "./style.css";

function Contact() {
  return (
    <>
      <div className="container">
        <h3 className="contact-title">Contact</h3>
        <div className="card">
          <div className="row">
            <div className="col-6">
              <div className="card contact-card">
                <div className="card-body">
                  <h5 className="card-title">John Pettis</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Front-End
                  </h6>
                  <p className="card-text">

                  </p>
                  <a href="https://github.com/HermesCat" className="card-link">
                    GitHub
                  </a>

                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card contact-card">
                <div className="card-body">
                  <h5 className="card-title">Tyler Lewis</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Front-End
                  </h6>
                  <p className="card-text">

                  </p>
                  <a href="https://github.com/GrimbleLewis" className="card-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="card contact-card">
                <div className="card-body">
                  <h5 className="card-title">William Wood</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Back-End
                  </h6>
                  <p className="card-text">

                  </p>
                  <a href="https://github.com/twood17" className="card-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card contact-card">
                <div className="card-body">
                  <h5 className="card-title">Greg Chu</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Front-End
                  </h6>
                  <p className="card-text">

                  </p>
                  <a href="https://github.com/GC0728" className="card-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
