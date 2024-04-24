import { EventsTypes } from "@/types";

const CardFair = ({ data }: { data: EventsTypes }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl text-center mb-5">{data?.name}</h1>
        <div className="grid grid-cols-2 gap-x-0 mb-6">
          <div className="">
            <p className="text-gray-700 text-md">{data?.description}</p>
          </div>
          <div className="text-right">
            <div className="text-gray-700 text-base">
              <p>Location: {data?.location}</p>
              <p>Date: {data?.date}</p>
            </div>
            <div className="flex justify-end mt-6">
              <button className="rounded-md bg-gradient-to-br from-emerald-400 to-sky-600 px-4 py-2 font-dm text-sm font-medium text-white shadow-md hover:shadow-lg transition-transform duration-200 ease-in-out hover:scale-[1.03]">
                Join Now
              </button>
            </div>
          </div>
        </div>
        <hr className="my-2 border-b border-gray-300" />
      </div>
      <div className="px-6 pb-2">
        <h1 className="font-bold text-lg text-start mb-2">List Of Companies</h1>
        <div>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Technology
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Software Engineering
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Web Developer
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardFair;
