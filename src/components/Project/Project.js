import React from 'react';
import './project.css';

export const Project = (props) => {
  return (
    <div className="project">
      <h1>{props.title}</h1>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <div className="image-container">
          <img src={props.image} alt="bild"></img>
        </div>
      </a>
      <p>{props.text}</p>
    </div>
  );
};
