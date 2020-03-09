import React from 'react';
import './project.css';

export const Project = props => {
  return (
    <div className="project">
      <h1>{props.title}</h1>
      <img src={props.image} alt="bild"></img>
      <p>{props.text}</p>
    </div>
  );
};
