"use client";
import {useState, useEffect} from 'react';
import { useParams } from 'next/navigation'
import { redirect } from "next/navigation";


type CategoryTypes = {
    _id: string;
    name: string;
    companyId: string;
}

export default function edit(){ 
  const params = useParams<{ id: string}>()
  const [data, setData] = useState<CategoryTypes>();
  const [loading, setLoading] = useState(true);

  async function updateForm(formData: FormData) {

      const rawFormData = {
        name: formData.get("name"),
        companyId: formData.get("companyId")
      };

      const response = await fetch(`http://localhost:3000/api/category/` + params.id, {
          method: "post",
          cache: "no-store",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(rawFormData),
      });

      if(response.status != 404){
          redirect("/test_api/category");
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
              const response = await fetch(`http://localhost:3000/api/category/`+ params.id, {
                  method: "GET",
                  cache: "no-store",
                  headers: {},
              });

              if (!response.ok) {
                  throw new Error("Failed to fetch ticket items");
              }

              const responseJson = await response.json();
              if(responseJson != null){
                  setData(responseJson.data);
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
            <form action={updateForm} className="space-y-4">
                <h1>TEST Update Category</h1>
                <div>
                    <span>Name</span>
                    <input type="text" name="name" id="name" className="border broder-2 ml-2" defaultValue={data!.name} />
                </div>
                <div>
                    <span>Company ID</span>
                    <input type="text" name="companyId" id="companyId" className="border broder-2 ml-2" defaultValue={data!.companyId} />
                </div>
                <button type="submit" className="btn">Update Event</button>
          </form>
            )}
    </>
  );
}