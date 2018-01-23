import React from "react";
import "./Nav.css";

const Nav = props =>
  <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">My Reps</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <span className="navbar-text pull-right">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href={props.linkOne}>{props.linkOneDisplay}</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href={props.linkTwo}>{props.linkTwoDisplay}</a>
                </li>
            </ul>
        </span>
      </div>
    </nav>;

export default Nav;
