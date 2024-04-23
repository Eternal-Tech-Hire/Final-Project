"use client";
import React, { useEffect, useState} from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation';

type Events =  {
    _id: string;
    name: string;
    description: string;
    date: string;
    location: string;
    categoryId: string;
}

interface RemoveButtonProps {
  eventId: string;

}

interface AuthTypes{
  _id: string;
  email: string;
  role: string;
}

interface JoinButtonProps {
  eventId: string;
  companyId: string;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ eventId }) => {
    const router = useRouter();
    const removeById = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/events`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ _id: eventId }), 
          });

          if (!response.ok) {
            throw new Error('Failed to remove item');
          }
          router.push('/test_api/')

        } catch (error) {
          console.error('Error removing item:', error);
        }
    };

    return (
      <button onClick={removeById} className="btn btn-warning">Delete</button>
    );
};

const JoinButton: React.FC<JoinButtonProps> = ({ eventId, companyId }) => {
    const router = useRouter();
    const actionButton = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/events/company_join`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _id: eventId,
                idCompany: companyId
                }), 
          });

          if (!response.ok) {
            throw new Error('Failed to remove item');
          }
          alert("Berhasil Bergabung")

        } catch (error) {
          console.error('Error removing item:', error);
        }
    };

    return (
      <button onClick={actionButton} className="btn btn-warning">Join</button>
    );
};


export default function pageTicket() {
    const [events, setEvents] = useState<Events[]>([]);
    const [user, setUser] = useState<AuthTypes>();
    const [loading, setLoading] = useState(true);

    // ======================
    async function addEvent(formData: FormData) {

        const rawFormData = {
            name: formData.get("name"),
            description: formData.get("description"),
            date: formData.get("date"),
            location: formData.get("location"),
            categoryId: formData.get("categoryId")
        };

        const response = await fetch(`http://localhost:3000/api/events`, {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rawFormData),
        });

        redirect("/test_api/event");
    }
    // ======================

      useEffect(() => {
        async function fetchData() {
            try{
                "use client";
                // gunakan link ini untuk select semua data (http://localhost:3000/api/ticket)
               // link yang digunakan saat ini merupakan data yang di input oleh user (yang login saat ini)
                const response = await fetch(`http://localhost:3000/api/events`, {
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
                    setEvents(responseJson.data);
                }

                const responseUser = await fetch(`http://localhost:3000/api/auth/users`, {
                    method: "GET",
                    cache: "no-store",
                    headers: {},
                });

                if (!responseUser.ok) {
                    throw new Error("Failed to fetch items");
                }

                const responseUserJson = await responseUser.json();
                console.log(responseUserJson)
                if(responseUserJson != null){
                    setUser(responseUserJson.data);
                }
            }catch (error){
                console.error("Error fetching item:", error)
            }finally{
                setLoading(false);
            }
        };
        fetchData();
      }, []);

    return (
        <>
        <form action={addEvent} className="space-y-4 p-8">
            <h1>TEST ADD Event</h1>
            <div>
                <span>Name</span>
                <input type="text" name="name" id="name" className="border broder-2 ml-2" />
            </div>
            <div className="flex flex-col ">
                <span>Description</span>
                <textarea name="description" id="description" className="border-2 border"></textarea>
            </div>
            <div>
                <span>Date</span>
                <input type="date" name="date" id="date" className="border broder-2 ml-2" />
            </div>
            <div>
                <span>Location</span>
                <input type="text" name="location" id="location" className="border broder-2 ml-2" />
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
            <button type="submit" className="btn">Add Event</button>
        </form>


        <table className="table p-8">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Date</td>
                    <td>Location</td>
                    <td>Category</td>
                    <td>Action</td>
                    <td>Join (only company) </td>
                </tr>
            </thead>
            <tbody>
            {loading? (
            <tr>
                <td>Loading...</td>
            </tr>
            ):(events.map((item: Events) => (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.location}</td>
                    <td>{item.categoryId}</td>
                    <td>
                        <RemoveButton eventId={item._id} />
                        <Link href={"/test_api/event/edit/" + item._id} className="btn bg-red-600"> Edit </Link>
                    </td>
                    {
                        user!.role == "company" ? (
                            <JoinButton eventId={item._id} companyId={user!._id} />
                        ):(
                            <></>
                        )
                    }
                    <td>
                    </td>

                </tr>
            )))}
            </tbody>

        </table>

        <a href="http://localhost:3000/api/events"> Check Data </a>
        </>
    );
}
