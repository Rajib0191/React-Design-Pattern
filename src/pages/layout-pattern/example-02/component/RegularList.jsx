import React from "react";

const RegularList = ({ items, sourceName, ItemComponent }) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      {items?.map((item, index) => (
        <ItemComponent key={index} {...{ [sourceName]: item }} />
      ))}
    </div>
  );
};

export default RegularList;
