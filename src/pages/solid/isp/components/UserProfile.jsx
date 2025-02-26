import React from "react";
import UserInfo from "./UserInfo";
import UserAddress from "./UserAddress";
import CompanyInfo from "./CompanyInfo";

const UserProfile = ({ user }) => {
  const { name, email, address, company } = user;

  if (!user) return <p>Loading user data...</p>;
  return (
    <div className="flex flex-col gap-2">
      <UserInfo name={name} email={email} />
      <UserAddress address={address} />
      <CompanyInfo company={company} />
    </div>
  );
};

export default UserProfile;
