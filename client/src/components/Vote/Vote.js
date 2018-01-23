import React from "react";
import "./Vote.css";

const Vote = props =>
  <div className="card vote">
          <div className="card-header">
            <h4 className="font-italic font-weight-bold text-left">{props.title}</h4>
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>Position: {props.position}</p>
              <p>{props.summary}</p>
              <p>{props.date}</p>
              <footer className="blockquote-footer">Latest Action: {props.latestAction}</footer>
            </blockquote>
          </div>
        </div>;

export default Vote;
