import React, { Component } from 'react';
import './static/css/Main.css';

class Main extends Component {
  render() {
    return (
      <p className="App-intro col-sm-6">
        My name is <h1>Agnė Klimaitė</h1> and I am a software engineer at <a className="App-links" href="https://heroku.com" title="Heroku"> Heroku </a> based in Vienna.<br /><br />
        I <span className="App-emoji-heart">♡</span> sunny days, travel, knitting, good food & wine.
        In my spare time, I make apps for fun. Check out <a className="App-links" href="https://planty-hb.herokuapp.com" title="Planty">Planty</a> and <a className="App-links" href="http://beta.unoji.click" title="Unoji">Unoji</a>.<br /><br />
        <div hidden>I am looking for cool opportunities in fullstack or frontend development.</div> You can find my resume <a className="App-links" href="https://www.dropbox.com/s/bmvuf8padlmeg17/klimaite_resume%202.pdf?dl=0">here</a>, let's talk!<br /><br />
        Thanks for visiting <span role="img" className="Dolphin-emoji" aria-label="dolphin">🐬</span>
      </p>
    );
  }
}

export default Main;
