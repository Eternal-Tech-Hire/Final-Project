"use client";
import {useState, useEffect} from 'react';
import { useParams } from 'next/navigation'
import { redirect } from "next/navigation";
import { newUser } from "@/db/models/Users";

type CompanyTypes = {
    _id: string;
    name: string;
    jobOffer: string;
    fav: []
}

type FavTypes = {
    id_event: string;
    url: string;
}

export default function edit(){ 
  const params = useParams<{ id: string}>()
  const [data, setData] = useState<CompanyTypes>();
  const [user, setUser] = useState<newUser>();
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


  async function addFavForm(formData: FormData) {

      const rawFormData = {
        id_event: formData.get("id_event"),
        url_cv: user!.cv,
      };

      const response = await fetch(`http://localhost:3000/api/company/add_fav/` + params.id, {
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

              const res = await fetch(`http://localhost:3000/api/auth/users/`,{
                  cache:"no-store"
              })

              if (res.ok) {
                  
                  const userData = await res.json();
                  setUser(userData.data);
              } else {
                  console.error("Failed to fetch user data.");
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
            <div>
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

              <form action={addFavForm} className="space-y-4">
                  <h1>TEST FAV </h1>
                  {
                    loading? (
                      <h3>Loading .....</h3>
                      ):(
                      <div>
                        <h3>URL CV SAYA : {user!.cv}</h3>
                        <br />
                        <span>Jika url kosong maka upload dulu di halaman profile dan harus login</span>
                      </div>
                      )
                  }
                  <div>
                      <span>ID Event (harus menggunakn id Event yang benar (bukan dummy)</span>
                      <input type="text" name="id_event" id="id_event" className="border broder-2 ml-2" defaultValue="661db9a4c4da48be3c08a55b" required />
                  </div>
                  <button type="submit" className="btn">Add</button>
              </form>

              <h3>SEMUA CV/FAV</h3>
                <table className="table p-8">
                  <thead>
                      <tr>
                          <td>ID Event</td>
                          <td>URL</td>
                      </tr>
                  </thead>
                  <tbody>
                  {
                    (data!.fav.map((item : FavTypes) => (
                    <tr>
                        <td>{item.id_event}</td>
                        <td>{item.url}</td>
                    </tr>
                    )))
                  }
                  </tbody>
                </table>
            </div>
            )}
    </>
  );
}