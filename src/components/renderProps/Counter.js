import React, { Fragment } from "react";
import { useState } from "react";

const Counter = (props) => {
  const [counter, setCount] = useState(0);
  const counterChange = () => {
    setCount((prev) => prev + 1);
  };
  return <Fragment>{props.render(counter, counterChange)}</Fragment>;
};

export default Counter;
