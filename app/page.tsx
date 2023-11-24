import { Metadata } from "next";

export const metadata: Metadata = {
  title: "vzan2012",
  description: "Blog Portfolio",
};

const Home = () => {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-center text-3xl text-white">
        Hello &amp; Welcome 👍 &nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">vzan2012</span>
        </span>
      </p>
    </main>
  );
};

export default Home;
