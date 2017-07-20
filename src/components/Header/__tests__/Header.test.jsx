import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
    });

    it('should render the Header', () => {
        const header = shallow(<Header />);
        const welcome = <h2>Welcome to Issuer</h2>;
        expect(header.contains(welcome)).toEqual(true);
    });

})