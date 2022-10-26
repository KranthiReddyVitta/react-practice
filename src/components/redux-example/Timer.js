import React from "react";
import {useSelector } from "react-redux";


const Timer = (props) => {
  const counter = useSelector((state) => state.counter.count);
  return (
    <div>
      <h3>Timer Value : {counter}</h3>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     count: state.count,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Timer);
export default Timer;
