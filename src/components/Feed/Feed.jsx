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

    this.setState({
      issues: issues
    });
  }

  renderIssues() {
    return this.state.issues.map(
      (issue, index) => {
        if (issue && issue.title) {
          console.log(issue);
          return <Issue key={index} issue={issue}></Issue>
        }
      }
    )
  }

  render() {
    return (
      <div className="Feed">
        <ul>{this.renderIssues()}</ul>
      </div>
    );
  }
}

const FeedWithInfo = withInfo(Feed);
export default FeedWithInfo;