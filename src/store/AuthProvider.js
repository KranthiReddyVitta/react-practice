import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  const [isLoggedIn, setLogin] = useState(false);
  const login = () => {
    setLogin(true);
  };
  const logOut = () => {
    setLogin(false);
  };
  const context = {
    isLoggedIn: isLoggedIn,
    login: login,
    logOut: logOut,
  };
  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
