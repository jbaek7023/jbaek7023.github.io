import React, { Component } from 'react';
import { connect } from 'react-redux';


class Projects extends Component {
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
        <li className="list-group-item">System&amp; Architecture</li>
        <li className="list-group-item">Information&amp; Network</li>
        <li className="list-group-item">Mobile Development</li>
      </ul>
    );
  }

  renderThumbnail(project) {
    return (
      <div key={project.title} className="col-md-4">
        <div className="thumbnail">
          <img alt="Bootstrap Thumbnail Third" src={ project.img_src } />
          <div className="caption">
            <h3>
              { project.title }
            </h3>
            <p>
              { project.description }
            </p>
            <p>
              <a className="btn btn-primary" href="#">Action</a> <a className="btn" href="#">Action</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  //if all, deep_learning, machine_learning, sys_arc, web, mob
  renderProjects() {
    return (
      <div className="row">
        {this.props.projects[0].all.map((project) => {
          return(this.renderThumbnail(project))
        })}
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

function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Projects);
