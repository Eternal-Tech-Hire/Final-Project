"use server"
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function addFav(userId : string | undefined) {

    const userRole = cookies().get("Role")?.value;
    const url = `http://localhost:3000/profile/${userId}`
    const body = {userId, url}
    // console.log(body, "di add fav");
    

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
        redirect(`${url}?error=Failed To Add Fav`)

      }
      redirect("http://localhost:3000/bookmark")
    }else{
        redirect(`${url}?error=Only Company Can Bookmark`)
      }
  }
