"use client";
import React, { useEffect, useState} from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation';

type CompanyTypes =  {
    _id: string;
    name: string;
    jobOffer: string;
}

interface RemoveButtonProps {
  id: string;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ id }) => {
    const router = useRouter();
    const removeById = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/company`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ _id: id }), 
          });

          if (!response.ok) {
            throw new Error('Failed to remove item');
          }
          router.push('/test_api')

        } catch (error) {
          console.error('Error removing item:', error);
        }
    };

    return (
      <button onClick={removeById} className="btn btn-warning">Delete</button>
    );
};


export default function page() {
    const [data, setData] = useState<CompanyTypes[]>([]);
    const [loading, setLoading] = useState(true);

    // ======================
    async function addForm(formData: FormData) {

        const rawFormData = {
            name: formData.get("name"),
            jobOffer: formData.get("jobOffer")
        };

        const response = await fetch(`http://localhost:3000/api/company`, {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rawFormData),
        });

        redirect("/test_api/company");
    }
    // ======================

      useEffect(() => {
        async function fetchData() {
            try{
                "use client";
                // gunakan link ini untuk select semua data (http://localhost:3000/api/ticket)
               // link yang digunakan saat ini merupakan data yang di input oleh user (yang login saat ini)
                const response = await fetch(`http://localhost:3000/api/company`, {
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
        <form action={addForm} className="space-y-4 p-8">
            <h1>TEST ADD Company</h1>
            <div>
                <span>Name</span>
                <input type="text" name="name" id="name" className="border broder-2 ml-2" />
            </div>
            <div>
                <span>Job Offer</span>
                <input type="text" name="jobOffer" id="jobOffer" className="border broder-2 ml-2" />
            </div>

            <button type="submit" className="btn">Add</button>
        </form>


        <table className="table p-8">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Job Offer</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
            {loading? (
            <tr>
                <td>Loading...</td>
            </tr>
            ):(data.map((item : CompanyTypes) => (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.jobOffer}</td>
                    <td>
                        <RemoveButton id={item._id} />
                        <Link href={"/test_api/company/edit/" + item._id} className="btn bg-red-600"> Edit </Link>
                    </td>
                </tr>
            )))}
            </tbody>

        </table>
        </>
    );
}
