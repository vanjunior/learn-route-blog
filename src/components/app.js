import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
          React simple starters
          {this.props.children}
      </div>
    );
  }
}
