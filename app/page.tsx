import { Metadata } from "next";
import Posts from "./components/Posts";

const Home = () => {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-center text-3xl text-white">
        Hello &amp; Welcome 👍 &nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">vzan2012</span>
        </span>
      </p>

      {/* Blog Posts - Section  */}
      <Posts />
    </main>
  );
};

export default Home;
