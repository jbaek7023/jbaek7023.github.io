import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectThumbnails extends Component {
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
      <div className="row">
        {this.props.projects[0].all.map((project) => {
          return(this.renderThumbnail(project))
        })}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(ProjectThumbnails);
