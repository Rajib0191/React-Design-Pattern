import React from "react";

const UserRowCard = ({ data }) => {
  const { email, password } = data || {};
  return (
    <ul className="my-4 space-y-3 w-1/5">
      <li className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
        <span className="flex-1 whitespace-nowrap">{email}</span>
        <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium text-gray-500 bg-gray-200 rounded-sm">
          {password}
        </span>
      </li>
    </ul>
  );
};

export default UserRowCard;
