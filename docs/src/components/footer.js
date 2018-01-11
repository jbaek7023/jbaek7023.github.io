import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
      return (
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="copyright text-muted small">&copy; Jae Min Baek 2017 - All Rights Reserved<span className="pull-right">Designed by Jae Min Baek</span></p>
              </div>
            </div>
          </div>
        </footer>
      );
  }
}
