import React, { Component } from 'react'


export default class EvenCounterDisplayer extends Component {
  render() {
    return (
      <div>
      <h1>Even Number Display :{this.props.even}</h1>
      </div>
    )
  }
}