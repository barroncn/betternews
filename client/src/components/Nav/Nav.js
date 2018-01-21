import React from "react";

const Nav = props =>
    <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand is-size-3">
             My Reps 
             <div class="is-size-5 has-text-right navbar-item navbar-end">
                {props.message} 
                <a class="navbar-item" style={props.currentPage === "Home" ? "" : "display:none"}>Login</a>
                <a class="navbar-item">{props.linktwo}</a>
              </div>
          </div>
        </nav>;

export default Nav;
