"use client"

import { FaRegBookmark } from "react-icons/fa6";
import Swal from "sweetalert2";

export default function BookmartButton({ userRole, userId }: { userRole: string | undefined, userId: string | undefined }) {
    // console.log(userRole);
    // console.log(userId);
    
    async function addFav() {

        const url = `http://localhost:3000/profile/${userId}`
        const body = {userId, url}

        if (userRole === "company") {
          const res = await fetch('http://localhost:3000/api/company/add_fav',{
            method: "POST",
            body: JSON.stringify(body),
            cache:"no-store"
          })
          if (!res.ok) {
            console.log("failed to add fav");
          }
        }else{
          Swal.fire({
            icon: 'warning',
            title: 'Only Company Can Bookmark',
            showConfirmButton: false,
            timer: 2000 
          });
            
          }
      }

  return (
    <>
      {userRole === 'company' && (
        <button onClick={addFav} className="flex items-center bg-gradient-to-br from-cyan-400 to-sky-600 hover:shadow-lg hover:scale-[1.05] text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
          <FaRegBookmark className="h-4 w-4" />
          <span>BookMark</span>
        </button>
      )}
    </>
  );
}
