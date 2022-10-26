import React, { useContext } from "react";
import AuthContext from "../../store/AuthContext";

const LogOut = () => {
  const authContext = useContext(AuthContext);
  return (
    <div>
      <button onClick={authContext.logOut}>LogOut</button>
    </div>
  );
};

export default LogOut;
