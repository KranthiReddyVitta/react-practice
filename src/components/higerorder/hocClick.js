import React, { Component } from "react";
import hoc from "./withCounter";

class hocClick extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={this.props.increment}>
        Click {this.props.count} times
      </button>
    );
  }
}

export default hoc(hocClick);
