"use client"
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const SweetAlert = ({text} : any) => {
    useEffect(() => {
        const swalInstance = Swal.fire({
            icon: "error",
            title: "Error",
            text: text || "",
            showConfirmButton: false
        });

      
    }, [text]);

    return null; // SweetAlert component tidak memiliki tampilan visual
};

export default SweetAlert;
