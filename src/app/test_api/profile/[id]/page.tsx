"use client"

import { newUser } from "@/db/models/Users";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
const CLOUD_API = process.env.CLOUD_API as string;

// type User = {
//     name: string,
//     email:string,
//     phoneNumber:string,
//     cv
// }

export default function profileId({params} : {params : {id : string}}){

    // const [file, setFile] = useState<File | undefined>()
    const [data, setData] = useState<newUser>()

    // async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    //     event.preventDefault();
    
    //     if (!file) {
    //       console.error("No file selected.");
    //       return;
    //     }
    
    //     const formData = new FormData();
    //     formData.append("file", file);
    //     formData.append("upload_preset", "finalproject");
    //     formData.append("api_key", CLOUD_API);
    
    //     try {
    //         // fetch to cloudinary
    //       const upload = await fetch(
    //         "https://api.cloudinary.com/v1_1/dzdi4yqlr/raw/upload",
    //         {
    //           method: "POST",
    //           body: formData,
    //         }
    //       );
    
    //       if (!upload.ok) {
    //         throw new Error("Failed to upload.");
    //       }
    
    //       const uploadRes = await upload.json();
    //       console.log(uploadRes);
    //       // insert to mongoDB
    //       const res = await fetch('/api/')

    //     } catch (error) {
    //       console.error("Error uploading image:", error);
    //     }
    //   }


    // function handleChange(event: ChangeEvent<HTMLInputElement>){
    //     // console.log("masuk?");
        
    //     const target = event.target as HTMLInputElement & {
    //         files : FileList
    //     }
    //     console.log(target.files);
        
    //     setFile(target.files[0])
    // }

    async function fetchData(userId : string){

        try {
            const res = await fetch(`/api/auth/users/${userId}`,{
                cache:"no-store"
            })

            if (res.ok) {
                
                const userData = await res.json();
                setData(userData.data);
            } else {
                console.error("Failed to fetch user data.");
            }

        } catch (error) {
            console.log(error); 
        }
    }

    useEffect(()=>{
        fetchData(params.id)
    },[params.id])

    console.log(data);
    
    return(
        <>
       <div>{data?.name}</div>
       {/* <form action="" className="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label><br />
        <input type="text" name="name" id="name" className="mb-5" /><br />

        <label htmlFor="email">Email</label><br />
        <input type="text" name="email" id="email" className="mb-5" /><br />

        <label htmlFor="phoneNumber">Phone Number</label><br />
        <input type="text" name="phoneNumber" id="phoneNumber" className="mb-5" /><br />

        <label htmlFor="cv">CV</label><br />
        <input type="file" name="cv" id="cv" className="mb-5" onChange={handleChange} /><br />

        <button type="submit">Submit</button>
      </form> */}
        </>
    )
}