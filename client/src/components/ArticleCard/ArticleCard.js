import React from "react";
import "./ArticleCard.css";

const ArticleCard = props =>
    <div class="card article">
          <div className="card-header">
            <a href={props.url}>
            {props.title}<span className="pull-right">Save</span>
            </a>
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{props.summary}</p>
              <footer className="blockquote-footer">{props.date}</footer>
            </blockquote>
          </div>
        </div>;

export default ArticleCard;
