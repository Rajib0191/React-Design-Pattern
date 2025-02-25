import React from "react";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      name={type}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={type}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full px-2 py-1 outline-0"
      required
    />
  );
};

export default Input;
