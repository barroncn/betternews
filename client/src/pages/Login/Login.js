import React from "react";
import "./Login.css";
import Nav from "../../components/Nav";

const Login = props => [

  <Nav
                    linkOneDisplay="Login"
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
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
                </div>
                </div>
                </div>
];

export default Login;
