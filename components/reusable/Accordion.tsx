import { RichText } from "@graphcms/rich-text-react-renderer";
import React, { useState } from "react";

interface Accordion{
  title? : String
  content? : any
}

function Accordion({ title, content }: Accordion) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <h4
        onClick={() => setIsOpen((prev) => !prev)}
        className={`cursor-pointer flex gap-5 justify-start items-center font-bold bg-blue-700  px-7 py-3 md:py-4 text-md md:text-lg text-white rounded-md ${
          isOpen ? "!bg-secondary  py-5" : ""
        }`}
      >
        {title}
        <span
          className={`text-3xl inline duration-300 transition-transform ${
            isOpen ? "rotate-180" : null
          }`}
        >
          {isOpen ? <p>&#8722;</p> : <p>&#43;</p>}
        </span>
      </h4>
      <div
        className={` ${
          isOpen
            ? "h-full duration-500 transition-all ease-in"
            : "max-h-0 duration-300 transition-all ease-out"
        }
                 shadow-lg w-full rounded-b-lg overflow-hidden`}
      >
        <div
          className="px-4 md:px-10 py-8 text-sm md:text-md prose prose-teal text-justify max-w-7xl mx-auto md:text-base"
          style={{ lineHeight: "2" }}
        >
          <RichText content={content} />
        </div>
      </div>
    </div>
  );
}

export default Accordion;
