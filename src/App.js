import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import agne from './agne-1.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="App-header">
          <img className="App-logo" src={agne} alt='agne klimaite' /><h2 className="App-title">hi there🦄✨</h2>
        </div>
        <p className="App-intro col-sm-6">
          My name is <h1>Agne Klimaite</h1> and I am a software engineer based in San Francisco.<br /><br />
          I <span className="App-emoji-heart">♡</span> sunny days, travel, electronic musik, CSS, Berlin, good food & wine.
          In my spare time, I make apps for fun. Check out <a className="App-links" href="https://planty-hb.herokuapp.com" title="Planty">Planty</a> and <a className="App-links" href="http://beta.unoji.click" title="Unoji">Unoji</a>.<br /><br />
          I am looking for cool opportunities in fullstack or frontend development. You can check out my resume <a className="App-links" href="https://www.dropbox.com/s/tk0tzw6uyn5yqp3/klimaite_resume_2017.pdf?dl=0">here</a>, let's talk!<br /><br />
          Thanks for visiting 💕
        </p>
        <div className="App-icon-links">
          <a href="https://github.com/agnaite" title="GitHub agnaite"><i className="fa fa-github-alt fa-2x" aria-hidden="true"></i></a>
          <a href="https://twitter.com/agnaite" title="Twitter agnaite"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
          <a href="https://linkedin.com/in/agnaite" title="LinkedIn agnaite"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        </div>
      </div>
    );
  }
}

export default App;
