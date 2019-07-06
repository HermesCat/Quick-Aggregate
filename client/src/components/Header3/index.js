import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../Nav";

function Header2() {
    return (

        <header>
            <div className="row">
                <div className="col-9">
                    <h1 className="main-title"><span className="highligher">Quick</span>Aggregate</h1>
                </div>
                <div className="col-3">
                    <div className="row">
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
                    <div className="row button-list">
                        <div className="col-2"></div>
                        <div className="col-4"></div>
                        <div className="col-6">
                            <button>Login</button>
                            <button>Sign-Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header2;