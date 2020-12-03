import React, { Component } from 'react'
export default class ToDo extends Component {
    render() {
        return (
            <div>
                <h1>Todo Component</h1>
            <h2>{this.props.MyStringOne}</h2>
            </div>
        )
    }
}
