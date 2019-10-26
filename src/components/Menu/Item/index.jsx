import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";

export default class MenuItem extends Component {
  render() {
    return (
      <div style={{border: "1px solid black"}}>
        <a class="nav-link" href="#">{this.props.name}</a>
      </div>
    )
  }
}