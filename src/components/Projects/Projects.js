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
      toggled: false,
    };
  }

  close = (event) => {
    this.props.close(event, this.projects);
  };

  render() {
    return (
      <div
        ref={this.projects}
        className="projects-background"
        onClick={(event) => this.close(event)}
        onScroll={(event) => {
          if (event.target.scrollTop < -50) this.props.close(event);
        }}
        style={{
          pointerEvents: this.props.toggled ? 'initial' : 'none',
          overflow: this.props.toggled ? 'auto' : 'hidden',
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
            onClick={(event) => this.close(event)}
          />
          <Project
            title="Typer"
            image={typer}
            link="https://typer-14eb6.firebaseapp.com/"
            text={[
              'En sida där man kan tävla mot andra i att skriva snabbt. Sidan är skriven i React och använder Firebase som backend för att lagra texter och cloud functions för att kommunicera mellan spelarna.',
            ]}
          ></Project>
          <Project
            title="Chatter-O"
            link="https://chatter-o.herokuapp.com/"
            image={chatter}
            text={[
              'En hemsida som håller en öppen chat mellan alla som ansluter.',
              <br />,
              <br />,
              'Frontend byggd i React och en backend i NodeJS, med MongoDB som databas. Både klienten och servern är uppladdade på heroku.',
            ]}
          ></Project>
          <Project
            title="Internship på Alvira"
            image={alvira}
            link="https://alvira.se"
            text={[
              'På Alvira så utvecklade jag UI:t av deras mobilapp. Flutter användes för att kunna bygga till både Android och iOS. Utöver att bygga mobila applikationer så fick jag också erfarenhet i att arbeta i ett litet team och tillsammans lösa problem.',
            ]}
          ></Project>
          <Project
            title="Konsultuppdrag åt Arboreal"
            image={arboreal}
            link="https://www.arboreal.se/"
            text={[
              'I ett skolprojekt hjälpte vi startupen Arboreal med ett designförslag på hur deras app kunde förbättras både funktions- och designmässigt.',
              <br />,
              <br />,
              'Arbetetet gick bl.a. ut på att göra en omvärldsanalys där vi tog reda på hur målgruppen skulle använda appen. Vår hi-fi prototyp skapad i Adobe XD.',
            ]}
          ></Project>
          <Project
            title="25 Minutes"
            link="https://github.com/oscarheimdahl/break-timer/releases/tag/v1.0"
            image={twentyfive}
            text={[
              'Ett native program till windows och macOS som påminner en om att ofta ta raster.',
            ]}
          ></Project>
          <Project
            title="Gradient Picker"
            image={gradient}
            link="https://oscarheimdahl.github.io/gradient-picker/"
            text={[
              ' Jag byggde ett smidigt verktyg i React för att enkelt kunna se på olika gradienter i CSS. Verktyget tillåter en att exportera gradienterna som CSS eller som en PNG.',
            ]}
          ></Project>
          <Project
            title="Tetris"
            image={tetris}
            link="https://oscarheimdahl.github.io/tetris/"
            text={[
              'Tetris!',
              <br />,
              'Byggt i JavaScript med biblioteket',
              <a href="https://p5js.org/"> p5.js </a>,
              'för att rita på canvas.',
            ]}
          ></Project>
        </div>
      </div>
    );
  }
}

export default Projects;
