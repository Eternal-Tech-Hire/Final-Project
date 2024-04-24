"use client";
import BookmartButton from "@/components/BookmarkButton";
import PDFViewer from "@/components/PdfViewer";
// import UserModel, { newUser } from "@/db/models/Users";
import { User } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { ClientFlashComponent } from "@/components/ClientFlash";

const ProfilePage = ({ params }: { params: { id: string } }) => {
  // const data = await fetchData(params.id);
  const [data, setData] = useState<User>();

  async function fetchData(userId: string) {
    try {
      const res = await fetch(
        `http://localhost:3000/api/auth/users/${userId}`,
        {
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
            // Cookie: cookies().toString()
          },
        }
      );
      // console.log(res);

      const userData = await res.json();
      // setData(userData.data);
      setData(userData.data);
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(userRole);
  const [showPDF, setShowPDF] = useState(false);
  // const pdfUrl = 'http://res.cloudinary.com/dzdi4yqlr/raw/upload/v1713784516/finalproject/c3avbbqul2jlmhrbrzgv.pdf';
  const handleButtonClick = () => {
    setShowPDF(!showPDF);
  };

  useEffect(() => {
    fetchData(params.id);
  }, []);

  console.log(data, "<<< daatata");
  
  return (
    <>
      <div className="h-full bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 lg:px-16 px-0 pb-24">
        <div className="bg-white rounded-lg shadow-xl pb-0 lg:pb-8">
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
            <p className="text-gray-700">Fullstack Web Developer</p>
            <p className="text-sm text-gray-500">{data?.email}</p>
            {/* <p className="text-sm text-gray-500">{data?.cv}</p> */}
            {/* Render PDF */}
            {/* <ClientFlashComponent /> */}
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-center justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              {/* {data?.role === "jobSeeker" ? <BookmartButton userRole={data?.role}  userId={params.id} /> : ""} */}
              <BookmartButton  userId={params.id} />
                <button
                  onClick={handleButtonClick}
                  className="flex items-center bg-gradient-to-br from-cyan-400 to-sky-600 hover:shadow-lg hover:scale-[1.05] text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
                >
                  <FaRegFileAlt className="h-4 w-4" />
                  <span>Show CV</span>
                </button>
              {/* <button onClick={handleButtonClick}>Show CV</button> */}
            </div>
            <div className="mt-10">
              {showPDF && <PDFViewer url={data?.cv} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
