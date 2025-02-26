import React from "react";
import { useUsers } from "../hook/useUsers";
import UserList from "./UserList";

const UserContainer = () => {
  const users = useUsers();
  return <UserList users={users} />;
};

export default UserContainer;
