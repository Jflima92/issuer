import React, { Component } from 'react';
import './Feed.css';
import { withInfo } from './Queries/WithInfo';
import Issue from '../Issue';

class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      issues: Array(20).fill(null)
    };
  }

  componentWillReceiveProps(newProps) {
    const issues = newProps.data.search.nodes;
    console.log(issues)

    this.setState({
      issues: issues
    });
  }

  render() {
    return (
      <div className="Feed">
        {this.state.issues.map(
          (issue, index) => {
            return <Issue key={index}></Issue>
          }
        )}
      </div>
    );
  }
}

const FeedWithInfo = withInfo(Feed);
export default FeedWithInfo;