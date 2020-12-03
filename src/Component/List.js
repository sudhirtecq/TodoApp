import React, { Component } from "react";

export default class List extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "Jhone",
        age: 45,
      },
      {
        id: 2,
        name: "Sam",
        age: 35,
      },
    ],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.data.map((value, index) => {
            return <li>value.id</li>;
          })}
        </ul>
      </div>
    );
  }
}
