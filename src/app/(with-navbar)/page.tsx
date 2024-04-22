"use client";
import CardCompany from "@/components/CardCompany";
import CardFair from "@/components/CardFair";
import Carousel from "@/components/Carousle";
import Link from "next/link";
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
          JaAA</div>
        </div>
        <div className="lg:px-32 py-20 bg-gray-100 h-full">
          <div className="lg:ml-10 mx-6 mb-10">
            <h1 className="lg:text-4xl text-center lg:text-start text-2xl font-semibold">
              List of Employer Company
            </h1>
            <h1 className="lg:text-md max-w-xl text-md mt-5 text-gray-400 lg:text-start text-center">
              Here are the partner companies - employers that are registered and
              ready to provide you with the job you desire!
            </h1>
          </div>
          <div className="lg:carousel lg:carousel-center grid grid-cols-1 lg:max-w-full p-4 bg-white rounded-box">
            <div className="lg:carousel-item lg:w-[40%] py-5 lg:py-0">
              <CardCompany />
            </div>
            <div className="lg:carousel-item lg:w-[40%] py-5 lg:py-0">
              <CardCompany />
            </div>
            <div className="lg:carousel-item lg:w-[40%] py-5 lg:py-0">
              <CardCompany />
            </div>
            <div className="lg:carousel-item lg:w-[40%] py-5 lg:py-0">
              <CardCompany />
            </div>
            <div className="lg:carousel-item lg:w-[40%] py-5 lg:py-0">
              <CardCompany />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
