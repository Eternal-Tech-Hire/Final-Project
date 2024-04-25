"use client";
import Link from "next/link";
import React, { useEffect, useState} from "react";

interface AuthTypes{
  _id: string;
  email: string;
  role: string;
}

export default function Home() {
  const [data, setData] = useState<AuthTypes>();
  const [loading, setLoading] = useState<>(true);

  useEffect(() => {
    async function fetchData() {
        try{
            "use client";
            // gunakan link ini untuk select semua data (http://localhost:3000/api/ticket)
           // link yang digunakan saat ini merupakan data yang di input oleh user (yang login saat ini)
            const response = await fetch(`http://localhost:3000/api/auth/users`, {
                method: "GET",
                cache: "no-store",
                headers: {},
            });

            if (!response.ok) {
                throw new Error("Failed to fetch items");
            }

            const responseJson = await response.json();
            console.log(responseJson)
            if(responseJson != null){
                setData(responseJson.data);
                setLoading(false);
            }
        }catch (error){
            console.error("Error fetching item:", error)
        }finally{            
        }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading?(
       <p>BELUM LOGIN</p>
       ):(
       <p>Email {data!.email || "Kosong"} sebagai {data!.role} </p>
       )}
      <main>
      <h1 className="font-bold">LINK TESTING API</h1>
      <h2>Authetication</h2>
      <div className="flex gap-2">
        <Link className="btn" href="/test_api/login">Login</Link>
        <Link className="btn btn-warning" href="/test_api/register">Register</Link>        
      </div>

      <h2>Ticket</h2>
      <div className="flex gap-2">
        <Link className="btn" href="/test_api/ticket">Ticket (ADD/SHOW ALL)</Link>
      </div>


      <h2>Event</h2>
      <div className="flex gap-2">
        <Link className="btn bg-red-600" href="/test_api/event">Event (ADD/SHOW ALL)</Link>
      </div>

      <h2>Category</h2>
      <div className="flex gap-2">
        <Link className="btn bg-blue-200" href="/test_api/category">Category (ADD/SHOW ALL)</Link>
      </div>

      <h2>Company</h2>
      <div className="flex gap-2">
        <Link className="btn bg-green-500" href="/test_api/company">Company (ADD/SHOW ALL)</Link>
      </div>

      <h2>Profile</h2>
      <div className="flex gap-2">
        <Link className="btn bg-green-500" href="/test_api/profile">Profile (ADD/SHOW ALL)</Link>
      </div>

      </main>
    </>
  );
}
