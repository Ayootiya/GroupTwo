import React, { Component } from 'react'


export default class EvenCounterDisplayer extends Component {
  render() {
    return (
      <div>
        <h1>Even clicks counter:{this.props.anotherProperty}</h1>
      </div>
    );
  }
}