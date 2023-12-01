import { UserButton, auth, currentUser } from "@clerk/nextjs";

const MemberProfile = async () => {
  //   const user = await currentUser(); // Uit comments halen op pc thuis
  //   const { userId } = auth();
  return (
    <div className="px-4 flex items-center gap-2">
      <UserButton afterSignOutUrl="/" showName />
      {/* Lijn hieronder uit comments halen op pc thuis */}
      {/* <p>{user.emailAddresses[0].emailAddress}</p>   */}
    </div>
  );
};

export default MemberProfile;
