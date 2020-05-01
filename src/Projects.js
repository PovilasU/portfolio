import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component {
  render() {
    const {
      title,
      image,
      description,
      link,
      linktext,
      githug,
      br,
    } = this.props.project;

    return (
      <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
        <h3>{title}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="profile" style={{ width: 200, height: 120 }} />
        </a>

        <p>{description}</p>
        {br && <br />}
        <a href={githug} target="_blank" rel="noopener noreferrer">
          {linktext}
        </a>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Highlighted Projects</h2>
        <div>
          {PROJECTS.map((PROJECT) => {
            return <Project key={PROJECT.id} project={PROJECT}></Project>;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
