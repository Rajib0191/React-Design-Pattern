import React from "react";

const UserInfo = ({ name, email }) => {
  return (
    <div className="border border-amber-600 rounded-sm py-1 px-2">
      <strong>Name:</strong>
      <h2>{name}</h2>
      <strong>Email:</strong>
      <p>{email}</p>
    </div>
  );
};

export default UserInfo;
