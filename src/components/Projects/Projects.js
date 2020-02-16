import React, { Component } from 'react';
import './projects.css';
import typer from '../../resources/projects/typer.jpg';
import alvira from '../../resources/projects/alvira.jpg';
import arboreal from '../../resources/projects/arboreal.png';
import tetris from '../../resources/projects/tetris.png';
import close from '../../resources/icons/x.png';

export class Projects extends Component {
  render() {
    return (
      <div
        className="projects-background"
        onClick={event => this.props.close(event)}
        onScroll={event => {
          if (event.target.scrollTop < -50) this.props.close(event);
        }}
        style={{
          pointerEvents: this.props.toggled ? 'initial' : 'none',
          overflow: this.props.toggled ? 'auto' : 'hidden'
        }}
      >
        <div
          className="projects"
          style={{ top: this.props.toggled ? '0px' : '3500px' }}
        >
          <img
            className="close-button"
            src={close}
            alt="Stäng"
            onClick={event => this.props.close(event)}
          />
          <div className="project">
            <h1>Typer</h1>
            <img src={typer} alt="bild"></img>
            <p>
              En sida där man kan tävla mot andra i att skriva snabbt. Sidan är
              skriven i React och använder Firebase som backend för att lagra
              texter och cloud functions för att kommunicera mellan spelarna.{' '}
              <br />
              <br />
              Sidan hittar du{' '}
              <a href="https://typer-14eb6.firebaseapp.com/">här!</a>
            </p>
          </div>
          <div className="project">
            <h1>Internship på Alvira</h1>
            <img src={alvira} alt="bild"></img>
            <p>
              På <a href="https://alvira.se">Alvira</a> så utvecklade jag UI:t
              av deras mobilapp. Flutter användes för att kunna bygga till både
              Android och iOS. Utöver att bygga mobila applikationer så fick jag
              också erfarenhet i att arbeta i ett litet team och tillsammans
              lösa problem.
            </p>
          </div>
          <div className="project">
            <h1>Konsultuppdrag åt Arboreal</h1>
            <img src={arboreal} alt="bild"></img>
            <p>
              I ett skolprojekt hjälpte vi startupen{' '}
              <a href="https://www.arboreal.se/">Arboreal</a> med ett
              designförslag på hur deras app kunde förbättras både funktions-
              och designmässigt. <br />
              <br /> Arbetetet gick bl.a. ut på att göra en omvärldsanalys där
              vi tog reda på hur målgruppen skulle använda appen. Vår
              slutgiltiga överlämning till Arboreal var en klickbar hi-fi
              prototyp skapad i Adobe XD.
            </p>
          </div>
          <div className="project">
            <h1>Tetris</h1>
            <img src={tetris} alt="bild"></img>
            <p>
              Tetris! <br /> Byggt i JavaScript med biblioteket{' '}
              <a href="https://p5js.org/">p5.js</a> för att rita på canvas.{' '}
              <br /> Spela{' '}
              <a href="https://oscarheimdahl.github.io/tetris/">här!</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
