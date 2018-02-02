import React, { Component } from "react";
import Nav from "../../components/Nav";
import Auth from "../../modules/Auth.js";
import { Redirect } from "react-router-dom";
import "./Local.css";
import API from "../../utils/API.js";

class Local extends Component {

    state = {
        user: undefined,
        authorized: ""
    };

    componentDidMount() {
        this.setState({ user: Auth.getUser() });
        this.getUser(window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1));
    }

    getUser = (ID) => {
        const that = this;
        API.getUser(ID)
            .then(res => {
                that.setState({
                    name: res.data.name,
                    userState: res.data.state,
                    zipCode: res.data.zipCode,
                    userID: ID
                }, () => {
                    //Once the user's information has been updated, get display the local representatives
                    API.getLocalReps(this.state.zipCode)
                        .then(res => {
                            console.log("LOCAL REPS RESULTS----------------------------------------------")
                            console.log(res);
                        })
                        .catch(err => console.log(err));
                });
            })
            .catch(err => {
                //If there is an error with user authentication (ie the user is not logged in), send the user
                //to the login page
                console.log(err);
                this.setState({ authorized: "NO" });
            });
    }

    render() {
        return (this.state.authorized === "NO" ? <Redirect to="/login" /> :
            <div>
                <Nav
                    linkOne={"/profile/" + this.state.user}
                    linkOneDisplay="Profile"
                    linkTwo="/logout"
                    linkTwoDisplay="Logout"
                />
                <h2 className="notification">
                    Local Representatives...coming soon! <i className="fa fa-cogs fa-lg"></i>
                </h2>
            </div>
        );
    }
}

export default Local;
