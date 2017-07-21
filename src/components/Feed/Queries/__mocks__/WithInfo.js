import React, { Component } from 'react';
import { issues } from '../../Mocks/Issues.mock'

export function withInfo(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <WrappedComponent data={issues} {...this.props} />;
    }
  };
}