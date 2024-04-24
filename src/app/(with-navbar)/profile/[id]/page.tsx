// "use client";
import BookmartButton from "@/components/BookmarkButton";
import { newUser } from "@/db/models/Users";
import { cookies } from "next/headers";
import Link from "next/link";
// import { useEffect, useState } from "react";
import { FaRegBookmark } from "react-icons/fa6";

async function fetchData(userId: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/auth/users/${userId}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString()
      },
    });
    // console.log(res);

    const userData = await res.json();
    // setData(userData.data);
    return userData.data;
  } catch (error) {
    console.log(error);
  }
}

const ProfilePage = async ({ params }: { params: { id: string } }) => {
  const data = await fetchData(params.id);
  const userRole = cookies().get("Role")?.value;
  // console.log(userRole);
  
  // const pdfUrl = 'http://res.cloudinary.com/dzdi4yqlr/raw/upload/v1713784516/finalproject/c3avbbqul2jlmhrbrzgv.pdf';

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
              <p className="text-2xl">{data?.name}</p>
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
            <p className="text-sm text-gray-500">{data?.email}</p>
            <p className="text-sm text-gray-500">{data?.cv}</p>
            {/* Render PDF */}
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              <BookmartButton userRole={userRole} userId={params.id}/>
              <Link href={`${data?.cv}`} type="button">
                asd
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
