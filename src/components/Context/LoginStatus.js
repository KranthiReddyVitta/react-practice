import React, { useContext } from "react";
import { Fragment } from "react";
import AuthContext from "../../store/AuthContext";

const LoginStatus = () => {
  const authContext = useContext(AuthContext);
  return (
    <Fragment>{authContext.isLoggedIn ? "Logged In!" : "Logged Out"}</Fragment>
  );
};

export default LoginStatus;
