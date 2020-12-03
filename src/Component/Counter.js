import React, { Component } from 'react'
class Counter extends Component {
state ={

    counter: 0
};
OnIncrement = ()=>{
        this.setState({
             counter : this.state.counter +1
        });
};

OnDecrement = ()=>{
    this.setState({
         counter : this.state.counter -1
    });
};

    render() {
        return (
            <div>
               <h1>Counter</h1>
               <h1>{this.state.counter}</h1>
               <button onClick={this.OnDecrement}>- Press Me</button>
               <button onClick={this.OnIncrement}>+ Press Me</button>
               
            </div>
        );
    }
}
export default Counter;
