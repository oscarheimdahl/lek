import React, { Component } from 'react';

import Contact from './components/Contact/Contact';
import Boxes from './components/Boxes/Boxes';
import About from './components/About/About';
import './style/intro.css';

export class App extends Component {
  state = { aboutPage: false };

  closeAbout = event => {
    if (event.target.className === 'about-background')
      this.setState({ aboutPage: false });
  };

  render() {
    return (
      <div className="App">
        <div className="background">
          <div className="center-container">
            <div className="intro">
              <h1 className="name">Oscar Heimdahl</h1>
              <h2 className="title">Civilingenjör i Interaktion & Design</h2>
            </div>

            <div className="main-buttons">
              <div
                className="main-button about-button"
                onClick={() => this.setState({ aboutPage: true })}
              >
                Om mig
              </div>
              <div className="main-button">Projekt</div>
            </div>
          </div>

          <Boxes></Boxes>
        </div>
        <Contact></Contact>
        <About close={this.closeAbout} toggled={this.state.aboutPage}></About>
      </div>
    );
  }
}

export default App;
