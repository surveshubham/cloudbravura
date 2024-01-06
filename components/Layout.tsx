import Navbar from "./Navbar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer className="">
        <div className="max-w-7xl mx-auto py-4 px-4 overflow-hidden sm:px-6 lg:px-8  ">
          <p className="mt-2 text-center text-sm text-gray-800">
            &copy; {new Date().getFullYear()} Cloud Bravura. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
