import React, { Component } from 'react'

export default class CounterDisplayer extends Component {
  render() {
    return (
      <div>
      <h1>All clicks counter: {this.props.allcount}</h1>
      </div>
    )
  }
}
