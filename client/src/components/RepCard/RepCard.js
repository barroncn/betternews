import React from "react";
import "./RepCard.css";

const RepCard = props =>

  <div class="card rep text-center">
            <a href={"/details/" + props.apiID}><img className="card-img-top" src={props.picture} alt="Card image cap" /></a>
            <div className="card-body">
              <p><a href={props.website} target="_blank" className="card-title font-weight-bold">{props.firstName} {props.lastName}</a></p>
              <p className="card-text">{props.repState} - {props.party}</p>
              <p><a href={props.contact} target="_blank" className="card-text">Contact Form</a></p>
              <p className="card-text">{props.phone}</p>
            </div>
          </div>;

export default RepCard;
