import React from "react";
import "./RepCard.css";

const RepCard = props =>

  <div class="card rep">
            <a href={"/details/" + props.apiID}><img className="card-img-top" src={props.picture} alt="Card image cap" /></a>
            <div className="card-body">
              <a href={props.website} className="card-title">{props.firstName} {props.lastName}</a>
              <p className="card-text">{props.repState} - {props.party}</p>
              <a href={props.contact} className="card-text">Contact</a>
              <p className="card-text">{props.phone}</p>
            </div>
          </div>;

export default RepCard;
