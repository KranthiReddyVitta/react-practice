import React, { Component } from "react";

const hoc = (OriginalComponent) => {
  return class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
      this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement = () => {
      this.setState((prev) => {
        return { count: prev.count + 1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          increment={this.handleIncrement}
        />
      );
    }
  };
};

export default hoc;
