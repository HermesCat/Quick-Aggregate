import React from "react";
import "./header.css";

function NavTabs(props) {
  return (
    <header>
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <h1><span className="highlight">Quick</span>Aggregate</h1>
        </div>
        <div className="col-md-6 col-xs-12">
          <ul className="nav">
            <li className="nav-item">
              <a href="#home" onClick={() => props.handlePageChange("Home")} className="nav-link">
                Home
        </a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={() => props.handlePageChange("About")} className="nav-link">
                About
        </a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={() => props.handlePageChange("Contact")} className="nav-link">
                Contact
        </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavTabs;
