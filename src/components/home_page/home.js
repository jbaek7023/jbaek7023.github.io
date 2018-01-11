import React, { Component } from 'react';
import Jumbotron from './jumbotron'
import Hello from './hello'
import MainProjects from './main_projects_thumbnails'

export default class Home extends Component {


  render() {
    return (
      <div>
        <Jumbotron />
        <Hello />
        <MainProjects />
      </div>
    );
  };
}
