import React from "react";

const User = ({ user }) => {
  return <li key={user.id}>{user.name}</li>;
};

export default User;
