import React, { Component } from 'react';

import Contact from './components/Contact/Contact';
import Boxes from './components/Boxes/Boxes';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import './main.css';

export class Main extends Component {
  state = { aboutPage: false, projectsPage: false };

  closeAbout = event => {
    if (event.target.className === 'about-background')
      this.setState({ aboutPage: false });
  };

  closeProjects = event => {
    console.log(event.target.className);
    if (event.target.className === 'projects-background')
      this.setState({ projectsPage: false });
    console.log(this.state);
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
