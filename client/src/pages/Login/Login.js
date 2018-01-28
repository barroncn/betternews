import React, { Component } from "react";
import "./Login.css";
import Nav from "../../components/Nav";

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: "",
        password: ""
      },
    };

    this.processUser = this.processUser.bind(this);
  }

  processUser() {
    const username = encodeURIComponent(this.state.user.username);
    const password = encodeURIComponent(this.state.user.password);
    const userData = `username=${username}&password=${password}`;

    const xhr = new XMLHttpRequest();
    xhr.open("post", "auth/login");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        console.log("The form is valid");
        console.log(xhr);
        this.setState({ errors: {} });
      }
      else {
        console.log(xhr.response);
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({ errors });
      }
    });
    xhr.send(userData);
  }


  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmitClick = event => {
    event.preventDefault();

    if (!this.state.email && !this.state.password) {
      this.setState({ message: "Please enter your email and password." });
    }

    else if (!this.state.email) {
      this.setState({ message: "Please enter your email." });
    }

    else if (!this.state.password) {
      this.setState({ message: "Please enter your password." });
    }

    else {
      //USER AUTHENTICATION!!!

      this.setState({
        email: "",
        password: "",
        message: ""
      });
    }
  }

  render() {
    return ([
      <Nav
        linkOne="/"
        linkOneDisplay="Home"
        linkTwo="/register"
        linkTwoDisplay="Register"
      />,
      <div className="loginWrap">
        <br/>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Login</h4>
            <form>
              <div className="form-group">
                <label for="emailInput">Email address</label>
                <input 
                  name="email"
                  onChange={this.handleInputChange} 
                  type="email" 
                  className="form-control" 
                  id="emailInput"
                  aria-describedby="emailHelp" 
                  placeholder="Enter email" 
                  value={this.state.email}
                />
              </div>
              <div className="form-group">
                <label for="passwordInput">Password</label>
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
    ]);
  }
}

export default Login;
