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
                                        <button type="button" className="login-button-style login" data-toggle="modal" data-target="#loginModal">
                                            Login
                                        </button>
                                        <a href="/register"><button className="login-button-style sign-up-style" id="sign-up">Sign-Up</button></a>
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
                <div class="modal-dialog login-modal-size" role="document">
                    <div class="modal-content">
                        <div class="modal-header modal-header-about">
                            <h5 className="modal-title main-title-modal" ><span className="highligher-modal">Quick</span>Aggregate</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h4>Login</h4>
                            <input className="user-login-input" type="email" placeholder="Email Adress"></input>
                            <h4>Password</h4>
                            <input className="user-password-input" type="password"></input>
                        </div>
                        <div class="modal-footer modal-footer-about">
                            <div className="row">
                                <button type="button" className="login-button-style login">Login</button>
                                <button type="button" className="login-button-style sign-up-style" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;