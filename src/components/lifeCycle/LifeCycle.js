import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "kranthi",
    };
    console.log("Constructor Parent");
  }

  componentDidMount() {
    console.log("componentDidMount Parent");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps Parent");
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //To identify scroll position for chat app by creating ref to that element
    return 123;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate Parent");
    if (nextState.name !== this.state.name) return true;
    else return false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate Parent", snapshot);
  }

  changeName() {
    this.setState({
      name: "reddys",
    });
  }

  render() {
    console.log("render Parent");
    return (
      <>
        <button onClick={() => this.changeName()}>changeName</button>
        <div>LIfeCycle {this.state.name}</div>
      </>
    );
  }
}

export default LifeCycle;
