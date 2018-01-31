import React, { Component } from "react";
import Nav from "../../components/Nav";
import ArticleDisplay from "../../components/ArticleDisplay";
import ArticleCard from "../../components/ArticleCard";

class SavedArticles extends Component {

    state = {};

    render() {
        return (
            <div>
                <Nav
                    linkOne="/profile"
                    linkOneDisplay="Profile"
                    linkTwo="/"
                    linkTwoDisplay="Logout"
                />
                <br/>
                <ArticleDisplay>
                </ArticleDisplay>
            </div>
        );
    }
}

export default SavedArticles;
