import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { issue } from '../Mocks/Issue.mock'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Issue from '../Issue';


describe('Issue', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MuiThemeProvider>
        <Issue issue={issue}></Issue>
      </MuiThemeProvider>, div);
  });

  it('toggle starts false', () => {
    const wrapper = shallow(<Issue issue={issue} />);
    const toggle = wrapper.find('Toggle');
    expect(toggle.props().toggled).toEqual(false);
  });
})