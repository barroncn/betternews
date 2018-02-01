import React, { Component } from "react";
import Nav from "../../components/Nav";
import Auth from "../../modules/Auth.js";
import { Redirect } from "react-router-dom";
import "./Local.css";

class Local extends Component {

    state = {
        user: undefined
    };

    componentDidMount() {
        this.setState({ user: Auth.getUser() });
    }

    render() {
        return (
            // !this.state.user ? <Redirect to="/login" /> :
            <div>
                <Nav
                    linkOne={"/profile/" + this.state.user}
                    linkOneDisplay="Profile"
                    linkTwo="/logout"
                    linkTwoDisplay="Logout"
                />
                <h2 className="notification">
                    Local Representatives...coming soon! <i class="fa fa-cogs fa-lg"></i>
                </h2>
            </div>
        );
    }
}

export default Local;
