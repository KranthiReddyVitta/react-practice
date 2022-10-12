import React from "react";

const ClickCounter = ({ count, incrementCount }) => {
  return <button onClick={incrementCount}>Clicked {count} times</button>;
};

export default ClickCounter;
