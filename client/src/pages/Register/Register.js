import React, { Component } from "react";
import "./Register.css";
import Nav from "../../components/Nav";

class Register extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    userState: "Select Your State",
    zip: "",
    message: ""
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmitClick = (event) => {
    event.preventDefault();

    if (!this.state.email || !this.state.password || this.state.userState === "Select Your State" || !this.state.zip) {
      this.setState({ message: "Please complete all fields" });
    }

    else if (!this.validateEmail(this.state.email)) {
      this.setState({ message: "Please enter a valid email address." });
    }

    else if (this.state.password.length < 6) {
      this.setState({ message: "Password must be at least six characters long." });
    }

    // else if (this.state.password != this.state.confirmPassword) {
    //   this.setState({ message: "Passwords do not match." });
    // }

    else {
      //CREATE USER AND VALIDATE!

      this.setState({
        email: "",
        password: "",
        confirmPassword: "",
        userState: "Select Your State",
        zip: "",
        message: ""
      });
    }

  }

  render() {
    return ([
      <Nav
          linkOne="/"
          linkOneDisplay="Home"
          linkTwo="/login"
          linkTwoDisplay="Login"
        />,
      <div className="loginWrap">
          <br/>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Register</h4>
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
                    type="password" 
                    className="form-control" 
                    id="passwordInput" 
                    placeholder="Password" 
                    value={this.state.password}
                  />
                </div>
                <div className="form-group">
                  <input 
                    name="passwordConfirm"
                    onChange={this.handleInputChange}
                    type="password" 
                    className="form-control" 
                    id="passwordConfirm" 
                    placeholder="Confirm Password" 
                    value={this.state.passwordConfirm}
                  />
                </div>
                <div class="form-group">
                  <label for="inputState">State</label>
                  <select 
                    name="userState"
                    onChange={this.handleInputChange}
                    id="inputState" 
                    class="form-control"
                    value={this.state.userState}
                  
                  >
                              <option selected>Select Your State</option>
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
                  <input 
                    name="zip"
                    onChange={this.handleInputChange}
                    type="text" 
                    class="form-control" 
                    id="inputZip" 
                    value={this.state.zip}
                  />
                </div>
                <button type="submit" onClick={this.handleSubmitClick} className="btn btn-dark">Submit</button><span className="errorMessage">{this.state.message}</span>
                <div className="text-center">Already have an account? <a href="/login">Login</a></div>
              </form>
            </div>
          </div>
        </div>
    ]);
  }
}

export default Register;


// || this.state.userState === "Select Your State" 
// || !this.state.confirmPassword || !this.state.zip
