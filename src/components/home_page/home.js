import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
class Home extends Component {
  renderJumbotron() {
    return (
      <div className="intro-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
            </div>
            <div className="col-lg-8">
              <div className="intro-message">
                <h1>Jae-Min Baek</h1>
                <h3>Deep Learning, Machine Learning, Software Engineering</h3>
                <hr className="intro-divider" />
                <ul className="list-inline intro-social-buttons">
                  <li>
                    <a href="https://www.linkedin.com/in/jae-min-baek-379b45130/" className="btn btn-default btn-lg" target="_blank"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                  </li>
                  <li>
                    <a href="https://github.com/jbaek7023" className="btn btn-default btn-lg" target="_blank"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    );
  }

  renderHello() {
    return (
      <div className="content-section-a">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-6">
            <hr className="section-heading-spacer" />
            <div className="clearfix"></div>
              <h2 className="section-heading">Hi there<br/>Special Thanks</h2>
              <p className="lead">I am a founder of Wardrobe which opens world. I'm passionate about any fields of software including web, mobile, data science, and system architecture. Among these concepts, Data Science became my passion while I create b. I'm finishing my Bachelor of Science in Computer Science at Georgia Tech on Dec, 2018. </p>
            </div>
            <div className="col-lg-4  col-sm-6">
                <img id="image-0" src="http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
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

  renderProjectIntro() {
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

  render() {
    return (
      <div>
        { this.renderJumbotron() }
        { this.renderHello() }
        { this.renderProjectIntro() }
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    projects: state.main_projects
  }
}

export default connect(mapStateToProps)(Home)
