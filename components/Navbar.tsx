// import Link from 'next/link'
import { useState, useEffect } from "react";
// import logo from "../public/logoSvg.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import Router from "next/router";
import Link from "next/link";
import logo from "../public/logo.png";
import logo2 from "../public/reslogo.png";
/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  // { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/#contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    const doMagic = () => {
      setIsOpen(false);
    };

    Router.events.on("routeChangeStart", doMagic); // add listener

    return () => {
      Router.events.off("routeChangeStart", doMagic); // remove listener
    };
  }, []);

  return (
    <header
      className={`${
        router.pathname === "/"
          ? `fixed drop-shadow-xl w-full z-50 top-0 left-0 transition-all duration-500 ${
              router.pathname == "/" ? "text-white" : "text-black"
            }  ${
              scrolled
                ? "bg-white/80 backdrop-blur-md !text-black"
                : "bg-transparent  "
            }`
          : `z-50 fixed top-0 left-0 transition-all duration-500 w-full bg-white shadow-lg text-black`
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 " aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <div className="mr-auto md:mx-0">
              <Link href="/">
                <div className="cursor-pointer mr-auto">
                  <span className="sr-only">Cloud Bravura</span>
                  <div className="hover:scale-110 duration-300 transition-transform mr-auto">
                    <Image
                      priority
                      alt="Main Logo"
                      className=""
                      height={50}
                      width={70}
                      src={logo}
                    />
                  </div>
                </div>
              </Link>
            </div>
            {/* MD+ */}
            <div className="hidden gap-10 text-center relative md:flex">
              <div className="group inline-block relative">
                <button className=" font-bold  rounded inline-flex items-center">
                  <span className="mr-1">Services</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                  <Link href={"/google-cloud-platform"}>
                    <span className=" bg-gray-200 hover:bg-secondary/90 backdrop-blur-md hover:text-white py-2 px-4 block whitespace-no-wrap">
                      GCP
                    </span>
                  </Link>
                  <li className="">
                    <Link href={"/oracle-cloud"}>
                      <span className=" bg-gray-200 hover:bg-secondary/90 backdrop-blur-md hover:text-white py-2 px-4 block whitespace-no-wrap">
                        Oracle
                      </span>
                    </Link>
                  </li>
                  <li className="">
                    <Link href={"/microsoft-azure"}>
                      <span className="bg-gray-200 hover:bg-secondary/90 backdrop-blur-md hover:text-white py-2 px-4 block whitespace-no-wrap">
                        Azure
                      </span>
                    </Link>
                  </li>
                  <li className="">
                    <Link href={"/amazon-web-services"}>
                      <span className="bg-gray-200 hover:bg-secondary/90 backdrop-blur-md hover:text-white py-2 px-4 block whitespace-no-wrap">
                        AWS
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              {navigation.slice(1).map((navItem) => (
                <Link key={navItem.name} href={navItem.href} scroll={false}>
                  <span
                    className={`hover-underline-animation text-base cursor-pointer font-bold hover:text-primary duration-300 transition-colors`}
                  >
                    {navItem.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* PHONES -> TILL MD */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex p-3 md:hidden absolute top-2.5 right-1 ml-auto"
          aria-label="Menu Mobile Button"
        >
          <svg
            className="w-8 h-8 text-darkBlue"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen
              ? "h-screen"
              : "h-0 pointer-events-none absolute top-0 left-0 opacity-0"
          } fixed transition-all duration-500 top-0 left-0 w-full z-[100] bg-secondary text-white text-xl font-bold`}
        >
          <div className="flex justify-between items-center">
            <div className="px-6 pt-4">
              <Image
                priority
                alt=""
                className=""
                height={40}
                width={70}
                src={logo2}
              />
            </div>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="absolute top-6 right-6 text-white text-6xl"
              aria-label="Menu Mobile Button"
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col justify-center items-center gap-4 h-full pb-28">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-md block font-medium text-white hover:text-black"
              >
                <span onClick={() => setIsOpen(false)}>{link.name}</span>
              </Link>
            ))}
          </ul>
        </div>
        {/* <div className="py-4 flex text-sm flex-wrap justify-center space-x-4 md:hidden">
                    {navigation.map((link) => (
                        <Link key={link.name} href={link.href} className="text-xs block font-medium text-white hover:text-indigo-50">
                            {link.name}
                        </Link>
                    ))}
                </div> */}
      </nav>
    </header>
  );
}
