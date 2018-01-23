import React from "react";
import "./ArticleCard.css";

const ArticleCard = props =>
  <div className="card article text-left">
    <div className="card-header">
      <h5><a href={props.url} target="_blank" className="text-left">
        <span className="align-middle">{props.title}</span>
      </a></h5>
    </div>
    <div className="card-body">
      <blockquote className="blockquote mb-0">
        <img src={props.photo} alt="News Story" className="newsImage float-right" />
        <p>{props.summary}</p>
        <footer className="blockquote-footer">{props.date}</footer>
      </blockquote>
    </div>
    <br/>
  </div>;

export default ArticleCard;
