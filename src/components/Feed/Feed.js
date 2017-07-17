import React, { Component } from 'react';
import './Feed.css';

class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      issues: Array(20).fill(null)
    };
  }

  render() {
    return (
      <div className="Feed">

      </div>
    );
  }
}
export default Feed;