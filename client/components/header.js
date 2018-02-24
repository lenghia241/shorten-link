import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
  render() {
    return(
      <nav className="nav navbar-default">
        <div className="navbar-header">
            <a className="navbar-brand">Shorten My Link</a>
        </div>     
      </nav>
    );
  }
}

export default Header;