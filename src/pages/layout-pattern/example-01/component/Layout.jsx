import React from "react";

const Layout = ({ children, leftWidth = 1, rightWidth = 1 }) => {
  const [left, right] = children;
  return (
    <div className="flex">
      <div className={`flex-${leftWidth}`}>{left}</div>
      <div className={`flex-${rightWidth}`}>{right}</div>
    </div>
  );
};

export default Layout;
