import React from "react";
import "./RepCard.css";

const RepCard = props =>

  <div className="card rep text-center">
            <a href={(!props.website) ? "" : props.website} target="_blank"><img className="card-img-top crop" src={props.picture} alt="Representative Headshot"/></a>
            <div className="rep-card-body card-body">
              <p className="repName font-weight-bold">{props.firstName} {props.lastName}</p>
              <p className="card-text">{props.repState} - {props.party}</p>
              <p>
                <a href={props.website} target="_blank" className="card-title font-weight-bold"> 
                  {(!props.website) ? " " : <i className="fa fa-id-card-o fa-lg" aria-hidden="true" data-toggle="tooltip" title="Website" tabIndex="0" data-placement="top"></i>}
                </a>
                <a href={props.contact} target="_blank" className="card-text">
                  {(!props.contact) ? " " : <i className="fa fa-envelope-o fa-lg" aria-hidden="true" data-toggle="tooltip" title="Contact Form" tabIndex="0" data-placement="top"></i>} 
                </a>
                <a href={"/details/" + props.apiID} className="card-title font-weight-bold"> 
                  <i className="fa fa-chevron-circle-down fa-lg" aria-hidden="true" data-toggle="tooltip" title="Recent Votes" tabIndex="0" data-placement="top"></i>
                </a>
              </p>
              <p className="card-text">{props.phone}</p>
            </div>
          </div>;

export default RepCard;
