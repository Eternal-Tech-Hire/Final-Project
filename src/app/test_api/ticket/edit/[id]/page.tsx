"use client";
import {useState, useEffect} from 'react';
import { useParams } from 'next/navigation'
import { redirect } from "next/navigation";


type Ticket = {
  _id: string;
  name: string;
  paymentStatus: string;
  eventId: string;
  userId: string;
}

export default function edit(){ 
  const params = useParams<{ id: string}>()
  const [ticket, setTicket] = useState<Ticket>();
  const [loading, setLoading] = useState(true);

  async function updateTicket(formData: FormData) {

      const rawFormData = {
          name: formData.get("name"),
          paymentStatus: formData.get("paymentStatus"),
          eventId: formData.get("eventId")

      };

      const response = await fetch(`http://localhost:3000/api/ticket/` + params.id, {
          method: "post",
          cache: "no-store",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(rawFormData),
      });

      if(response.status != 404){
          redirect("/test_api/ticket");
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
              const response = await fetch(`http://localhost:3000/api/ticket/`+ params.id, {
                  method: "GET",
                  cache: "no-store",
                  headers: {},
              });

              if (!response.ok) {
                  throw new Error("Failed to fetch ticket items");
              }

              const responseJson = await response.json();
              if(responseJson != null){
                  setTicket(responseJson.data);
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

  // const data = ticket.data;
  return (
    <>

            {loading? (
            <h1>Loading .....</h1>
            ):(
            <form action={updateTicket} className="space-y-4">
              <h1>TEST Update TICKET</h1>
              <div>
                  <span>Name</span>
                  <input type="text" name="name" id="name" className="border broder-2 ml-2" defaultValue={ticket!.eventId} />
              </div>
              <div>
                  <span>paymentStatus</span>
                  <input type="radio" value="Selesai" name="paymentStatus" id="paymentStatus" className="border broder-2 ml-2" /> <span>Selesai</span>
                  <input type="radio" value="Belum Selesai" name="paymentStatus" id="paymentStatus" className="border broder-2 ml-2" /> <span>Belum Selesai</span>
              </div>
              <div>
                  <span>ID Event</span>
                  <input type="text" name="eventId" id="eventId" className="border broder-2 ml-2" defaultValue={ticket!.eventId} />
                  <p className="text-[15px] text-red-600">ini harusnya id event tapi karena belum ada API buat event jadi buatkan dummy dahulu (nanti akan di update)</p>
              </div>
              <button type="submit" className="btn">Update Ticket</button>
          </form>
            )}
    </>
  );
}