import React, { Component } from 'react';
import agne from './static/images/agne-2.jpg';
import './static/css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img className="App-logo" src={agne} alt='agne klimaite' />
        <h2 className="App-title">hi there<span role="img" aria-label="butterfly sparkle">🦋🇺</span></h2>
      </div>
    );
  }
}

export default Header;
