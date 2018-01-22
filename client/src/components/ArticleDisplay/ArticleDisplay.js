import React from "react";
import "./ArticleDisplay.css";

const ArticleDisplay = props =>
    <div className="theArticles">
      <h2 className="articleHeader">The Latest in Politics</h2>
      <div className="articleDisplay">
        {props.children}
      </div>
    </div>;

export default ArticleDisplay;
