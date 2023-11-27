import Image from "next/image";

const MyProfilePicture = ({ username }: { username: string }) => {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-3 border-black bg-sky-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/user.png"
        width={150}
        height={150}
        alt={username}
      />
    </section>
  );
};

export default MyProfilePicture;
