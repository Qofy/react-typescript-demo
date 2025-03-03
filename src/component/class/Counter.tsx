import { Component } from "react";

type CounterProp = {
  message: string
}

type CounterState ={
  count: number
}
export class Counter extends Component <CounterProp, CounterState>{
  state = {
    count: 0
  }

  handleClick = () =>{
    this.setState((prevent) => ({count: prevent.count +1}))
  }

  render(){
    return(
    <div>
      <button onClick={this.handleClick}>
        Increase
      </button>
      {this.props.message} {this.state.count}
    </div>
    )
  }
}