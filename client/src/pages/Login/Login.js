import React, { Component } from "react";
import "./Login.css";
import Nav from "../../components/Nav";

class Login extends Component {
  state = {
    email: "",
    password: ""
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
