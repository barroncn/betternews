import React, { Component } from "react";
import Nav from "../../components/Nav";
import RepDisplay from "../../components/RepDisplay";
import RepCard from "../../components/RepCard";
import ArticleDisplay from "../../components/ArticleDisplay";
import ArticleCard from "../../components/ArticleCard";

class Home extends Component {

    state = {
        representatives: []
    };

    render() {
        return (
            <div>
                <Nav
                    linkOneDisplay="Login"
                    linkTwoDisplay="Register"
                />
                <RepDisplay>
                    {this.state.representatives.map( rep => ( //Makes an RepCard for each representative in our database
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
                    {this.state.articles.map( article => (
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
