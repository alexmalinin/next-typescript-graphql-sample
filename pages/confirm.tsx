import * as React from 'react';
import { NextContext } from 'next';

export default class Confirm extends React.PureComponent {
  static async getInitialProps({ query: { token } }: NextContext) {
    return { token };
  }

  render() {
    console.log(this.props);

    return <div />;
  }
}
