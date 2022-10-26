import React from "react";

const CustomInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" style={{ width: "10%" }} ref={ref} />
    </div>
  );
});

export default CustomInput;
