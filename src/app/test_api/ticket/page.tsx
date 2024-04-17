"use client";
import React, { useEffect, useState} from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
import { useRouter } from 'next/navigation';

type Ticket = {
  _id: string;
  name: string;
  paymentStatus: string;
  eventId: string;
  userId: string;
}

interface RemoveButtonProps {
  ticketId: string;

}

const RemoveTicketButton: React.FC<RemoveButtonProps> = ({ ticketId }) => {
  const router = useRouter();
  const removeTicketById = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/ticket`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ _id: ticketId }), 
          });

          if (!response.ok) {
            throw new Error('Failed to remove item from ticket');
          }
          router.push('/test_api')

        } catch (error) {
          console.error('Error removing item from ticket:', error);
        }
    };

  return (
      <button onClick={removeTicketById} className="btn btn-warning">Delete</button>
  );
};


export default function pageTicket() {
    const [ticket, setTicket] = useState<Ticket[]>([]);
    const [loading, setLoading] = useState(true);

    


    // ======================
    async function addTicket(formData: FormData) {

        const rawFormData = {
            name: formData.get("name"),
            paymentStatus: formData.get("paymentStatus"),
            eventId: formData.get("eventId")

        };

        const response = await fetch(`http://localhost:3000/api/ticket`, {
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
                // gunakan link ini untuk select data by ID User (http://localhost:3000/api/ticket/user)
               // link yang digunakan saat ini merupakan data yang di input oleh user (yang login saat ini)
                const response = await fetch(`http://localhost:3000/api/ticket`, {
                    method: "GET",
                    cache: "no-store",
                    headers: {},
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch ticket items");
                }

                const responseJson = await response.json();
                console.log(responseJson)
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

    return (
        <>
        <form action={addTicket} className="space-y-4">
            <h1>TEST ADD TICKET</h1>
            <div>
                <span>Name</span>
                <input type="text" name="name" id="name" className="border broder-2 ml-2" />
            </div>
            <div>
                <span>paymentStatus</span>
                <input type="radio" value="Selesai" name="paymentStatus" id="paymentStatus" className="border broder-2 ml-2" /> <span>Selesai</span>
                <input type="radio" value="Belum Selesai" name="paymentStatus" id="paymentStatus" className="border broder-2 ml-2" /> <span>Belum Selesai</span>
            </div>
            <div>
                <span>ID Event</span>
                <input type="text" name="eventId" id="eventId" className="border broder-2 ml-2" />
                <p className="text-[15px] text-red-600">ini harusnya id event tapi karena belum ada API buat event jadi buatkan dummy dahulu (nanti akan di update)</p>
            </div>
            <button type="submit" className="btn">Add Ticket</button>
        </form>


        <table className="table">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Payment Status</td>
                    <td>ID Event</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
            {loading? (
            <tr>
                <td>Loading...</td>
            </tr>
            ):(ticket.map((item: Ticket) => (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.paymentStatus}</td>
                    <td>{item.eventId}</td>
                    <td>
                        <RemoveTicketButton ticketId={item._id} />
                        <Link href={"/test_api/ticket/edit/" + item._id} className="btn bg-red-600"> Edit </Link>
                    </td>
                </tr>
            )))}
            </tbody>

        </table>
        </>
    );
}
