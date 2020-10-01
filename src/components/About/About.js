import React, { Component } from 'react';

import './about.css';
import profile from '../../resources/jag.png';
import close from '../../resources/icons/x.png';

export class About extends Component {
  render() {
    return (
      <div
        className="about-background"
        onClick={(event) => this.props.close(event)}
        onScroll={(event) => {
          if (event.target.scrollTop < -50) this.props.close(event);
        }}
        style={{ pointerEvents: this.props.toggled ? 'initial' : 'none' }}
      >
        <div
          className="about"
          style={{ top: this.props.toggled ? 0 : '150vh' }}
        >
          <img
            className="close-button"
            src={close}
            alt="Stäng"
            onClick={(event) => this.props.close(event)}
          ></img>
          <img className="profile" src={profile} alt="bild på mig" />
          <div className="profile-text">
            <h2>Hej!</h2>
            Oscar heter jag och går nu fjärde året på Civilingenjörsutbildningen
            Interaktion & Design i Umeå. Jag älskar att programmera och vill
            arbeta med frontend-utveckling.
            <br />
            <br />
            Jag har erfarenhet inom webbutveckling, är mycket bekväm i
            JavaScript och flera av dess bibliotek och ramverk som t.ex. React.
            Jag har även arbetat med mobilutveckling, design och kan de flesta
            av Adobes program, som Photoshop och illustrator. Jag är alltid
            sugen på att lära mig mer och att jobba med nya spännande verktyg!
          </div>
        </div>
      </div>
    );
  }
}

export default About;
