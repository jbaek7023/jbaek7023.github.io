import React, { Component } from 'react';

export default class Projects extends Component {
  renderDescriptionContent() {
    return(
      <div className="content-section-c">
        <div className="container">
          <div className="row">
            <div clclassNameass="col-md-12">
              <h2><i className="fa fa-arrow-circle-right" aria-hidden="true"></i> Projects</h2>
                <p>List of projects filtered by subject matter</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderProjectList() {
    return (
      <ul className="list-group categories">
        <li className="list-group-item">All projects</li>
        <li className="list-group-item">Deep Learning</li>
        <li className="list-group-item">Machine Learning</li>
        <li className="list-group-item">System&amp;Architecture</li>
        <li className="list-group-item">Web Development</li>
        <li className="list-group-item">Mobile Development</li>
      </ul>
    );
  }

  //projects.map((project) => { return (<div>project.title</div>);})
  renderProjects() {
    return (
      <div className="row">

      </div>
    );
  }

  renderProjectListAndContent() {
    return (
      <div className="content-section-b">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              {this.renderProjectList()}
            </div>
            <div className="col-md-10">
              {this.renderProjects()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.renderDescriptionContent() }
        { this.renderProjectListAndContent() }
      </div>
    );
  };
}
