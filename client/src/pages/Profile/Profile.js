import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Nav from "../../components/Nav";
import RepDisplay from "../../components/RepDisplay";
import RepCard from "../../components/RepCard";
import ArticleDisplay from "../../components/ArticleDisplay";
import ArticleCard from "../../components/ArticleCard";
import API from "../../utils/API";
import "./Profile.css";

class Profile extends Component {

    state = {
        representatives: [],
        articles: [],
        authorized: ""
    };

    //When the component mounts, call the getUser function with the database id from the URL as an argument
    //Also get the most resent 10 articles from NewsAPI
    componentDidMount() {
        this.getUser(window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1));
        this.getArticles();
    }

    //Returns the name, state, and zip code of the user and sets the state of each of these to the appropriate value
    getUser = (ID) => {
        const that = this;
        API.getUser(ID)
            .then(res => {
                that.setState({
                    name: res.data.name,
                    userState: res.data.state,
                    zipCode: res.data.zipCode
                }, () => {
                    //Once the user's information has been updated, get display the Senators from the user's State
                    that.getStateSen();
                });
            })
            .catch(err => {
                //If there is an error with user authentication (ie the user is not logged in), send the user
                //to the login page
                console.log(err);
                this.setState({ authorized: "NO" });
            });
    }

    //Go to the NewsAPI to get recent articles and push them into the articles array
    getArticles() {
        const articlesArray = [];
        API.getNewArticles()
            .then(res => {
                console.log(res);
                res.data.articles.forEach(article =>
                    articlesArray.push({
                        title: article.title,
                        url: article.url,
                        photo: article.urlToImage,
                        summary: article.description,
                        date: article.publishedAt
                    })
                );
                // Set the state articles array so the page will be updated
                this.setState({ articles: articlesArray });
            })
            .catch(err => console.log(err));
    }

    //Get only the senators from the users state from the database
    getStateSen() {
        API.getStateReps("Senator,", this.state.userState)
            .then(res =>
                // Set the state representatives array so the page will be updated
                this.setState({ representatives: res.data }))
            .catch(err => console.log(err));
    }

    //Get only the house representatives from the users state from the databse
    getStateRep() {
        API.getStateReps("Representative", this.state.userState)
            .then(res =>
                // Set the state representatives array so the page will be updated
                this.setState({ representatives: res.data }))
            .catch(err => console.log(err));
    }

    //Display the appropriate reps based on the button the user has clicked
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
            this.state.authorized === "NO" ? <Redirect to="/login" /> :
            <div>
                <Nav
                    linkOne = "/local"
                    linkOneDisplay="Local Reps"
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
                            summary={article.summary}
                            date={article.date}
                            photo={article.photo}
                            key={article.url}
                        />
                    ))}
                </ArticleDisplay>
            </div>
        );
    }
}

export default Profile;
