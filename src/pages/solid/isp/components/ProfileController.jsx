import { useProfile } from "../hook/useProfile";
import UserProfile from "./UserProfile";

const ProfileController = () => {
  const user = useProfile();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center items-center p-2">
      <UserProfile user={user} />
    </div>
  );
};

export default ProfileController;
