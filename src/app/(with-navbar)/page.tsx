"use client";
import CardCompany from "@/components/CardCompany";
import CardFair from "@/components/CardFair";
import Carousel from "@/components/Carousle";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [listCompany, setlistCompany] = useState([]);
  const [listEvents, setlistEvents] = useState([]);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };
  async function fetchDataCompany() {
    try {
      const response = await fetch("http://localhost:3000/api/home/company", {
        cache: "no-store",
      });
      const data = await response.json();

      setlistCompany(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchDataEvents() {
    try {
      const response = await fetch("http://localhost:3000/api/home/events", {
        cache: "no-store",
      });
      const data = await response.json();

      setlistEvents(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDataCompany();
    fetchDataEvents();
  }, []);
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
            {listEvents.map((item, index) => (
              <CardFair data={item} key={index} />
            ))}
          </div>
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
            <div className="flex justify-end -mt-8">
              <Link href="/events">
                <h1 className="rounded-md bg-gradient-to-br from-emerald-400 to-sky-600 px-4 py-2 font-dm text-md font-medium text-white shadow-md hover:shadow-lg transition-transform duration-200 ease-in-out hover:scale-[1.03]">
                  See More
                </h1>
              </Link>
            </div>
          </div>
          {/* Carousel */}
          <div className="lg:carousel lg:carousel-center grid grid-cols-1 gap-3 lg:max-w-full p-4 bg-transparent rounded-box relative">
            {/* Carousel items */}
            {listCompany.map((item, index) => (
              <div className="lg:carousel-item lg:w-[40%] py-5 lg:py-0">
                <CardCompany data={item} key={index} />
              </div>
            ))}
            {/* Repeat Carousel items for each slide */}
          </div>
          {/* Indicator dots */}
          <div className="flex justify-center mt-4">
            {[...Array(3)].map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === activeSlide ? "bg-gray-700" : "bg-gray-400"
                }`}
                onClick={() => handleSlideChange(index)}
              ></button>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
