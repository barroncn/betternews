import React, { Component } from "react";
import Nav from "../../components/Nav";
import API from "../../utils/API";
import Vote from "../../components/Vote";
import "./Voting.css";

class Home extends Component {

    state = {
        votes: []
    };

    // When the component mounts call getVoteRecord() to get the voting record from the ProPublica API 
    // and getRepInfo() to populate specific reps info
    componentDidMount() {
        this.getVoteRecord();
        this.getRepInfo();
    }

    // getVoteRecord() gets the votes listed in the ProPublica API
    getVoteRecord() {
        const allVotes = []; //Placeholder array
        API.getRepRecord(window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1)) // pass the reps apiID from the url
            .then(res => {
                // For each vote in the API data, push the relevent information into our placeholder array
                res.data.results[0].votes.forEach(vote =>
                    allVotes.push({
                        title: vote.bill.number,
                        summary: vote.description,
                        position: vote.position,
                        date: vote.date,
                        latestAction: vote.bill.latest_action,
                        id: vote.bill.bill_id,
                        time: vote.time
                    })
                );
                // Set the state allVotes array so the page will be updated
                this.setState({ votes: allVotes });
            });
    }

    // This function queries our database for the representative with the apiID from the url
    getRepInfo() {
        API.getRep(window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1))
            .then(res => {
                // Initialize/set the state of the following properties for the corresponding representative
                this.setState({
                    firstName: res.data[0].firstName,
                    lastName: res.data[0].lastName,
                    party: res.data[0].party,
                    email: res.data[0].email,
                    state: res.data[0].state,
                    website: res.data[0].website,
                    picture: res.data[0].picture,
                    telephone: res.data[0].telephone,
                    nextRace: res.data[0].nextRace
                });
            });
    }

    render() {
        return (
            <div>
                <Nav
                    linkTwo="/"
                    linkTwoDisplay="Home"
                />
                <br/>
                <div className="voteWrapper">
                
                    <div className="theVotes">
                    <h2 className="articleHeader">{this.state.firstName + " " + this.state.lastName}'s Votes</h2>
                        <div className="text-center">
                        <img src={this.state.picture} className="detailImg" alt="Representative Headshot"/>
                        <h4 className="text-center details">{(this.state.party==="D") ? "Democrat" : "Republican"} from {this.state.state}</h4>
                        <h4 className="text-center details">Seat up for election in {this.state.nextRace}</h4>
                        </div>
                        <div className="articleDisplay">
                            {this.state.votes.map( vote => ( //Makes an Vote for each vote in the votes array
                                <Vote
                                    title={vote.title}
                                    summary={vote.summary}
                                    position={vote.position}
                                    date={vote.date}
                                    latestAction={vote.latestAction}
                                    key={vote.date + vote.time + vote.id}
                                />
                            ))}     
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
