import React, { Component } from 'react';
import './projects.css';
import typer from '../../resources/typer.jpg';
import alvira from '../../resources/alvira.jpg';
export class Projects extends Component {
  render() {
    return (
      <div
        className="projects-background"
        onClick={event => this.props.close(event)}
        onScroll={event => {
          if (event.target.scrollTop < -30) this.props.close(event);
        }}
        style={{
          pointerEvents: this.props.toggled ? 'initial' : 'none',
          overflow: this.props.toggled ? 'auto' : 'hidden'
        }}
      >
        <div
          className="projects"
          style={{ top: this.props.toggled ? '0px' : '2000px' }}
        >
          <div className="project">
            <h1>Typer</h1>
            <img src={typer} alt="bild"></img>
            <p>
              En sida där man kan tävla mot andra i att skriva snabbt. Sidan är
              skriven i React och använder Firebase som backend för att lagra
              texter och cloud functions för att kommunicera mellan spelarna.
              Sidan hittar du{' '}
              <a href="https://typer-14eb6.firebaseapp.com/">här!</a>
            </p>
          </div>
          <div className="project">
            <h1>Intern på Alvira</h1>
            <img src={alvira} alt="bild"></img>
            <p>
              På <a href="https://alvira.se">Alvira</a> så implementerade jag
              UI:t av deras mobilapp. Flutter användes för att kunna bygga till
              både Android och iOS. Utöver att bygga mobila applikationer så
              fick jag också erfarenhet i att arbeta i ett litet team och
              tillsammans lösa problem.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
