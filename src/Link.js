import React, { Component } from 'react';
import './static/css/Link.css';

class Link extends Component {
  render() {
    return (
      <a href={ this.props.url }>
        <i className={`fa fa-2x ${ this.props.icon }`} aria-hidden="true"></i>
      </a>
    );
  }
}

export default Link;
