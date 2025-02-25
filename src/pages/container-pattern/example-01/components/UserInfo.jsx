import React from "react";

const UserInfo = ({ user }) => {
  if (!user || user.length === 0) return <p>Loading...</p>;

  return (
    <div>
      {user.map(({ id, name, username, email }) => (
        <div key={id}>
          <p>Name: {name}</p>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
