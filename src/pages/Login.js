import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";

const LoginNew = (props) => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    authContext.login();
    navigate("/profile", { replace: true });
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginNew;
