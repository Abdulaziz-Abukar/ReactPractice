import React from "react";
import AbdulImage from '../../assets/Jinwoo.jpg';
import './BusinessCard.css';


function BusinessCard() {
    const abdul = {
        name: 'Abdulaziz Abukar',
        'job title': 'Software Developer',
        location: 'Calgary, AB',
        contact: 'https://www.linkedin.com/in/abdul-abukar/',
        src: AbdulImage,
        alt: 'Image of me'
    };

    return (
     <div className="business-card">
        <h1>{abdul.name}</h1>
        <img src={abdul.src} alt={abdul.alt} />
        <h2>{abdul['job title']}</h2>
        <p>{abdul.location}</p>
        <p><a href={abdul.contact} target="_blank">LinkedIn</a></p>
     </div>   
    );
}

export default BusinessCard;