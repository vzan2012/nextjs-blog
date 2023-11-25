import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import MyProfilePicture from "./components/MyProfilePicture";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "vzan2012",
  description: "Blog Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sky-900`}>
        {/* NavBar Section */}
        <Navbar />
        {/* Profile Picture Section  */}
        <MyProfilePicture username="vzan2012" />
        {children}
      </body>
    </html>
  );
}
