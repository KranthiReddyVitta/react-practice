import React, { useRef } from "react";
import CustomInput from "./CustomInput";

const OuterButton = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Element</button>
    </div>
  );
};

export default OuterButton;
