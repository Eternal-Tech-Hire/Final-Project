// "use client";
"use server";
import CardFair from "@/components/CardFair";
import CardProfile from "@/components/CardProfile";
import { CompanyTypes, EventsTypes } from "@/types";
import { cookies } from "next/headers";

async function fetchData() {
  try {
    const response = await fetch(`http://localhost:3000/api/company/getOne`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch items");
    }

    const responseJson = await response.json();

    return responseJson.data;
  } catch (error) {
    console.error("Error fetching item: ", error);
  }
}

const Header = async () => {
  const userRole = cookies().get("Role")?.value;
  const company: CompanyTypes = await fetchData();
  // console.log(company);

  return (
    <div>
      <header className="">
        <div className=" bg-cyan-950 lg:h-96 h-72 flex items-center">
          <div className="sm:ml-20 text-gray-50 mx-auto lg:ml-28 text-center lg:text-start">
            <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-700 via-emerald-500 to-cyan-500 bg-clip-text lg:text-6xl text-5xl box-content font-extrabold text-transparent text-center select-none">
              Eternal Tech Hire
            </span>
            <h1 className="relative top-0 w-fit h-auto py-4 mx-auto justify-center flex bg-gradient-to-r items-center from-blue-700 via-emerald-500 to-cyan-500 bg-clip-text lg:text-6xl text-5xl font-extrabold text-transparent text-center select-auto">
              Eternal Tech Hire
            </h1>
            <h1 className="lg:text-4xl text-2xl font-bold mb-4">Bookmarked.</h1>
            <p className="text-lg inline-block sm:block">
              These are the Job Seeker Bookmarks.
            </p>
          </div>
        </div>
      </header>
      {company.fav_info && company.fav_info.length > 0 ? (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:px-28 lg:py-28 px-10 py-10">
          {company.fav_info.map((item, index) => (
            <CardProfile data={item} key={index} />
          ))}
        </div>
      ) : (
        <div>
          <h1 className="font-semibold text-4xl text-center lg:px-28 lg:py-28 px-10 py-10">Your Bookmark Still Empty..</h1>
        </div>
      )}
    </div>
  );
};

export default Header;
