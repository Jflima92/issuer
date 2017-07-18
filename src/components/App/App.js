import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { createApolloClient } from './Apollo'
import './App.css';
import { login } from '../../services/GithubService';
import { username, password } from '../../config';
import Header from '../Header'
import Feed from '../Feed'

let client = null;

class App extends Component {
  constructor() {
    super();
    this.state = { login: false };
  }

  componentDidMount() {
    if (username === '') {
      throw new Error('You should insert your github username and password in config.js.');
    }

    login(username, password).then(token => {
      console.log(token)
      client = createApolloClient(token)
      this.setState({ login: true });
    });
  }

  render() {
    if (!this.state.login) {
      return <p>Login...</p>
    }

    return this.state.login ? (
      <div className="App">
        <Header></Header>
        <ApolloProvider client={client}>
          <Feed></Feed>
        </ApolloProvider>
      </div>
    ) : <p>Logging in...</p>;
  }
}

export default App;
