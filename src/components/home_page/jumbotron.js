import React from 'react';

export default () => {
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
