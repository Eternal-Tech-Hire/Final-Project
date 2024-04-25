"use client";

import { useState, useEffect } from "react";
import { getCookie, deleteCookie } from "cookies-next";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { User } from "@/types";

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookiesStore, setCookiesStore] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [data, setData] = useState<User>();

  async function fetchData() {
    try {
      const res = await fetch(`/api/auth/users/`, {
        cache: "no-store",
      });

      if (res.ok) {
        const userData = await res.json();
        setData(userData.data);
      } else {
        console.error("Failed to fetch user data.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const accessToken = getCookie("Authorization") as string;
    if (accessToken != null) {
      setIsLoggedIn(true);
      setCookiesStore(accessToken);
    }

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

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out",
    }).then((result: { isConfirmed: boolean }) => {
      if (result.isConfirmed) {
        logoutUser();
      }
    });
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
    setCookiesStore(null);
    deleteCookie("Authorization");
    deleteCookie("Role");
    Swal.fire({
      title: "Logged Out",
      text: "You have been successfully logged out",
      icon: "success",
      confirmButtonColor: "#3085d6",
    }).then(() => {
      router.push("/");
    });
  };

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
        scrollPosition >= 90 && scrollPosition !== maxScroll
          ? "bg-cyan-950"
          : ""
      } transition-all duration-100 ease-in-out`}
    >
      <nav className="mx-auto flex max-w-6xl gap-8 px-6 lg:px-12 py-4">
        <div className="flex items-center">
          <Link href="/">
            <div>
              <img
                src="/logo_v2.png"
                loading="lazy"
                style={{ color: "transparent" }}
                className="w-24 ml-6 lg:m-0"
              />
            </div>
          </Link>
        </div>
        <ul className="hidden items-center justify-center gap-6 md:flex">
          <li className="pt-1.5 font-dm text-sm font-medium text-white">
            <Link href="/">
              <button className="text-lg font-bold relative transition duration-300 ease-in-out hover:text-gray-300 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out">
                Home
                <span className="absolute inset-0 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out"></span>
              </button>
            </Link>
          </li>
          <li className="pt-1.5 font-dm text-sm font-medium text-white">
            <Link href="/events">
              <button className="text-lg font-bold relative transition duration-300 ease-in-out hover:text-gray-300 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out">
                Job Fairs
                <span className="absolute inset-0 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out"></span>
              </button>
            </Link>
          </li>
          <li className="pt-1.5 font-dm text-sm font-medium text-white">
            <Link href="/companies">
              <button className="text-lg font-bold relative transition duration-300 ease-in-out hover:text-gray-300 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out">
                Companies
                <span className="absolute inset-0 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out"></span>
              </button>
            </Link>
          </li>
          {data?.role === "jobSeeker" ? (
            ""
          ) : (
            <li className="pt-1.5 font-dm text-sm font-medium text-white">
              <Link href="/bookmark">
                <button className="text-lg font-bold relative transition duration-300 ease-in-out hover:text-gray-300 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out">
                  Bookmarks
                  <span className="absolute inset-0 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out"></span>
                </button>
              </Link>
            </li>
          )}
        </ul>
        <div className="flex-grow" />
        <div className="hidden items-center justify-center gap-6 md:flex">
          {isLoggedIn ? (
            <>
              <Link href="/profile">
                <button className="rounded-md  bg-gradient-to-br from-emerald-400 to-sky-600 px-3 py-2 font-dm text-sm font-medium text-white shadow-md  hover:shadow-cyan-400 transition-transform duration-200 ease-in-out hover:scale-[1.03]">
                  My Profie
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="rounded-md bg-gradient-to-br from-purple-700 to-rose-500 px-3 py-2 font-dm text-sm font-medium text-white shadow-md hover:shadow-rose-500 transition-transform duration-200 ease-in-out hover:scale-[1.05]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <button className="text-lg text-white font-bold relative transition duration-300 ease-in-out hover:text-gray-300 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out">
                  Sign In
                  <span className="absolute inset-0 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out"></span>
                </button>
              </Link>
              <Link href="/register">
                <h1 className="rounded-md bg-gradient-to-br bg-sky-600 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md  hover:shadow-cyan-400 transition-transform duration-200 ease-in-out hover:scale-[1.03]">
                  Sign up for free
                </h1>
              </Link>
            </>
          )}
        </div>
        {isMobileNavOpen && (
          <ul className="flex flex-col gap-4 items-end justify-end md:hidden">
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
            {data?.role === "jobSeeker" ? (
            ""
          ) : (
            <li className="pt-1.5 font-dm text-sm font-medium text-white">
              <Link href="/bookmark">
                <button className="text-md font-bold relative transition duration-300 ease-in-out hover:text-gray-300 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out">
                  Bookmarks
                  <span className="absolute inset-0 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out"></span>
                </button>
              </Link>
            </li>
          )}
            {isLoggedIn ? (
              <>
                <Link href="/profile">
                  <button className="rounded-md  bg-gradient-to-br from-emerald-400 to-sky-600 px-3 py-2 font-dm text-sm font-medium text-white shadow-md  hover:shadow-cyan-400 transition-transform duration-200 ease-in-out hover:scale-[1.03]">
                    My Profie
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="rounded-md bg-gradient-to-br from-purple-700 to-rose-500 px-3 py-2 font-dm text-sm font-medium text-white shadow-md hover:shadow-rose-500 transition-transform duration-200 ease-in-out hover:scale-[1.05]"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className="text-sm text-white font-bold relative transition duration-300 ease-in-out hover:text-gray-300 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out">
                    Sign In
                    <span className="absolute inset-0 hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:bottom-0 hover:after:left-0 hover:after:content-[''] hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out"></span>
                  </button>
                </Link>
                <Link href="/register">
                  <h1 className="rounded-md bg-gradient-to-br bg-sky-600 px-2 py-1 font-dm text-sm font-medium text-white shadow-md  hover:shadow-cyan-400 transition-transform duration-200 ease-in-out hover:scale-[1.03]">
                    Sign up for free
                  </h1>
                </Link>
              </>
            )}
          </ul>
        )}
        <div className="relative flex items-center justify-center md:hidden">
          <button type="button" onClick={toggleMobileNav}>
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
