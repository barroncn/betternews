import React from "react";

const Nav = props =>
    <div className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand is-size-3">
             My Reps 
             <div className="is-size-5 has-text-right navbar-item navbar-end">
                {props.message} 
                <a className="navbar-item">{props.linkone}</a>
                <a className="navbar-item">{props.linktwo}</a>
              </div>
          </div>
        </div>;

export default Nav;
