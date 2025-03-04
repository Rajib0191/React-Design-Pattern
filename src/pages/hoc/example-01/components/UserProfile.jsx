import React from "react";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { singleUser } from "../hoc-component/SingleUser";

const UserProfile = () => {
  const { userId } = useParams();
  const UserProfileWrapper = singleUser(Profile);

  return <UserProfileWrapper userId={userId} />;
};

export default UserProfile;
