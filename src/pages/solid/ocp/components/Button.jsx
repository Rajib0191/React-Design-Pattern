import React from "react";

/**
 * Bad Approach (Violates OCP) – If we want to change the button style, we have to modify the component:
 **/
const Button = ({ text, setTest = () => {} }) => {
  return (
    <button
      className="bg-cyan-800 border border-red-400 rounded-sm text-white py-1 px-3 cursor-pointer"
      onClick={() => setTest("Button Clicked!")}
    >
      {text}
    </button>
  );
};

export default Button;
