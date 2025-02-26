import React from "react";
import Animal from "../component/Animal";

const Dog = ({ onClick = () => {} }) => {
  return (
    <>
      <Animal sound={"Dog Sound"} onClick={onClick} />
    </>
  );
};

export default Dog;
