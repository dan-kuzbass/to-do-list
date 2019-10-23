import React, { Component } from 'react';
import MenuList from "../../components/Menu/List";
import TaskList from "../../components/Task/List";
import { Row, Col } from "react-bootstrap";

export default class MainPage extends Component {
  render() {
    return (
      <Row>
        <Col md={4}>
          <MenuList />
        </Col>
        <Col md={8}>
          <TaskList />
        </Col>
      </Row>
    )
  }
}