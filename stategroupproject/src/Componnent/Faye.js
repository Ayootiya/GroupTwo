import React, { Component } from 'react'
import AllCountDisplayer from './AllCountDisplayer'
import EvenCounterDisplayer from './EvenCounterDisplayer';



class Faye extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      evenCount: 0,
    };
  }

  allClicksCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  allEvensCounter = () => {
    if (this.state.count % 2 != 0) {
      this.setState({
        evenCount: this.state.evenCount + 2,
      });
    }
  };

  bothNumsCounter = () => {
    this.allClicksCounter();
    this.allEvensCounter();
  };

  render() {
    return (
      <div>
        <button onClick={this.bothNumsCounter}>Click here</button>

        <counterDisplayer someProperty={this.state.count} />
        <EvenCounterDisplayer anotherProperty={this.state.evenCount} />
      </div>
    );
  }
}
export default Faye;