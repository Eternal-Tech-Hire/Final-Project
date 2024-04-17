"use client";
import {useState, useEffect} from 'react';
import { useParams } from 'next/navigation'
import { redirect } from "next/navigation";

type CompanyTypes = {
    _id: string;
    name: string;
    jobOffer: string;
}

export default function edit(){ 
  const params = useParams<{ id: string}>()
  const [data, setData] = useState<CompanyTypes>();
  const [loading, setLoading] = useState(true);

  async function updateForm(formData: FormData) {

      const rawFormData = {
        name: formData.get("name"),
        jobOffer: formData.get("jobOffer")
      };

      const response = await fetch(`http://localhost:3000/api/company/` + params.id, {
          method: "post",
          cache: "no-store",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(rawFormData),
      });

      if(response.status != 404){
          redirect("/test_api/company");
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
              const response = await fetch(`http://localhost:3000/api/company/`+ params.id, {
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

  return (
    <>

            {loading? (
            <h1>Loading .....</h1>
            ):(
            <form action={updateForm} className="space-y-4">
                <h1>TEST Update company</h1>
                <div>
                    <span>Name</span>
                    <input type="text" name="name" id="name" className="border broder-2 ml-2" defaultValue={data!.name} />
                </div>
                <div>
                    <span>job Offer</span>
                    <input type="text" name="jobOffer" id="jobOffer" className="border broder-2 ml-2" defaultValue={data!.jobOffer} />
                </div>
                <button type="submit" className="btn">Update</button>
          </form>
            )}
    </>
  );
}