import React, { Component } from "react";
import "./Login.css";
import Nav from "../../components/Nav";

class Login extends Component {
  state = {

  }

  handleSubmitClick = (event) => {
    event.preventDefault();
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
                <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label for="passwordInput">Password</label>
                <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
              </div>
              <button type="submit" onClick={this.handleSubmitClick} className="btn btn-dark">Submit</button><span>Don't have an account yet? <a href="/register">Register</a></span>
            </form>
          </div>
        </div>
      </div>
    ]);
  }
}

export default Login;
