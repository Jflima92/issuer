import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Feed from '../Feed';
import Issue from '../../Issue';

jest.mock('../Queries/WithInfo');

describe('Issue', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Feed />, div);
  });
})