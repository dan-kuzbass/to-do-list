import React, { Component } from 'react';

export default class TaskItem extends Component {
  render() {
    return (
      <div style={{border: "1px solid black"}}>
        <span className="name">{this.props.name}</span>
        <span className="date">{this.props.date}</span>
      </div>
    )
  }
}