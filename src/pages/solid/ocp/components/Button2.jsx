import React from "react";
/**
 * Good Approach (Follows OCP) – We allow extensibility via className:
 **/
const Button2 = ({ text, className, onClick = () => {} }) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button2;
