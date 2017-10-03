import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import './static/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <Main />
        // App icons
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
