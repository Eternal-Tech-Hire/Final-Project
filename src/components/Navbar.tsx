"use client";
import { useState, useEffect } from "react";
import { getCookie, deleteCookie } from "cookies-next";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookiesStore, setCookiesStore] = useState<string | null>(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCookiesStore(null);
  };

  useEffect(() => {
    const accessToken = getCookie("Authorization") as string;
    if (accessToken != null) {
      setIsLoggedIn(true);
      setCookiesStore(accessToken);
    }
  });

  return (
    <header className="sticky inset-0 z-50 bg-cyan-950 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
        <div className="flex items-center">
          <a href="/">
            <img
              src="/logo_transparant.png"
              loading="lazy"
              style={{ color: "transparent" }}
              className="w-28 h-28 fixed z-10 -top-5"
            />
          </a>
        </div>
        <ul className="hidden items-center justify-center gap-6 ms-20 md:flex">
          <li className="pt-1.5 font-dm text-sm font-medium text-gray-400 hover:text-white ">
            <a href="#" className="text-md font-bold">
              Home
            </a>
          </li>
          <li className="pt-1.5 font-dm text-sm font-medium text-gray-400 hover:text-white ">
            <a href="#" className="text-md font-bold">
              Job Fair
            </a>
          </li>
          <li className="pt-1.5 font-dm text-sm font-medium text-gray-400 hover:text-white ">
            <a href="#" className="text-md font-bold">
              Companies
            </a>
          </li>
        </ul>
        <div className="flex-grow" />
        <div className="hidden items-center justify-center gap-6 md:flex">
          <a
            href="#"
            className="font-dm text-md font-semibold text-gray-400 hover:hover:text-white"
          >
            Sign in
          </a>
          <a
            href="#"
            className="rounded-md bg-gradient-to-br bg-sky-900  px-3 py-1.5 font-dm text-sm font-medium text-white shadow-sm hover:shadow-sky-600 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
          >
            Sign up for free
          </a>
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
