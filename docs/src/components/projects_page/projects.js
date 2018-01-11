import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from './projects_category';
import ProjectThumbnails from './projects_thumbnails'

export default class Projects extends Component {
  // Render the Description
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

  // Render Project List and Contents
  renderProjectListAndContent() {
    return (
      <div className="content-section-b">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <Categories />
            </div>
            <div className="col-md-10">
              <ProjectThumbnails />
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
