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
                <div className="col-8">
                    <h1 className="main-title"><span className="highligher">Quick</span>Aggregate</h1>
                </div>
                <div className="col-4 navigation">
                    <div className="row">
                        <a className="d-lg-none "><img className="hamburger-icon" src={HamburgerIcon} /></a>
                        <Router>
                            <div>
                                <Nav />
                                <Switch>
                                    <Route exact path="/" />
                                    <Route exact path="/" />
                                    <Route exact path="/" />
                                </Switch>
                            </div>
                        </Router>
                    </div>
                    <div className="row button-list d-none d-lg-block">
                        <div className="col-12">
                            <button>Login</button>
                            <button>Sign-Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;