"use client";
import { useState, useEffect } from "react";
import { getCookie, deleteCookie } from "cookies-next";
import Link from "next/link";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookiesStore, setCookiesStore] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const accessToken = getCookie("Authorization") as string;
    if (accessToken != null) {
      setIsLoggedIn(true);
      setCookiesStore(accessToken);
    }

    const handleLogout = () => {
      setIsLoggedIn(false);
      setCookiesStore(null);
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setMaxScroll(
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const accessToken = getCookie("Authorization") as string;
    if (accessToken != null) {
      setIsLoggedIn(true);
      setCookiesStore(accessToken);
    }
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <header
      className={`fixed lg:fixed inset-x-0 top-0 z-50 ${
        scrollPosition === 0 || scrollPosition === maxScroll
          ? "bg-transparent"
          : ""
      } ${
        scrollPosition > 90 && scrollPosition !== maxScroll ? "bg-cyan-950" : ""
      } transition-all duration-100 ease-in-out`}
    >
      <nav className="mx-auto flex max-w-6xl gap-8 px-6 lg:px-12 py-4">
        <div className="flex items-center">
          <a href="/">
            <img
              src="/logo_transparant.png"
              loading="lazy"
              style={{ color: "transparent" }}
              className="w-28 h-28 fixed z-10 lg:-top-5 -top-7"
            />
          </a>
        </div>
        <ul className="hidden items-center justify-center gap-6 ms-20 md:flex">
          <li className="pt-1.5 font-dm text-sm font-medium text-white">
            <Link href="/">
              <button className="text-md font-bold relative transition duration-300 ease-in-out hover:text-gray-300 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out">
                Home
                <span className="absolute inset-0 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out"></span>
              </button>
            </Link>
          </li>
          <li className="pt-1.5 font-dm text-sm font-medium text-white">
            <Link href="/events">
              <button className="text-md font-bold relative transition duration-300 ease-in-out hover:text-gray-300 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out">
                Job Fairs
                <span className="absolute inset-0 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out"></span>
              </button>
            </Link>
          </li>
          <li className="pt-1.5 font-dm text-sm font-medium text-white">
            <Link href="/companies">
              <button className="text-md font-bold relative transition duration-300 ease-in-out hover:text-gray-300 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out">
                Companies
                <span className="absolute inset-0 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out"></span>
              </button>
            </Link>
          </li>
        </ul>
        <div className="flex-grow" />
        <div className="hidden items-center justify-center gap-6 md:flex">
          <Link href="/login">
            <button className="text-md text-white font-bold relative transition duration-300 ease-in-out hover:text-gray-300 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out">
              Sign In
              <span className="absolute inset-0 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out"></span>
            </button>
          </Link>
          <Link href="/register">
            <h1 className="rounded-md bg-gradient-to-br bg-sky-600 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md  hover:shadow-cyan-400 transition-transform duration-200 ease-in-out hover:scale-[1.03]">
              Sign up for free
            </h1>
          </Link>
        </div>
        <div className="relative flex items-center justify-center md:hidden">
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-auto text-slate-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
