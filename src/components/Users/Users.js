import React from "react";
import UsersList from "./UsersList";

const Users = (props) => {
  return (
    <React.Fragment>
      <UsersList items={props.items} />
    </React.Fragment>
  );
};

export default Users;
