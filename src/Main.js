import React, { Component } from 'react';

import Contact from './components/Contact/Contact';
import Boxes from './components/Boxes/Boxes';
import About from './components/About/About';
import Colors from './components/Colors/Colors';
import Projects from './components/Projects/Projects';
import './main.css';

export class Main extends Component {
  state = { aboutPage: false, projectsPage: false };

  closeAbout = event => {
    if (
      event.target.className === 'about-background' ||
      event.target.className === 'close-button'
    )
      this.setState({ aboutPage: false });
  };

  closeProjects = (event, ref) => {
    if (
      event.target.className === 'projects-background' ||
      event.target.className === 'close-button'
    ) {
      ref.current.scrollTop = 0;
      this.setState({ projectsPage: false });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="background">
          <div className="center-container">
            <div className="intro">
              <div className="intro-row1">
                <Colors />
                <div className="titles">
                  <h1 className="name">
                    OSCAR
                    <br />
                    HEIMDAHL
                  </h1>
                  <h2 className="title">
                    Civilingenjör i Interaktion & Design
                  </h2>
                </div>
              </div>
            </div>

            <div className="main-buttons">
              <div
                className="main-button about-button"
                onClick={() => this.setState({ aboutPage: true })}
              >
                Om mig
              </div>
              <div
                className="main-button"
                onClick={() => this.setState({ projectsPage: true })}
              >
                Projekt
              </div>
            </div>
          </div>

          <Boxes></Boxes>
        </div>
        <Contact></Contact>
        <Projects
          close={this.closeProjects}
          toggled={this.state.projectsPage}
        ></Projects>
        <About close={this.closeAbout} toggled={this.state.aboutPage}></About>
      </div>
    );
  }
}

export default Main;
