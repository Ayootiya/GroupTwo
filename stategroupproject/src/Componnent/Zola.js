import React, { Component } from 'react'
import AllCountDisplayer from './AllCountDisplayer'
import EvenCounterDisplayer from './EvenCounterDisplayer';


class Zola extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        evencount: 0
      };
      this.allClicksCounter = this.allClicksCounter.bind(this);
      this.evenClicksCounter = this.evenClicksCounter.bind(this);
    }
  
    async allClicksCounter () {
      this.setState(prevState => ({
        count: this.state.count + 1,
      }), 
      () => {
        // console.log("Callback value", this.state.count )
        
      });
      console.log(this.state.count)
    };
  
    
    async evenClicksCounter () {
      await this.allClicksCounter()
     if (this.state.count % 2 === 0)
     
      this.setState(prevState => ({
      evencount: prevState.evencount +2
      }), 
      () => {
        console.log("Callback value", this.state.evencount )
      });
      console.log(this.state.evencount)
    };
    
  
    render() {
        
      return (
        <div>
        <button onClick={() => {this.allClicksCounter(); this.evenClicksCounter();}}>Click Here </button> 
        <AllCountDisplayer count={this.state.allcount} />
        <EvenCounterDisplayer evencount={this.state.even}  />
        </div>
      )
    }
  }
  export default Zola