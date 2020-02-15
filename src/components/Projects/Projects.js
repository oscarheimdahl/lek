import React, { Component } from 'react';
import './projects.css';
import bild from '../../resources/bild.jpg';
export class Projects extends Component {
  render() {
    return (
      <div
        className="projects-background"
        onClick={event => this.props.close(event)}
        style={{
          pointerEvents: this.props.toggled ? 'visible' : 'none',
          overflow: this.props.toggled ? 'auto' : 'hidden'
        }}
      >
        <div
          className="projects"
          style={{ top: this.props.toggled ? '100px' : '100vh' }}
        >
          <div className="project">
            <h3>Här är projekt 1</h3>
            <img src={bild} alt="bild"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
