import React from "react";
import "./nav.css";

function Nav() {
  return (

    <>
      <header>
        <div className="row">
          <div cassName="col-6">
            <h1><span className="hot">Quick</span>Aggregate</h1>
          </div>
          <div cassName="col-6">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <a className="navbar-brand" href="/">
                HOME
    </a>
              <a className="navbar-brand" href="/">
                ABOUT
    </a>
              <a className="navbar-brand" href="/">
                CONTACT
    </a>
            </nav>
          </div>
        </div>
      </header>
    </>

  );
}

export default Nav;
