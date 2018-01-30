import React from "react";
import "./RepDisplay.css";

const RepDisplay = props =>
    <div>
        <button type="button" onClick={() => props.onClick("Senator,")} className="btn btn-dark">Senators</button> <button type="button" onClick={() =>props.onClick("Representative")} className="btn btn-dark"> House Representatives</button>  
        <div className = "jumbotron text-center" >
            <div className="scrollwrapper">
                <div className="card-deck">
                    {props.children}
                </div>
            </div> 
        </div> 
    </div>;

export default RepDisplay;
