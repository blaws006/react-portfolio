import React, { Component } from 'react';
import {Col, Row} from "react-materialize";
import './index';
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import API from "./utils/API"


class App extends Component {

  state = {
    Portfolio: [],
    title: "",
    summary: "",
    link: "",
    img: "",
  };
  
  componentDidMount() {
    this.getProjects()
  }

  getProjects = () => {
    API.findAll()
    .then(res =>
    this.setState({ Portfolio: res.data })
  )
  .catch(err => console.log(err))
  }

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
        <Skills></Skills>
            <Row className="row teal darken-1 aboutMeTitle folio">
          <Col id="portfolio" l={12} s={12} className="center-align">
            <h2 className="center-align">Portfolio</h2>
          </Col>
        </Row>
        <Row className="container">
          {this.state.Portfolio.map((portfolio, _id) => (
          <Col s={12} m={12} l={6} key={_id} className="center-align">
            <h1>{portfolio.title}</h1>
            <p>{portfolio.summary}</p>
              <a href={portfolio.link} target="_blank">
                <img className="responsive-img" style={ {borderWidth: 1}} src={portfolio.img} />
              </a>
          </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default App;
