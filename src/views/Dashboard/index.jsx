import React, { Component } from 'react';
import MenuList from "../../components/Menu/List";
import TaskList from "../../components/Task/List";
import { Row, Col } from "react-bootstrap";
import NavBar from "../../NavBar";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <Row>
          <Col md={4}>
            <MenuList />
          </Col>
          <Col md={8}>
            <TaskList />
          </Col>
        </Row>
      </>
    )
  }
}