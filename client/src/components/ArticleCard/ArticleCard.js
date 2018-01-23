import React from "react";
import "./ArticleCard.css";

const ArticleCard = props =>
  <div className="card article text-left">
          <div className="card-header">
            <h5><a href={props.url} target="_blank" class="font-weight-bold text-left">
            {props.title}<span className="pull-right">Save</span>
            </a></h5>
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{props.summary}</p>
              <footer className="blockquote-footer">{props.date}</footer>
            </blockquote>
          </div>
          <br/>
        </div>;

export default ArticleCard;
