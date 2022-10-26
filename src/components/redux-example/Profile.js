import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/profileReducer";

const Profile = () => {
  const dispatch = useDispatch();
  const data = useSelector((data) => data.profile.users);
  return (
    <div>
      <button onClick={() => dispatch(getUsers())}>Load Profile</button>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
    </div>
  );
};

export default Profile;
