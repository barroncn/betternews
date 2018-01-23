import React, { Component } from "react";
import Nav from "../../components/Nav";
import RepDisplay from "../../components/RepDisplay";
import RepCard from "../../components/RepCard";
import ArticleDisplay from "../../components/ArticleDisplay";
import ArticleCard from "../../components/ArticleCard";
import API from "../../utils/API";

class Home extends Component {

    state = {
        representatives: [],
        articles: []
    };

    // When the component mounts, call getAllReps function and getArticles function so we can populate the page
    componentDidMount() {
        //this.newReps();
        this.getAllReps();
        this.getArticles();
    }

    // This function gets all the reps from the database (both senators and house representatives)
    getAllReps() {
        API.getReps()
            .then(res =>
                // Set the state representatives array so the page will be updated
                this.setState({ representatives: res.data }))
            .catch(err => console.log(err));
    }

    // This function will go to the ProPublica API to get their list of senators and put those in the database 
    // and it will also get their list os senators and put those in the database. DOES NOT DELETE RIGHT NOW!
    newReps() {
        API.getNewSenReps()
            .then(res =>
                res.data.results[0].members.forEach(rep =>
                    API.saveRep({
                        firstName: rep.first_name,
                        lastName: rep.last_name,
                        reptype: rep.title.split(" ")[0],
                        party: rep.party,
                        email: rep.contact_form,
                        state: rep.state,
                        website: rep.url,
                        picture: "https://cdn.civil.services/senate/headshots/512x512/" + rep.first_name.toLowerCase() + "-" + rep.last_name.toLowerCase() + ".jpg",
                        telephone: rep.phone,
                        nextRace: rep.next_election,
                        apiID: rep.id
                    }).then(database =>
                        console.log("Database Populated")
                    ).catch(err => console.log(err))
                )
            )
            .catch(err => console.log(err));

        API.getNewHouseReps()
            .then(res =>
                res.data.results[0].members.forEach(rep =>
                    API.saveRep({
                        firstName: rep.first_name,
                        lastName: rep.last_name,
                        reptype: rep.title.split(" ")[0],
                        party: rep.party,
                        email: rep.contact_form,
                        state: rep.state,
                        website: rep.url,
                        picture: "https://vote-usa.org/Image.aspx?Id=" + rep.state + rep.last_name + rep.first_name + "&Col=Profile300&Def=Profile300",
                        telephone: rep.phone,
                        nextRace: rep.next_election,
                        apiID: rep.id
                    }).then(database =>
                        console.log("Database Populated")
                    ).catch(err => console.log(err))
                )
            ).catch(err => console.log(err));
    }

    // This function gets new Politico articles from the NewsAPI. (Everytime the page is loaded it will refresh the articles)
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

    // This function handles the Senators or House Representative button clicks. It will get JUST senators or JUST reps 
    // from the database depending on the button clicked
    handleChamberChange = (name) => {
        API.getChamberReps(name)
            .then(res =>
                // Set the state representatives array so the page will be updated
                this.setState({ representatives: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Nav
                    linkOne="/login"
                    linkOneDisplay="Login"
                    linkTwo="/register"
                    linkTwoDisplay="Register"
                />
                <RepDisplay onClick={this.handleChamberChange}>
                    {this.state.representatives.map( rep => ( //Makes an RepCard for each representative in the states representatives array
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
                    {this.state.articles.map( article => ( //Makes an ArticleCard for each article in the states articles array
                        <ArticleCard
                            url={article.url}
                            title={article.title}
                            summary={article.summary}
                            date={article.date}
                            photo={article.photo}
                            key={article.date}
                        />
                    ))}
                </ArticleDisplay>
            </div>
        );
    }
}

export default Home;
