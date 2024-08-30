import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Link from './Link';
import './static/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <Main />
        <div className="App-icon-links">
          <Link url='https://github.com/agnaite' icon='fa-github-alt' />
          <Link url='https://linkedin.com/in/agnaite' icon='fa-linkedin' />
        </div>
      </div>
    );
  }
}

export default App;
