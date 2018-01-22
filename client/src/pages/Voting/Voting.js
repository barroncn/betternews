import React, { Component } from "react";
import Nav from "../../components/Nav";
import ArticleDisplay from "../../components/ArticleDisplay";
import ArticleCard from "../../components/ArticleCard";
import API from "../../utils/API";
import Vote from "../../components/Vote";

class Home extends Component {

    state = {
        votes: []
    };

    componentDidMount() {
        this.getVoteRecord();
    }
    getVoteRecord() {
        const allVotes = [];
        console.log(window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1));
        API.getRepRecord(window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1))
            .then(res => {
                res.data.results[0].votes.forEach(vote =>
                    allVotes.push({
                        title: vote.bill.number,
                        summary: vote.description,
                        position: vote.position,
                        date: vote.date,
                        latestAction: vote.bill.latest_action
                    })
                );
                this.setState({ votes: allVotes });
            });
    }


    render() {
        return (
            <div>
                <Nav
                    linkOneDisplay="Login"
                    linkTwoDisplay="Register"
                />
                <ArticleDisplay>
                    {this.state.votes.map( vote => ( //Makes an ArticleCard for each article in the articles array
                        <Vote
                            title={vote.title}
                            summary={vote.summary}
                            position={vote.position}
                            date={vote.date}
                            latestAction={vote.latestAction}
                            key={vote.title}
                        />
                    ))}
                </ArticleDisplay>
            </div>
        );
    }
}

export default Home;
