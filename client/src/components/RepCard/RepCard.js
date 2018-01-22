import React from "react";
import "./RepCard.css";

const RepCard = props =>

    <div class="card rep">
            <img class="card-img-top" src={(props.chamber === "Senate") ? ("https://cdn.civil.services/senate/headshots/512x512/" + props.firstName.toLowerCase() + "-" + props.lastName.toLowerCase() + ".jpg") : ("https://vote-usa.org/Image.aspx?Id=" + props.repState + props.lastName + props.firstName + "&Col=Profile300&Def=Profile300")} alt="Card image cap" />
            <div class="card-body">
              <a href={props.website} class="card-title">{props.firstName} {props.lastName}</a>
              <p class="card-text">{props.repState} - {props.party}</p>
              <a href={props.contact} class="card-text">Contact</a>
              <p class="card-text">{props.phone}</p>
            </div>
          </div>;

export default RepCard;
