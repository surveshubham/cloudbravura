import React from "react";

function Title({ title }: { title: string }) {
  return (
    <div className="relative flex items-center py-5 w-full">
      <div className="flex-grow border-t border-gray-400 opacity-60" />
      <h1 className="text-3xl text-center font-black text-color-gradient md:leading-tight xl:leading-snug tracking-wide px-3">
        {title}
      </h1>
      <div className="flex-grow border-t border-gray-400 opacity-60" />
    </div>
  );
}

export default Title;
