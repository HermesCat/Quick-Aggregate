import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../Nav";
import "./style.css";
import HamburgerIcon from "./img/hamburger_icon.png";

// There are 2 versions of the header (small screen and desktop), remember this when creaating links and such



function Header() {
    return (
        <>
            <header>
                <div className="row">
                    <div className="col-6">
                        <h1 className="main-title"><span className="highligher">Quick</span>Aggregate</h1>
                    </div>
                    <div className="col-3" />
                    <div className="col-3 navigation">
                        <a className="d-lg-none "><img className="hamburger-icon" src={HamburgerIcon} /></a>
                        <Router>
                            <>
                                <Nav />
                                <div className="row  button-list">
                                    <div className="col-12">
                                        <button type="button" class="btn" id="login" data-toggle="modal" data-target="#loginModal">
                                            Login
                                        </button>
                                        <a href="/register"><button id="sign-up">Sign-Up</button></a>
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
            <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 className="modal-image-stripe">About Quick Aggregate</h4>>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
    </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;