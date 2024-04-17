"use client";
import {useState, useEffect} from 'react';
import { useParams } from 'next/navigation'
import { redirect } from "next/navigation";


interface Events {
    _id: string;
    name: string;
    description: string;
    date: string;
    location: string;
    categoryId: string;
}

export default function edit(){ 
  const params = useParams<{ id: string}>()
  const [events, setEvents] = useState<Events>();
  const [loading, setLoading] = useState(true);

  async function updateEvents(formData: FormData) {

      const rawFormData = {
        name: formData.get("name"),
        description: formData.get("description"),
        date: formData.get("date"),
        location: formData.get("location"),
        categoryId: formData.get("categoryId")
      };

      const response = await fetch(`http://localhost:3000/api/events/` + params.id, {
          method: "post",
          cache: "no-store",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(rawFormData),
      });

      if(response.status != 404){
          redirect("/test_api/event");
      }else{
          redirect("/test_api/login");
      }
  }
  // ======================
  useEffect(() => {
      async function fetchData() {
          try{
              "use client";
              // gunakan link ini untuk select semua data (http://localhost:3000/api/ticket)
             // link yang digunakan saat ini merupakan data yang di input oleh user (yang login saat ini)
              const response = await fetch(`http://localhost:3000/api/events/`+ params.id, {
                  method: "GET",
                  cache: "no-store",
                  headers: {},
              });

              if (!response.ok) {
                  throw new Error("Failed to fetch ticket items");
              }

              const responseJson = await response.json();
              if(responseJson != null){
                  setEvents(responseJson.data);
              }
          }catch (error){
              console.error("Error fetching ticket item:", error)
          }finally{
              setLoading(false);
          }
      };
      fetchData();
    }, []);


    // const ticket = await get(params.id);

  // const data = events.data;
  return (
    <>

            {loading? (
            <h1>Loading .....</h1>
            ):(
            <form action={updateEvents} className="space-y-4">
                <h1>TEST Update Event</h1>
                <div>
                    <span>Name</span>
                    <input type="text" name="name" id="name" className="border broder-2 ml-2" defaultValue={events!.name} />
                </div>
                <div className="flex flex-col ">
                    <span>Description</span>
                    <textarea name="description" id="description" className="border-2 border">{events!.description}</textarea>
                </div>
                <div>
                    <span>Date</span>
                    <input type="date" name="date" id="date" className="border broder-2 ml-2" defaultValue={events!.date} />
                </div>
                <div>
                    <span>Location</span>
                    <input type="text" name="location" id="location" className="border broder-2 ml-2" defaultValue={events!.location} />
                </div>

                <div className="flex flex-col ">
                    <span>Category</span>
                    <select name="categoryId" className="border broder-2 border-black">
                        <option value="Kategori 1">Kategori 1</option>
                        <option value="Kategori 2">Kategori 2</option>
                        <option value="Kategori 3">Kategori 3</option>
                        <option value="Kategori 4">Kategori 4</option>
                        <option value="Kategori 5">Kategori 5</option>
                    </select>
                </div>
                <button type="submit" className="btn">Update Event</button>
          </form>
            )}
    </>
  );
}