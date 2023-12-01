import { UserProfile } from "@clerk/nextjs";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <UserProfile />;
    </div>
  );
};

export default ProfilePage;
