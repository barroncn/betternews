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
                  <div className="form-group">
                    <input type="password" className="form-control" id="passwordConfirm" placeholder="Confirm Password" />
                  </div>
                  <div class="form-group">
                      <label for="inputState">State</label>
                      <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>AK</option>
                        <option>AL</option>
                        <option>AR</option>
                        <option>AZ</option>
                        <option>CA</option>
                        <option>CO</option>
                        <option>CT</option>
                        <option>DE</option>
                        <option>FL</option>
                        <option>GA</option>
                        <option>HI</option>
                        <option>IA</option>
                        <option>ID</option>
                        <option>IL</option>
                        <option>IN</option>
                        <option>KS</option>
                        <option>KY</option>
                        <option>LA</option>
                        <option>MA</option>
                        <option>MD</option>
                        <option>ME</option>
                        <option>MI</option>
                        <option>MN</option>
                        <option>MO</option>
                        <option>MS</option>
                        <option>MT</option>
                        <option>NC</option>
                        <option>ND</option>
                        <option>NE</option>
                        <option>NH</option>
                        <option>NJ</option>
                        <option>NM</option>
                        <option>NV</option>
                        <option>NY</option>
                        <option>OH</option>
                        <option>OK</option>
                        <option>OR</option>
                        <option>PA</option>
                        <option>RI</option>
                        <option>SC</option>
                        <option>SD</option>
                        <option>TN</option>
                        <option>TX</option>
                        <option>UT</option>
                        <option>VA</option>
                        <option>VT</option>
                        <option>WA</option>
                        <option>WI</option>
                        <option>WV</option>
                        <option>WY</option>
                      </select>
                    </div>
                    <div class="form-group">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip" />
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>

                    
                </form>
                </div>
                </div>
                </div>
];

export default Login;
