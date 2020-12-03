import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: "",
            LastName: ""
        };
        this.inputOne = React.createRef();
        this.inputTwo = React.createRef();

    }

    onSubmit = () => console.log(this.value);

    render() {
        return (
            <form>
                <h2>Form Component</h2>
                <input
                    type="text"
                    name="FirstName"
                    /*value={this.state.FirstName}*/
                    ref={input => this.inputOne.input}
                />
                <input
                    type="text"
                    name="LastName"
                    /*value={this.state.LastName}*/
                    ref={input => this.inputTwo.input}
                />
                <button onClick={this.onSubmit}>Submit</button>
            </form>
        );
    }
}

export default Forms;
