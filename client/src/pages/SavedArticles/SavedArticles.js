import React, { Component } from "react";
import Nav from "../../components/Nav";
import ArticleDisplay from "../../components/ArticleDisplay";
import ArticleCard from "../../components/ArticleCard";

class SavedArticles extends Component {

    state = {
        articles: [] //THIS WILL BE THE SAVED ARTICLES
    };

    render() {
        return (
            <div>
                <Nav
                    linkOneDisplay="Profile"
                    linkTwoDisplay="Logout"
                />
                <br/>
                <ArticleDisplay>
                    {this.state.articles.map( article => ( //Makes an ArticleCard for each article in the articles array
                        <ArticleCard
                            url={article.url}
                            title={article.title}
                            summary={article.synopsis}
                            date={article.date}
                        />
                    ))}
                </ArticleDisplay>
            </div>
        );
    }
}

export default SavedArticles;
