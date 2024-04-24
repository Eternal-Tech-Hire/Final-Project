"use client";
import Modal from "@/components/Modal";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { FaPencil } from "react-icons/fa6";
import { TbBarcode } from "react-icons/tb";
import { FaCloudArrowUp } from "react-icons/fa6";
import QRCode from "qrcode";
import { newUser } from "@/db/models/Users";
import ModalQR from "@/components/QR";
import ModalCV from "@/components/UploadCV";
import PDFViewer from "@/components/PdfViewer";
// import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
// import ReactPDF from "@react-pdf/renderer";
// import { PDFViewer } from "@react-pdf/renderer";
// import { Document, Page } from "react-pdf";

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4',
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });

// const MyDoc = (url: string | undefined) => {
//   return(
//     <>
//     <Document file={{url}}>
//     <Page >
                
//               </Page>
//             </Document>
//     </>
//   )
// }

const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [data, setData] = useState<newUser>();
  const [qr, setQR] = useState<string>();
  const [showPDF, setShowPDF] = useState(false);

  const toggleModal = () => {
    // console.log("ok");

    setShowModal(!showModal);
    if (!showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  };

  const toggleModalQR = () => {
    setShowQR(!showQR);
    if (!showQR) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  };

  const toggleModalUpload = () => {
    setShowUpload(!showUpload);
    if (!showUpload) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  async function fetchData() {
    try {
      const res = await fetch(`/api/auth/users/`, {
        cache: "no-store",
      });

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

  useEffect(() => {
    fetchData();
  }, []);

  const generate = () => {
    QRCode.toDataURL("http://localhost:3000/profile/" + data?._id).then(setQR);
    // setQR(generateQR)
    toggleModalQR();
  };

 const handleButtonClick = () => {
        setShowPDF(!showPDF);
    }

  // console.log(data?.cv);
  
  return (
    <>
      <div className="h-full bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 px-16 pb-24">
        <div className="bg-white rounded-lg shadow-xl pb-8">
          <div className="absolute right-12 mt-4 rounded"></div>
          <div className="w-full h-[250px]">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
              className="w-40 border-4 border-white rounded-full"
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">{data?.name}</p>
              <span className="bg-blue-500 rounded-full p-1" title="Verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-100 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
            </div>
            <p className="text-gray-700">
              Fullstack Web Developer
            </p>
            <p className="text-sm text-gray-500">{data?.email}</p>
            {/* {ReactPDF.render(<PDFViewer><MyDoc /></PDFViewer>, `${data?.cv}`)} */}
            <button onClick={handleButtonClick}>Show CV</button>
            {showPDF && <PDFViewer url={data?.cv} />}
            {/* {qr ? <img src={qr} alt="" /> : ""} */}
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              <button
                className="flex items-center bg-gradient-to-br from-cyan-400 to-sky-600 hover:shadow-lg hover:scale-[1.05] text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
                onClick={toggleModalUpload}
              >
                <FaCloudArrowUp className="h-4 w-4" />
                <span>Upload CV</span>
              </button>
              <button
                className="flex items-center bg-gradient-to-br from-cyan-400 to-sky-600 hover:shadow-lg hover:scale-[1.05] text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
                onClick={toggleModal}
              >
                <FaPencil className="h-4 w-4" />
                <span>Edit Profile</span>
              </button>
              <button
                className="flex items-center bg-gradient-to-br from-cyan-400 to-sky-600 hover:shadow-lg hover:scale-[1.05] text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
                onClick={generate}
              >
                <TbBarcode className="h-5 w-5" />
                <span>Generate QR</span>
              </button>
            </div>
          </div>
          {showQR && (
            <div
              className="fixed inset-0 w-screen h-screen bg-black opacity-50 z-50"
              onClick={toggleModalQR}
            ></div>
          )}
          {showQR && <ModalQR qr={qr || ""} onClose={toggleModalQR} />}
          {showModal && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-50"
              onClick={toggleModal}
            ></div>
          )}
          {showModal && <Modal onClose={toggleModal} />}
          {showUpload && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-50"
              onClick={toggleModalUpload}
            ></div>
          )}
          {showUpload && (
            <ModalCV onClose={toggleModalUpload} userId={data?._id} />
          )}
          
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
