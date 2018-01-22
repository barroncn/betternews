import React from "react";
import "./Vote.css";

const Vote = props =>
    <div class="card vote">
          <div className="card-header">
            <span className="pull-right">{props.title}</span>
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>Position: {props.summary}</p>
              <p>{props.summary}</p>
              <p>{props.date}</p>
              <footer className="blockquote-footer">{props.latestAction}</footer>
            </blockquote>
          </div>
        </div>;

export default Vote;
