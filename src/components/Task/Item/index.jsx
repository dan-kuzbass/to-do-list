import React, { Component } from 'react';

export default class TaskItem extends Component {
  render() {
    return (
      <div style={{border: "1px solid black"}}>
        <p className="name">{this.props.name}</p>
        <p className="date">{this.props.date}</p>
      </div>
    )
  }
}