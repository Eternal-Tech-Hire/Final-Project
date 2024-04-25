"use client";
import { EventsTypes } from "@/types";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";


interface CardFairProps {
  data: EventsTypes;
  userRole?: string;
}

const CardFair = ({ data, userRole }: CardFairProps) => {
  let router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [joinButtonText, setJoinButtonText] = useState("Join Now");
  // const [ticket, setTicket] = useState([])
  // console.log(userRole);
  const fetchData = async () => {
  
  }
  const joinFair = async () => {
    const input = {
      eventId: data?._id,
      name: data?.name,
      paymentStatus: "false",
    };
    // console.log(userRole);
    if (userRole === "jobSeeker") {
      await fetch("/api/ticket", {
        method: "POST",
        body: JSON.stringify(input),
      });
    } else if (userRole === "company") {
      await fetch("/api/events/company_join", {
        method: "POST",
        body: JSON.stringify({
          _id: data?._id,
        }),
      });
    }
    router.refresh()
    setJoinButtonText("Joined");
  };

  // console.log(data.Company, "data companies");

  useEffect(() => {
    const authorizationCookie = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("Authorization="));
    setIsLoggedIn(!!authorizationCookie);
  }, []);

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="flex justify-center mb-5">
          <img
            src={data?.imgUrl}
            alt={data?.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </div>
        <h1 className="font-bold text-xl text-center mb-5">{data?.name}</h1>
        <div className="grid grid-cols-2 gap-x-0 mb-6">
          <div className="">
            <p className="text-gray-700 text-md">{data?.description}</p>
          </div>

          <div className="px-6 pb-2">
            <div className="text-right">
              <div className="text-gray-700 text-base">
                <p>Location: {data?.location}</p>
                <p>Date: {data?.date}</p>
              </div>
              {isLoggedIn && (
                <div className="flex justify-end mt-6">
                  <button
                    onClick={joinFair}
                    className={`rounded-md bg-gradient-to-br from-emerald-400 to-sky-600 px-4 py-2 font-dm text-sm font-medium text-white shadow-md hover:shadow-lg transition-transform duration-200 ease-in-out hover:scale-[1.03] ${
                      joinButtonText === "Joined"
                        ? "bg-gray-400 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={joinButtonText === "Joined"} // Menonaktifkan tombol jika sudah bergabung
                  >
                    {joinButtonText}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="my-2 border-b border-gray-300" />
        <div className="px-6 pb-2">
          <h1 className="font-bold text-lg text-start mb-2">
            List Of Companies
          </h1>
          <div>
            {data &&
              data?.Company.map((item, index) => (
                <span
                  key={index}
                  className="inline-block mt-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {item.name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFair;
