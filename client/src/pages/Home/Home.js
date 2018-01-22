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

    componentDidMount() {
        //this.newReps();
        this.getAllReps();
    }
    getAllReps() {
        API.getReps()
            .then(res =>
                this.setState({ representatives: res.data })
            );
    }

    newReps() {
        API.getNewReps()
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
    }

    render() {
        return (
            <div>
                <Nav
                    linkOneDisplay="Login"
                    linkTwoDisplay="Register"
                />
                <RepDisplay>
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

export default Home;
