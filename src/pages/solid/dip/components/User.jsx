import React from "react";

const User = ({ user }) => {
  return (
    <li className="bg-gray-600 hover:bg-gray-500 cursor-pointer py-0.5 px-2 text-white rounded-sm">
      {user?.name}
    </li>
  );
};

export default User;
