import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";

const Protected = ({ children }) => {
  const authContext = useContext(AuthContext);
  if (!authContext.isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Protected;
