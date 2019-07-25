import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class RegisterForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  handleInputChange = event => {
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

    API.saveUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      console.log(res);
    });

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="container">
        <div class="card">
          <div class="card-body">
            <form>
              <div className="form-group">
                <label for="firstName">First Name</label>
                <input
                  className="form-control"
                  value={this.state.firstName}
                  name="firstName"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <label for="LastName">Last Name</label>
                <input
                  className="form-control"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label for="inputEmail">Email address</label>
                <input
                  className="form-control"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
              </small>
              </div>
              <div className="form-group">
                <label for="inputPassword">Password</label>
                <input
                  className="form-control"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  placeholder="Password"
                  name="password"
                />
              </div>
              <button onClick={this.handleFormSubmit} className="btn register-submit-btn">
                Submit
            </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
