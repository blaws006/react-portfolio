import React, { Component } from 'react';
import {Col, Row} from "react-materialize";
import './index';
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
class App extends Component {

  
  render() {
    return (
      <div>
      <Nav></Nav>
      <Home></Home>
        <Row className="row teal darken-1 aboutMeTitle">
          <Col id="about" l={12} s={12} className="center-align">
            <h2 className="center-align">About Me</h2>
          </Col>
        </Row>
        <About></About>
      </div>
    );
  }
}

export default App;
