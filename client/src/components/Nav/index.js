import React from "react";
import "./style.css";

function Nav() {
  return (

    <>
      <ul className="nav justify-content-end d-lg-block">
        <li className="nav-item">
          <a className="nav-link" href="/">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">CONTACT</a>
        </li>
      </ul>
    </>

  );
}

export default Nav;

