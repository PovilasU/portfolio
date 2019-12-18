import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Povilas. I'am a software engineer.</p>
        <p>I'm always looking forward to work on meaningful projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Oslo, and code every day.</p>
            <p>
              My favorite language is JavaScript, and I this React.js is
              awesome.
            </p>
            <p>Besides coding, I also love movies and music!</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
