import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router";
import "./style.scss";
import style from "bootstrap/dist/css/bootstrap.css";
import * as bs from "react-bootstrap";

import Paper from "material-ui/Paper";
import Avatar from "material-ui/Avatar";

import About from "../About";
import Work from "../Work";
import Contact from "../Contact";
import Welcome from "../Welcome";

import { autobind } from "core-decorators";

@withRouter
@connect(state => ({}), {})
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-home">
        {/*<Welcome />*/}
        <About />
        {/*<Work />
        <Contact />*/}
      </div>
    );
  }
}
