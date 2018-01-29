import React, { Component } from "react";
import Nav from "../../components/Nav";
import RepDisplay from "../../components/RepDisplay";
import RepCard from "../../components/RepCard";
import ArticleDisplay from "../../components/ArticleDisplay";
import ArticleCard from "../../components/ArticleCard";
import API from "../../utils/API";

class Profile extends Component {

    state = {
        representatives: [],
        articles: []
    };

    componentDidMount() {
        const id = "'" + window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1) + "'";
        const objID = "ObjectId(" + id + ")";
        console.log(objID);
        this.getUser(objID);
    }

    getUser = (ID) => {
        const that = this;
        API.getUser(ID)
            .then(res => {
                console.log("GET USER RESULTS: ");
                console.log(res);
                that.setState({
                        name: res.name,
                        userState: res.state,
                        zipCode: res.zipCode
                    }, () => {
                        that.getStateSen();
                        that.getArticles();
                    })
                    .catch(function(err) {
                        console.log(err);
                        that.setState({
                            user: undefined
                        });
                    });
            });
    }

    getArticles() {
        const articlesArray = [];
        API.getNewArticles()
            .then(res => {
                res.data.articles.forEach(article =>
                    articlesArray.push({
                        title: article.title,
                        url: article.url,
                        photo: article.urlToImage,
                        summary: article.description,
                        date: article.publishedAt
                    })
                )
                // Set the state articles array so the page will be updated
                this.setState({ articles: articlesArray })
            })
            .catch(err => console.log(err));
    }

    getStateSen() {
        API.getStateReps("Senator,", this.state.userState)
            .then(res =>
                // Set the state representatives array so the page will be updated
                this.setState({ representatives: res.data }))
            .catch(err => console.log(err));
    }

    getStateRep() {
        API.getStateReps("Representative", this.state.userState)
            .then(res =>
                // Set the state representatives array so the page will be updated
                this.setState({ representatives: res.data }))
            .catch(err => console.log(err));
    }

    handleChamberChange = name => {
        if (name === "Senator,") {
            this.getStateSen();
        }
        else {
            this.getStateRep();
        }
    }

    render() {
        return (
            <div>
                <Nav
                    linkOne="/savedarticles"
                    linkOneDisplay="Saved Articles"
                    linkTwo="/logout"
                    linkTwoDisplay="Logout"
                />
                <RepDisplay onClick={this.handleChamberChange}>
                    {this.state.representatives.map( rep => ( //Makes an RepCard for each representative in the representatives array
                          <RepCard
                              firstName= {rep.firstName}
                              lastName= {rep.lastName}
                              website= {rep.website}
                              chamber= {rep.reptype}
                              apiID= {rep.apiID}
                              picture={rep.picture}
                              repState={rep.state}
                              party={rep.party}
                              contact={rep.email}
                              phone={rep.telephone}
                              key= {rep.apiID}
                          />
                    ))}
                </RepDisplay>
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

export default Profile;
