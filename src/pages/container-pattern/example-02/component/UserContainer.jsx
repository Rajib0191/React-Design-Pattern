import React, { useEffect, useState } from "react";
import UserList from "./UserList ";

const UserContainer = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  return <UserList users={users} isLoading={isLoading} />;
};

export default UserContainer;
