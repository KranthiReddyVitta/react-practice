import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/AuthContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  console.log("Authcontext", authContext);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {!authContext.isLoggedIn && <NavLink to="/login">Login</NavLink>}
    </nav>
  );
};

export default Navbar;
