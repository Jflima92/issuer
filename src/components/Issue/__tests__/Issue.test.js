import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { issue } from '../Mocks/Issue.mock'
import Issue from '../Issue';

describe('Issue', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Issue issue={issue} />, div);
  });
})