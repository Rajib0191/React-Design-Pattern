import React from "react";

const AuthTemplate = ({ children }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-gray-100">
      {children}
    </div>
  );
};

export default AuthTemplate;
