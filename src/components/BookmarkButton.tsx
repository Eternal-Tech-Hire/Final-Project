"use client"

import addFav from "@/actions/actions";
import { FaRegBookmark } from "react-icons/fa6";
import Swal from "sweetalert2";

export default function BookmartButton({ userId }: { userId: string | undefined }) {

  return (
    <>

      <button onClick={()=>{addFav(userId)}} className="flex items-center bg-gradient-to-br from-cyan-400 to-sky-600 hover:shadow-lg hover:scale-[1.05] text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
        <FaRegBookmark className="h-4 w-4" />
        <span>BookMark</span>
      </button>

    </>
  );
}
