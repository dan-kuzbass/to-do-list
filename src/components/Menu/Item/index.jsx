import React, { Component } from 'react';

export default class MenuItem extends Component {
  render() {
    return (
      <div style={{border: "1px solid black"}}>
        <p className="name">{this.props.name}</p>
      </div>
    )
  }
}