import React, { Component } from 'react';

export default class Categories extends Component {
  render(){
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
}
