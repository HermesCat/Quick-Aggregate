import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../Nav";
import "./style.css";
import HamburgerIcon from "./img/hamburger_icon.png";

// There are 2 versions of the header (small screen and desktop), remember this when creaating links and such



function Header() {
    return (

        <header>
            <div className="row">
                <div className="col-6">
                    <h1 className="main-title"><span className="highligher">Quick</span>Aggregate</h1>
                </div>
                <div className="col-6 navigation">
                    <a className="d-lg-none "><img className="hamburger-icon" src={HamburgerIcon} /></a>
                    <Router>
                        <>
                            <Nav />
                            <div className="row  button-list">
                                <div className="col-12">
                                    <button>Login</button>
                                    <a href="/register"><button>Sign-Up</button></a>
                                </div>
                            </div>
                            <Switch>
                                <Route exact path="/" />
                                <Route exact path="/" />
                                <Route exact path="/" />
                            </Switch>
                        </>
                    </Router>
                </div>
            </div>
        </header>
    );
}

export default Header;