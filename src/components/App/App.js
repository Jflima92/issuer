import React, { Component } from 'react';
import './App.css';
import Header from '../Header'
import Feed from '../Feed'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Feed></Feed>
      </div>
    );
  }
}

export default App;
