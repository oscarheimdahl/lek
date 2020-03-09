import React, { Component } from 'react';
import './projects.css';
import { Project } from '../Project/Project';
import typer from '../../resources/projects/typer.png';
import alvira from '../../resources/projects/alvira.png';
import chatter from '../../resources/projects/chatter.png';
import arboreal from '../../resources/projects/arboreal.png';
import tetris from '../../resources/projects/tetris.png';
import gradient from '../../resources/projects/gradient.png';
import twentyfive from '../../resources/projects/25.png';
import close from '../../resources/icons/x.png';

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.projects = React.createRef();
    this.state = {
      toggled: false
    };
  }

  close = event => {
    this.props.close(event, this.projects);
  };

  render() {
    return (
      <div
        ref={this.projects}
        className="projects-background"
        onClick={event => this.close(event)}
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
          style={{ top: this.props.toggled ? '0px' : '100vh' }}
        >
          <img
            className="close-button"
            src={close}
            alt="Stäng"
            onClick={event => this.close(event)}
          />
          <Project
            title="Typer"
            image={typer}
            text={[
              'En sida där man kan tävla mot andra i att skriva snabbt. Sidan är skriven i React och använder Firebase som backend för att lagra texter och cloud functions för att kommunicera mellan spelarna.',
              <br />,
              <br />,
              'Sidan hittar du ',
              <a href="https://typer-14eb6.firebaseapp.com/">här!</a>
            ]}
          ></Project>
          <Project
            title="Chatter-O"
            image={chatter}
            text={[
              'En hemsida som håller en öppen chat mellan alla som ansluter.',
              <br />,
              <br />,
              'Frontend byggd i React och en backend i NodeJS, med MongoDB som databas. Både klienten och servern är uppladdade på heroku.',
              <br />,
              <br />,
              <a href="https://chatter-o.herokuapp.com/">Chatta här!</a>
            ]}
          ></Project>
          <Project
            title="Internship på Alvira"
            image={alvira}
            text={[
              'På',
              <a href="https://alvira.se"> Alvira </a>,
              'så utvecklade jag UI:t av deras mobilapp. Flutter användes för att kunna bygga till både Android och iOS. Utöver att bygga mobila applikationer så fick jag också erfarenhet i att arbeta i ett litet team och tillsammans lösa problem.'
            ]}
          ></Project>
          <Project
            title="Konsultuppdrag åt Arboreal"
            image={arboreal}
            text={[
              'I ett skolprojekt hjälpte vi startupen',
              <a href="https://www.arboreal.se/"> Arboreal </a>,
              'med ett designförslag på hur deras app kunde förbättras både funktions- och designmässigt.',
              <br />,
              <br />,
              'Arbetetet gick bl.a. ut på att göra en omvärldsanalys där vi tog reda på hur målgruppen skulle använda appen. Vår hi-fi prototyp skapad i Adobe XD.'
            ]}
          ></Project>
          <Project
            title="25 Minutes"
            image={twentyfive}
            text={[
              'Ett native program till windows och macOS som påminner en om att ofta ta raster.'
            ]}
          ></Project>
          <Project
            title="Gradient Picker"
            image={gradient}
            text={[
              ' Jag byggde ett smidigt verktyg i React för att enkelt kunna se på olika gradient i CSS. Verktyget tillåter en att exportera gradienterna som CSS eller som en PNG.',
              <br />,
              'Ni kan kika på den',
              <a href="https://oscarheimdahl.github.io/gradient-picker/">
                {' '}
                här!
              </a>
            ]}
          ></Project>
          <Project
            title="Tetris"
            image={tetris}
            text={[
              'Tetris!',
              <br />,
              'Byggt i JavaScript med biblioteket',
              <a href="https://p5js.org/"> p5.js </a>,
              'för att rita på canvas.',
              <br />,
              'Spela',
              <a href="https://oscarheimdahl.github.io/tetris/"> här!</a>
            ]}
          ></Project>
        </div>
      </div>
    );
  }
}

export default Projects;
