import React, { Fragment, useContext } from "react";
import AuthContext from "../store/AuthContext";

const Profile = () => {
  const authContext = useContext(AuthContext);
  return (
    <Fragment>
      {authContext.isLoggedIn ? (
        <button onClick={authContext.logOut}>LogOut User</button>
      ) : (
        "Logged Out"
      )}
    </Fragment>
  );
};

export default Profile;
