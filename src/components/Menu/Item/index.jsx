import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";

export default class MenuItem extends Component {

  render() {
    return (
      <div style={{border: "1px solid black"}}>
        <a id={this.props.id} className="nav-link" href="#" onClick={this.props.onClick}>{this.props.name}</a>
      </div>
    )
  }
}