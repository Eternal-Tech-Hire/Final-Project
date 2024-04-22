"use client";
import CardFair from "@/components/CardFair";
import { useState } from "react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Lakukan sesuatu dengan nilai searchTerm, misalnya kirim permintaan pencarian ke server
    console.log("Searching for:", searchTerm);
  };

  return (
    <div>

      <div className="w-screen py-0 px-0">
        <div className="container mx-auto bg-cyan-950 lg:h-96 h-72 flex items-center">

      <header className="">
        <div className=" bg-cyan-950 lg:h-96 h-72 flex items-center">
          <div className="sm:ml-20 text-gray-50 mx-auto lg:ml-28 text-center lg:text-start">
            <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-700 via-emerald-500 to-cyan-500 bg-clip-text lg:text-6xl text-5xl box-content font-extrabold text-transparent text-center select-none">
              Eternal Tech Hire
            </span>
            <h1 className="relative top-0 w-fit h-auto py-4 mx-auto justify-center flex bg-gradient-to-r items-center from-blue-700 via-emerald-500 to-cyan-500 bg-clip-text lg:text-6xl text-5xl font-extrabold text-transparent text-center select-auto">
              Eternal Tech Hire
            </h1>
            <h1 className="lg:text-4xl text-2xl font-bold mb-4">Job Fairs.</h1>
            <p className="text-lg inline-block sm:block">
              Join The Job Fair Events Now.
            </p>
          </div>
        </div>

      </div>

      </header>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:px-28 lg:py-28 px-10 py-10">
        <CardFair />
        <CardFair />
        <CardFair />
        <CardFair />
        <CardFair />
      </div>
    </div>
  );
};

export default Header;
