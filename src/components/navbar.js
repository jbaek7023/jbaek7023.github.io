import React, { Component } from 'react';
import { Link } from 'react-router';
import App from './app'
import Projects from './projects_page/projects'

export default class Navbar extends Component {
  renderLogo() {
    return(
      <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
          <Link to='/' className="navbar-brand name-brand">Jae-Min Baek</Link>
      </div>
    );
  }

  renderCategoryRight() {
    return(
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
              <li>
                  <Link to='/'>About</Link>
              </li>
              <li>
                  <Link to='/projects'>Projects</Link>
              </li>
              <li>
                  <Link to='/resume'>Resume</Link>
              </li>
          </ul>
      </div>
    );
  }

  render() {
    return(
      <div>
          <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
            <div className="container topnav">
                {this.renderLogo()}
                {this.renderCategoryRight()}
            </div>
        </nav>
      </div>
    );
  }
}
