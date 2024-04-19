"use client";
import CardCompany from "@/components/CardCompany";
import CardFair from "@/components/CardFair";
import Carousel from "@/components/Carousle";
import React, { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <main>
        <div>
          <Carousel />
        </div>
        <div>
          <h1 className="text-3xl font-semibold font-sans py-10 text-center">
            — <span className="ml-5 mr-5">Job Fair</span> —
          </h1>
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <CardFair />
            <CardFair />
            <CardFair />
          </div>
        </div>
        <div className="lg:px-32 py-20 bg-gray-100 h-full">
          <div className="ml-10 mb-10">
            <h1 className="lg:text-4xl text-2xl font-semibold">
              List of Employer Company
            </h1>
            <h1 className="lg:text-sm text-md mt-5 text-gray-400 max-w-xl">
              Here are the partner companies - employers that are registered and
              ready to provide you with the job you desire!
            </h1>
          </div>
          <div className="carousel carousel-center max-w-full p-4 bg-white rounded-box">
            <div className="carousel-item w-[40%]">
              <CardCompany />
            </div>
            <div className="carousel-item w-[40%]">
              <CardCompany />
            </div>
            <div className="carousel-item w-[40%]">
              <CardCompany />
            </div>
            <div className="carousel-item w-[40%]">
              <CardCompany />
            </div>
            <div className="carousel-item w-[40%]">
              <CardCompany />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
