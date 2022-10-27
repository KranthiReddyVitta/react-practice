import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  const id = params.id;
  return <div>user details {id}</div>;
};

export default UserDetails;
