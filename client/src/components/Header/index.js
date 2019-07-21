import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../Nav";
import "./style.css";
import HamburgerIcon from "./img/hamburger_icon.png";
import API from '../../utils/API'


// There are 2 versions of the header (small screen and desktop), remember this when creaating links and such



class Header extends Component {
    state = {
        email: "",
        password: "",
        isLoggedIn: false,
        isHidden: true
    }

    toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }
    
    handleInputChange = (event) => {
		// Getting the value and name of the input which triggered the change
		let value = event.target.value;
		const name = event.target.name;

		// Updating the input's state
		this.setState({
			[name]: value
		});
    };
    
    handleFormSubmit = event => {
        event.preventDefault();

        API.logIn({
            email: this.state.email,
            password: this.state.password
            
        }).then(
            res => {
                this.setState({
                    email: "",
                    password: "",
                    isLoggedIn: res.data.isLoggedIn
                })
                if(!res.data.isLoggedIn){
                    console.log(res.data.message)
                }
                if(res.data.isLoggedIn){

                }
                console.log(res)
            }
        )            
    }


    render () {
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
                                        <button 
                                        type="button" 
                                        className="login-button-style login" 
                                        data-toggle="modal" 
                                        data-target="#loginModal">
                                            Login
                                        </button>
                                        <a href="/register">
                                            <button 
                                            className="login-button-style sign-up-style" 
                                            id="sign-up">
                                                Sign-Up
                                            </button>
                                        </a>
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
            <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog login-modal-size" role="document">
                    <div className="modal-content">
                        <div className="modal-header modal-header-about">
                            <h5 className="modal-title main-title-modal" ><span className="highligher-modal">Quick</span>Aggregate</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h4>Email</h4>
                            <input 
                            className="user-login-input"
                            type ="email" 
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            placeholder="Email Adress"
                            name="email"></input>
                            <h4>Password</h4>
                            <input className="user-password-input" 
                            password="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"></input>
                        </div>
                        <div class="modal-footer modal-footer-about">
                            <div className="row">
                                <button                            
                                onClick={ this.handleFormSubmit }
                                className="login-button-style login"
                                data-dismiss ="modal">
                                    Submit
                                </button>
                                <button className="login-button-style sign-up-style" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
}

export default Header;