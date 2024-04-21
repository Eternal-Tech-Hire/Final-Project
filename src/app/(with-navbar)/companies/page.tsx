"use client";
import CardCompany from "@/components/CardCompany";
import { useState } from "react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Lakukan sesuatu dengan nilai searchTerm, misalnya kirim permintaan pencarian ke server
    console.log("Searching for:", searchTerm);
  };

  return (
    <div>
      <header className="">
        <div className=" bg-cyan-950 lg:h-96 h-72 flex items-center">
          <div className="sm:ml-20 text-gray-50 mx-auto lg:ml-28 text-center lg:text-start">
            <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-700 via-emerald-500 to-cyan-500 bg-clip-text lg:text-6xl text-5xl box-content font-extrabold text-transparent text-center select-none">
              Eternal Tech Hire
            </span>
            <h1 className="relative top-0 w-fit h-auto py-4 mx-auto justify-center flex bg-gradient-to-r items-center from-blue-700 via-emerald-500 to-cyan-500 bg-clip-text lg:text-6xl text-5xl font-extrabold text-transparent text-center select-auto">
              Eternal Tech Hire
            </h1>
            <h1 className="lg:text-4xl text-2xl font-bold mb-4">Companies.</h1>
            <p className="text-lg inline-block sm:block">
            Companies collaborating with us.
            </p>
            <div className="mt-3 lg:flex lg:items-center mx-auto">
              <input
                type="text"
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Companies.."
                className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button
                // onClick={handleSearch}
                className="bg-gray-600 px-4 py-2 rounded-r text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:px-28 lg:py-28 px-10 py-10">
        <CardCompany />
        <CardCompany />
        <CardCompany />
        <CardCompany />
        <CardCompany />
      </div>
    </div>
  );
};

export default Header;
