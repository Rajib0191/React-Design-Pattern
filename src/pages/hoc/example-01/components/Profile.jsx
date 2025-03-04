import React from "react";

const Profile = (props) => {
  const { user } = props;

  if (!user) {
    return (
      <div className="h-screen flex flex-col gap-2 items-center justify-center bg-gray-900">
        <div className="min-w-sm animate-pulse">
          <div className="h-40 rounded-lg bg-gray-700 mb-4 p-2 w-full max-w-sm"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col gap-2 items-center justify-center bg-gray-900">
      <div className="p-2 flex justify-center items-center flex-col w-sm bg-gray-800 text-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold">Profile</h1>
        <strong>{user.name}</strong>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
      <div className="p-2 flex justify-center items-center flex-col w-sm bg-gray-800 text-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold">Address</h1>
        <strong>{user.address.city}</strong>
        <p>{user.address.suite}</p>
        <p>{user.address.street}</p>
      </div>
      <div className="p-2 flex justify-center items-center flex-col w-sm bg-gray-800 text-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold">Company</h1>
        <strong>{user.company.name}</strong>
        <p>{user.company.bs}</p>
        <p>{user.company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default Profile;
