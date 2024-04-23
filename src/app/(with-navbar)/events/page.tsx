"use client";
import CardFair from "@/components/CardFair";

import { EventsTypes } from "@/types";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Lakukan sesuatu dengan nilai searchTerm, misalnya kirim permintaan pencarian ke server
    console.log("Searching for:", searchTerm);
  };

  const [events, setEvents] = useState<EventsTypes[]>([]);
  const [loading, setLoading] = useState(true);

  // ======================
  async function addEvent(formData: FormData) {
    const rawFormData = {
      name: formData.get("name"),
      description: formData.get("description"),
      date: formData.get("date"),
      location: formData.get("location"),
      categoryId: formData.get("categoryId"),
    };

    const response = await fetch(`http://localhost:3000/api/events`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });

    redirect("/test_api/event");
  }
  // ======================

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/api/events`, {
          method: "GET",
          cache: "no-store",
          headers: {},
        });

        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }

        const responseJson = await response.json();
        console.log(responseJson);
        if (responseJson != null) {
          setEvents(responseJson.data);
        }
      } catch (error) {
        console.error("Error fetching item: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

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
                <h1 className="lg:text-4xl text-2xl font-bold mb-4">
                  Job Fairs.
                </h1>
                <p className="text-lg inline-block sm:block">
                  Join The Job Fair Events Now.
                </p>
              </div>
            </div>
          </header>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:px-28 lg:py-28 px-10 py-10">
            {events.map((item) => (
              <CardFair data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
