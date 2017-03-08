import React, { Component } from 'react';

export default class Jumbotron extends Component {
  render() {
      return(
        <div class="intro-header">
          <div class="container">
              <div class="row">
                  <div class="col-lg-2"></div>
                  <div class="col-lg-8">
                      <div class="intro-message">
                          <h1>Jae-Min Baek</h1>
                          <h3>Deep Learning, Machine Learning, Software Engineering</h3>
                          <hr class="intro-divider">
                          <ul class="list-inline intro-social-buttons">
                              <li>
                                <a href="https://www.linkedin.com/in/jae-min-baek-379b45130/" class="btn btn-default btn-lg"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a>
                              </li>
                              <li>
                                <a href="https://github.com/jbaek7023" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                              </li>

                          </ul>
                      </div>
                  </div>
                  <div class="col-lg-2"></div>
              </div>
          </div>
      </div>
      );
  }
}
