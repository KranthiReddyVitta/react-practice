import React, { Fragment } from "react";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setParams] = useSearchParams();
  const showLabel = searchParams.get("filter") === "active";
  return (
    <Fragment>
      <div>List of users</div>
      <button onClick={() => setParams({ filter: "active" })}>
        Active user
      </button>
      <button onClick={() => setParams({})}>Reset user</button>
      {showLabel ? <h3>Active user list</h3> : <h3>Reset user list</h3>}
    </Fragment>
  );
};

export default Users;
