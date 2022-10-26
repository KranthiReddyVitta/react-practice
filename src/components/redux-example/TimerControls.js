import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../store/timerReducer";

const TimerControls = () => {
  const dispatch = useDispatch();
  const incrementVal = () => {
    dispatch(increment());
  };
  const decrementVal = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <button onClick={incrementVal}>+</button>
      <button onClick={decrementVal}>-</button>
    </div>
  );
};

export default TimerControls;
