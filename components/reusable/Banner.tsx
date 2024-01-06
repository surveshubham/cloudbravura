import React from "react";

function Banner({ title }: { title: string }) {
  return (
    <div className="bg-gray-100  w-full z-0 pt-14 ">
      <div className="max-w-7xl mx-auto py-14 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-secondary tracking-wide uppercase">
            Services
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {title}
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            {
              "Say goodbye to the hassle of managing your own servers and  hello to faster deployment, automatic scaling, and lower costs."
            }
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
