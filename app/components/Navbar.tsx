import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-sky-700 p-4 sticky top-0 drop-shadow-xl">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <Link href="/" className="text-white/90 no-underline hover:text-white">
          vzan2012
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
