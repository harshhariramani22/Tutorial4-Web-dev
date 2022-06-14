import React, { Component } from "react";
import "./styles.css";
import axios from "axios";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", errorMsg: "" };
  }

  handleChange = (event) => {
    if (event.target.name === "email") {
      console.log("inside change");
      this.setState({ email: event.target.value });
    }
    if (event.target.name === "password") {
      this.setState({ password: event.target.value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log("inside handle submit");
    axios
      .post("https://tutorial4-api.herokuapp.com/api/users/login", user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.status === true) {
          window.location.href = "/profileListing";
        } else {
          this.setState({ errorMsg: "The entered credentials are incorrect. Please enter valid credentials" });
        }
      });
  };

  errorComponent  () {
    if (this.state.errorMsg !== '') {
      return (<div>
      <p className="text-danger">{this.state.errorMsg}</p>
      </div>)
    }
  }
  
  render() {
    return (
      <React.Fragment>
          <div className="container">
            <h2 align="center" className="login">Login Page</h2>
            <div align="center"> {this.errorComponent()} </div>
            <form onSubmit={this.handleSubmit} align="center">
              <div className="form-group">
                <label> Email</label>
                <input
                  type="text"  id="email"
                  placeholder="Enter your email id"  name="email"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label> Password</label>
                <input
                  type="password"  id="password"
                  placeholder="Enter your password"  name="password"
                  onChange={this.handleChange}
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </form>
          </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;


/*
Code references:

https://www.npmjs.com/package/axios
https://jasonwatmore.com/post/2020/07/17/react-axios-http-post-request-examp
https://github.com/Harshini-Kasibhotla/RajaHarshini_Kasibhotla_CSCI5709-Tutorial4
https://stackoverflow.com/questions/48847885/module-not-found-cant-resolve-bootstrap-dist-css-bootstrap-theme-css-in-c
https://github.com/axios/axios/issues/3821 
https://reactjs.org/docs/fragments.html

*/