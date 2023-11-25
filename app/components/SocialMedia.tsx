import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-3 text-white text-3xl lg:text-4xl">
      <Link
        className="text-white/90 hover:text-white"
        href="https://www.github.com/vzan2012"
        target="_blank"
      >
        <FaGithub />
      </Link>
      <Link
        className="text-white/90 hover:text-white"
        href="https://fr.linkedin.com/in/deepak-guptha-s-b31a12142"
        target="_blank"
      >
        <FaLinkedin />
      </Link>
    </div>
  );
};

export default SocialMedia;
