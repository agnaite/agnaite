import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import agne from './agne-1.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="App-header">
          <img className="App-logo" src={agne} alt='agne' /><h2 className="App-title">hi there🦄✨</h2>
        </div>
        <p className="App-intro col-sm-6">
          My name is Agne Klimaite and I am a software engineer based in San Fransisco.<br /><br />
          I am looking for cool opportunities in fullstack or frontend development, let's talk!<br /><br />
          Some of my favorite things are sunny days, travel, CSS, Berlin, good food & wine.<br /><br />
          Thanks for visiting 💕
        </p>
        <div className="App-links">
          <i className="fa fa-github-alt fa-2x" aria-hidden="true"></i>
          <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
          <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default App;
