import React from "react";

const UserList = ({ users, isLoading }) => {
  if (isLoading) return <p>Loading users...</p>;

  return (
    <ul className="bg-white p-4 shadow rounded">
      {users.map((user) => (
        <li key={user.id} className="p-2 border-b last:border-none">
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default UserList;
