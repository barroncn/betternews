import React from "react";
import "./ArticleDisplay.css";

const ArticleDisplay = props =>
  <div className="theArticles">
    <h2 className="articleHeader">The Latest from Politico News</h2>
    <div className="articleDisplay">
      {props.children}
    </div>
  </div>;

export default ArticleDisplay;
