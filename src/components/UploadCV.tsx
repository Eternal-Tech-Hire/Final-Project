import { ObjectId } from 'mongodb';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Swal from 'sweetalert2';

interface ModalProps {
  onClose: () => void;
  userId: string | undefined |  ObjectId;
}
const CLOUD_API = process.env.CLOUD_API as string;

const ModalCV: React.FC<ModalProps> = ({ onClose, userId}) => {
  const router = useRouter()
  const closeModal = () => {
    onClose();
  };


  async function handleSubmit(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    const target = event.target as HTMLInputElement & {
      files: FileList;
    };

    console.log(target.files[0], "di handle ");
    
    if (!target.files[0]) {
      console.error("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", target.files[0]);
    formData.append("upload_preset", "finalproject");
    formData.append("api_key", CLOUD_API);

    try {
      // fetch to cloudinary
      const upload = await fetch(
        "https://api.cloudinary.com/v1_1/dzdi4yqlr/raw/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      console.log(upload, "upload status");
      
      if (!upload.ok) {
        throw new Error("Failed to upload.");
      }

      const uploadRes = await upload.json();
      console.log(uploadRes, "uploadRes");
      
      // insert to mongoDB
      const res = await fetch(
        "http://localhost:3000/api/auth/users/" + userId,
        {
          method: "POST",
          body: JSON.stringify({
            // name: document.getElementById("name").value,
            // email: document.getElementById("email").value,
            // phoneNumber: document.getElementById("phoneNumber").value,
            cv: uploadRes.url,
            // role: data?.role,
          }),
        }
      );
      Swal.fire({
        icon: 'success',
        title: 'Success Upload CV',
        showConfirmButton: false,
        timer: 2000 
      });
      closeModal()
      router.refresh()
      console.log(res);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }
  
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-gray-900 bg-opacity-75 fixed inset-0"></div>
      <div className="dark:bg-cyan-950 rounded-lg shadow-xl relative z-50 max-w-md w-full p-4">
        <div className="flex justify-end p-2">
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={closeModal}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <h1 className='text-xl font-bold text-center mb-5 text-white'>Upload Your CV</h1>
        <div className="flex items-center justify-center bg-gray-100 p-6 rounded-lg">
          <form>
          <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-600 rounded-lg shadow-lg tracking-wide uppercase border border-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2 text-base leading-normal">Select a file</span>
            <input type="file" className="hidden" onChange={handleSubmit} accept='.pdf'/>
          </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalCV;
