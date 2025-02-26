import React from "react";
import Animal from "../component/Animal";

const Cat = ({ onClick = () => {} }) => {
  return (
    <>
      <Animal sound={"Cat Sound"} onClick={onClick} />
    </>
  );
};

export default Cat;
