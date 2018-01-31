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

  //Update the DOM to reflect the user's input
  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  //Authenticate the user
  processUser() {
    //Axios request to authenticate the user
    axios.post("/auth/login", {
      "username": this.state.username,
      "password": this.state.password
    }).then(res => {
      //If the user is not authenticated, display an incorrect credentials message
      if (!res.data.success) {
        this.setState({ message: "Incorrect Username or Password." });
      }
      //If the user is authenticated, call the authenticate user Auth function to save a token in local storage
      //and redirect them to their profile page
      else {
        Auth.authenticateUser(res.data.token);
        this.setState({
          "errors": {},
          "redirect": <Redirect to={"/profile/" + res.data.user.userID} />
        });
      }
    });
  }

  //When the user submits the login form
  handleSubmitClick = event => {
    event.preventDefault();
    //Make sure they haven't left both fields blank, and display appropriate message if they have
    if (!this.state.username && !this.state.password) {
      this.setState({ message: "Please enter your email and password." });
    }
    //If they only left username blank, instruct them to enter their email
    else if (!this.state.username) {
      this.setState({ message: "Please enter your email." });
    }
    //if they have left the password blank, instruct them to enter their password
    else if (!this.state.password) {
      this.setState({ message: "Please enter your password." });
    }
    //if they filled out each section, then process the form
    else {
      this.processUser();
    }
  }

  render() {
    return (
      this.state.redirect ? this.state.redirect :
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
