import React from "react";
import { useUsers } from "../../../../common/useUser";
import User from "./User";
import { logUser } from "../hoc-component/LogUser";

const UserWrapper = logUser(User);

const UserList = () => {
  const users = useUsers();
  return (
    <div className="h-screen overflow-auto flex flex-col gap-2 items-center py-2 bg-gray-900">
      {users.length === 0
        ? Array.from({ length: 5 }).map((_, index) => (
            <UserWrapper key={index} user={null} />
          ))
        : users.map((item) => <UserWrapper key={item.id} user={item} />)}
    </div>
  );
};

export default UserList;
