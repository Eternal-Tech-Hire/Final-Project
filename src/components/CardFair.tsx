"use client"
import { EventsTypes } from "@/types";

  interface CardFairProps {
    data: EventsTypes;
    userRole?: string;
  }
  
  const CardFair = ({ data, userRole }: CardFairProps) => {
  
    // console.log(userRole);
    const joinFair = async () => {
      const input = {eventId : data?._id, name: data?.name, paymentStatus: "false"}
      console.log(userRole);
      if (userRole === "jobSeeker") {
        
         await fetch('/api/ticket',{
          method:"POST",
          body: JSON.stringify(input)
         })
      }else if(userRole === "company"){
        
        await fetch('/api/events/company_join',{
          method:"POST",
          body: JSON.stringify({
            _id: data?._id
            }), 
        })
      }
    };
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src="/forest.jpg" alt="Forest" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data?.name}</div>
          <p className="text-gray-700 text-base">{data?.description}</p>
          <p className="text-gray-700 text-base">{data?.date}</p>
          <p className="text-gray-700 text-base">{data?.location}</p>
        </div>
        <div className="flex justify-end mr-5 mt-8">
            <button onClick={joinFair} className="rounded-md bg-gradient-to-br from-emerald-400 to-sky-600 px-2 py-2 font-dm text-sm font-medium text-white shadow-md hover:shadow-lg transition-transform duration-200 ease-in-out hover:scale-[1.03]">
              Join Now
            </button>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #fall
          </span>
        </div>
      </div>
    </>
  );
};

export default CardFair;
