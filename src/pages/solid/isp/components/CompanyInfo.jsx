import React from "react";

const CompanyInfo = ({ company }) => {
  if (!company) return <p>No company info available</p>;
  return (
    <div className="border border-amber-600 rounded-sm py-1 px-2">
      <strong>Company Name:</strong>
      <p>{company?.name}</p>
      <strong>Description:</strong>
      <p>{company?.catchPhrase}</p>
      <strong>Address:</strong>
      <p>{company?.bs}</p>
    </div>
  );
};

export default CompanyInfo;
