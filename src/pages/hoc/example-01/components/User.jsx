import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, email, phone, id } = user || {};

  if (!user) {
    return (
      <div className="min-w-sm animate-pulse">
        <div className="h-40 rounded-lg bg-gray-700 mb-4 p-2 w-full max-w-sm"></div>
      </div>
    );
  }

  return (
    <Link
      to={`/user/${id}`}
      className="flex justify-center items-center flex-col p-2 w-full max-w-sm border border-gray-700 rounded-lg shadow-sm bg-gray-800 cursor-pointer"
    >
      <strong className="text-white">{id}</strong>
      <strong className="text-white">{name}</strong>
      <strong className="text-gray-400">{email}</strong>
      <strong className="text-gray-400">{phone}</strong>
    </Link>
  );
};

export default User;
