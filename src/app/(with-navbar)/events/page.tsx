// "use client";

import CardFair from "@/components/CardFair";
import { EventsTypes } from "@/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// import { useEffect, useState } from "react";

async function fetchData() {
  try{
      const response = await fetch(`http://localhost:3000/api/events`, {
          method: "GET",
          cache: "no-store",
          headers: {},
      });

      if (!response.ok) {
          throw new Error("Failed to fetch items");
      }

      const responseJson = await response.json();
      // console.log(responseJson)
      // if(responseJson != null){
      //     setEvents(responseJson.data);
      // }
      return responseJson
  }catch (error){
      console.error("Error fetching item: ", error)
  }
  // finally{
  //     setLoading(false);
  // }
};

const Header = async (request : Request) => {

  // console.log(userRole, " di events");
  const events : {data : EventsTypes[]} = await fetchData()
  const userRole = cookies().get('Role')?.value

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
      </header>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:px-28 lg:py-28 px-10 py-10">
        {events?.data.map((item,index) =>(
          <CardFair data={item} key={index} userRole={userRole}/>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Header;
