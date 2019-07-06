import React from "react";
import "./style.css";

function Nav() {
  return (

    <>
      <ul class="nav d-none d-lg-block">
        <li class="nav-item">
          <a class="nav-link" href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">REGISTER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">CONTACT</a>
        </li>
      </ul>
    </>

  );
}

export default Nav;
