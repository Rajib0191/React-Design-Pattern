import React from "react";
/**
 * ✅ Correct: LSP Applied
 **/
const Animal = ({ sound, onClick }) => {
  return (
    <div
      className="bg-cyan-800 border border-red-400 rounded-sm text-white py-1 px-3 cursor-pointer"
      onClick={onClick}
    >
      {sound}
    </div>
  );
};

export default Animal;
