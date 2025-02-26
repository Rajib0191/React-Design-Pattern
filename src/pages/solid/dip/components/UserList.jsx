import React from "react";
import { useUsers } from "../hooks/useUserCustomHook";
import { apiService } from "../apiService/UserApiService";
import User from "./User";

const UserList = () => {
  const users = useUsers(apiService);
  return (
    <ul className="flex flex-col gap-1">
      {users?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
