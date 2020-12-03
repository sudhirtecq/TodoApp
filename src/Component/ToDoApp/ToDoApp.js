import React, { Component } from 'react';
import "./ToDoApp.css";
export default class ToDoApp extends Component {
    state = {
        input: "",
        items: []
    };

    handleChang = (event) => {
        this.setState({
            /*muptiple values [event.target.name] : event.target.value*/
            input: event.target.value
        });
        //console.log(this.state.input)
    };

    storeItems = event => {
        //event.preventdefault();
        const { input } = this.state;
        /*const allItems = this.state.items;*/
        /*allItems.push(input);*/

        this.setState({
            items: [...this.state.items, input]
        });
    };

    render() {
        const { input, items } = this.state;
        //console.log(items);

        return (
            <form className="Todo-Container" onSubmit={this.storeItems}>

                <div className="input-Section">
                    <h1>Todo App</h1>
                    <input
                        type="text"
                        onChange={this.handleChang}
                        value={input}
                        placeholder="Enter Activites.." />

                  <ul>
                {items.map ((data,index)=>  (<li key={index}>{data} <i className="fa fa-trash" aria-hidden="true"></i></li> ))}
                </ul>
                </div>
            </form>
        )
    }
}
