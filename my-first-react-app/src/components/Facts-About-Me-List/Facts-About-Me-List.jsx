import React from "react";
import './Facts-About-Me-List.css';

function FactsAboutMe() {
    const myFacts = ['I love DBZ', 'Coding is my favourite', 'Video Games are my thing', 'Pizza is my favourite food'];

    const renderedListItems = myFacts.map((fact, index) => (
        <li key={index} className="list-item">{fact}</li>
    ));

    return <ul className="list-container">{renderedListItems}</ul>
}

export default FactsAboutMe;