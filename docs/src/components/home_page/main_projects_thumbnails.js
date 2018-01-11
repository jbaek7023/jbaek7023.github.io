import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class MainProjects extends Component {
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

  render(){
    return (
      <div className="project-thumbnails">
        <div className="container">
          <div className="row">
            <br />
            <div className="col-md-12">
              <h2>Projects <Link to='/projects'><span className="pull-right more text-bottom">More &gt;&gt;&nbsp;&nbsp;&nbsp;&nbsp;</span></Link></h2>
            </div>
          </div>
          <div className="row">
            {this.props.projects.map((project) => {
              return(this.renderThumbnail(project))
            })}
          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.main_projects
  }
}

export default connect(mapStateToProps)(MainProjects);
