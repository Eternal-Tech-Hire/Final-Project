"use server"
import { cookies } from "next/headers";

export default async function addFav(userId : string | undefined) {

    const userRole = cookies().get("Role")?.value;
    const url = `http://localhost:3000/profile/${userId}`
    const body = {userId, url}
    // console.log(body);
    

    if (userRole === "company") {
      const res = await fetch('http://localhost:3000/api/company/add_fav',{
        method: "POST",
        body: JSON.stringify(body),
        cache:"no-store",
        headers:{
          "Content-Type": "application/json",
        Cookie: cookies().toString()
        }
      })
      if (!res.ok) {
        console.log("failed to add fav");
      }
    }else{
        console.log("LU HARUS JADI COMPANY DULU");
        
      }
  }
