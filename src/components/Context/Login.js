import React, { useContext } from "react";
import AuthContext from "../../store/AuthContext";

const Login = () => {
  const authContext = useContext(AuthContext);
  return (
    <div>
      <button onClick={authContext.login}>Login</button>
    </div>
  );
};

export default Login;
