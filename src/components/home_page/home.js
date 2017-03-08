import React, { Component } from 'react';

export default class Home extends Component {
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

  renderProjectIntro() {
    return (
      <div>intro here!</div>
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
