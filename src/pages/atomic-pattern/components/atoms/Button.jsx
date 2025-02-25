import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full px-4 py-1 mt-1 bg-blue-500 text-white rounded cursor-pointer"
    >
      {label}
    </button>
  );
};

export default Button;
