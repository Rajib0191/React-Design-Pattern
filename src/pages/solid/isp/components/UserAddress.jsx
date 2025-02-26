import React from "react";

const UserAddress = ({ address }) => {
  if (!address) return <p>No address available</p>;
  return (
    <div className="border border-amber-600 rounded-sm py-1 px-2">
      <strong>House:</strong>
      <h2>{address?.suite}</h2>
      <strong>Road:</strong>
      <p>{address?.street}</p>
      <strong>City:</strong>
      <p>{address?.city}</p>
      <strong>Zip Code:</strong>
      <p>{address?.zipcode}</p>
    </div>
  );
};

export default UserAddress;
