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
          <a className="nav-link" href="/register">REGISTER</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">CONTACT</a>
        </li>
      </ul>
    </>

  );
}

export default Nav;

