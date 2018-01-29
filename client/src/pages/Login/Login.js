import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Login.css";
import Nav from "../../components/Nav";
import Auth from "../../modules/Auth.js";
import axios from "axios";

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      errors: "",
      username: "",
      password: "",
      message: "",
      redirect: undefined
    };

    this.processUser = this.processUser.bind(this);
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  processUser() {
    //AJAX request
    axios.post("/auth/login", {
      "username": this.state.username,
      "password": this.state.password
    }).then(res => {
      console.log("RES:");
      console.log(res);
      console.log("+++++++++++++++++++++++++++++++++++++++");
      console.log("TOKEN");
      console.log(res.data.token);
      if (!res.data.success) {
        console.log(res.data);
      }
      else {
        Auth.authenticateUser(res.data.token);
        this.setState({
          "errors": {},
          "redirect": <Redirect to={"/profile/" + res.data.user.userID} />
        });
      }
    });
  }

  handleSubmitClick = event => {
    event.preventDefault();

    if (!this.state.username && !this.state.password) {
      this.setState({ message: "Please enter your email and password." });
    }

    else if (!this.state.username) {
      this.setState({ message: "Please enter your email." });
    }

    else if (!this.state.password) {
      this.setState({ message: "Please enter your password." });
    }

    else {
      this.processUser();
      //USER AUTHENTICATION!!!

      // this.setState({
      //   email: "",
      //   password: "",
      //   message: ""
      // });
    }
  }

  render() {
    return (
      <div>
      <Nav
        linkOne="/"
        linkOneDisplay="Home"
        linkTwo="/register"
        linkTwoDisplay="Register"
      />
      <div className="loginWrap">
        <br/>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Login</h4>
            <form>
              <div className="form-group">
                <label>Email address</label>
                <input 
                  name="username"
                  onChange={this.handleInputChange} 
                  type="email" 
                  className="form-control" 
                  id="emailInput"
                  aria-describedby="emailHelp" 
                  placeholder="Enter email" 
                  value={this.state.username}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input 
                  name="password"
                  onChange={this.handleInputChange} 
                  type="password" className="form-control" 
                  id="passwordInput" 
                  placeholder="Password" 
                  value={this.state.password}/>
              </div>
              <button type="submit" onClick={this.handleSubmitClick} className="btn btn-dark">Submit</button><span className="errorMessage">{this.state.message}</span>
              <div className="text-center">Don't have an account yet? <a href="/register">Register</a></div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Login;
