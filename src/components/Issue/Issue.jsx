import React, { Component } from 'react';
import './Issue.css';

class Issue extends Component {

  render() {
    const issue = this.props.issue;
    const noImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmph60IV4crXtipTBXvZ4MW5giOLNy2EEhFRMotmorQuTl2iKRh8PEWk';
    console.log(issue)
    return (
      <li className="Issue">
        <div className="Left-Container">
          <img src={issue.author.avatarUrl ? issue.author.avatarUrl : noImage} alt="authorImage" className="Author-Picture"></img>
        </div>
        <div className="Right-Container">
          <p className="Issue-Title">{issue.title}</p>
          <p className="Issue-Text">Text</p>
          <p className="Issue-CreatedAt">{issue.createdAt}</p>
        </div>
      </li>
    );
  }
}

export default Issue;