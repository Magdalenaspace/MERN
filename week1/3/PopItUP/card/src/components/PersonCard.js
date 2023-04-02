import React from "react";
// go to public add bootstrap
// ! In React, components are defined as functions that take in props (input) and return a description of the UI (output) , capital letter mast -> can be js or jsx
const PersonCard = (props) => {   
    const { firstName, lastName, hairColor } = props; //destruction
    // left side key name  = right side is the object
    // PersonCard functional component  that renders this HTML props are inputs and are obects 
    return (
        <div className="container"> 
        {/* add the class to the class name for bootstrap? */}
            <h2>{firstName}, {lastName}</h2>  
             {/* any js code goes with {}  */}
            <p>Age: {props.age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}

export default PersonCard //export automatically imports in ap.js
//JS JSX Snippets
