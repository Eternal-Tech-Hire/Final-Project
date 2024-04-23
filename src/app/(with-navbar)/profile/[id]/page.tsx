"use client";
import { FaRegBookmark } from "react-icons/fa6";

const ProfilePage = () => {

  return (
    <>
      <div className="h-full bg-gray-200 px-8 pb-8">
        <div className="bg-white rounded-lg shadow-xl pb-8">
          <div className="absolute right-12 mt-4 rounded"></div>
          <div className="w-full h-[250px]">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
              className="w-40 border-4 border-white rounded-full"
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">Amanda Ross</p>
              <span className="bg-blue-500 rounded-full p-1" title="Verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-100 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
            </div>
            <p className="text-gray-700">
              Senior Software Engineer at Tailwind CSS
            </p>
            <p className="text-sm text-gray-500">New York, USA</p>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              <button
                className="flex items-center bg-gradient-to-br from-cyan-400 to-sky-600 hover:shadow-lg hover:scale-[1.05] text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
              >
                <FaRegBookmark className="h-4 w-4" />
                <span>BookMark</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;