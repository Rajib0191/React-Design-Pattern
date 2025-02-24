import React, { useState } from "react";

const Modal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700"
      >
        Show Modal
      </button>
      {openModal && (
        <div
          className="w-full h-full absolute left-0 top-0 overflow-auto bg-[#00000067] flex justify-center items-center"
          onClick={() => setOpenModal(false)}
        >
          <div className="mx-auto" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
