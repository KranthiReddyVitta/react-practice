import React, { Component } from "react";
import hoc from "./withCounter";

class hocHover extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1 onMouseOver={this.props.increment}>
        Hover {this.props.count} times
      </h1>
    );
  }
}

export default hoc(hocHover);
