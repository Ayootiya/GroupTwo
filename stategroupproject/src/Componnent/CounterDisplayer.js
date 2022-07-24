import React, { Component } from 'react'

export default class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>All clicks counter: {this.props.someProperty}</h1>
        </div>
      </div>
    );
  }
}
