import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

//Define Mocks
jest.mock('../../../configs/config');
jest.mock('../../../services/GithubService');
jest.mock('../Apollo');

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

})

