"use client";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer({ url }) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    console.log(numPages);
    setNumPages(numPages);
  }

  const pages = [];
  for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
    pages.push(
      <Page
        key={pageNumber}
        pageNumber={pageNumber}
        renderTextLayer={false}
        className="border rounded-xl flex justify-center"
        style={{
            width: "100%", // Lebar penuh pada tampilan web
            maxWidth: "1000px", // Lebar maksimum pada tampilan web
            margin: "0 auto", // Posisi tengah pada tampilan web
        }}
      />
    );
  }
  return (
    <div>
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<span className="loading loading-ring loading-lg"></span>}
      >
        {pages}
      </Document>
      <style jsx>{`
                @media screen and (max-width: 768px) {
                    .border {
                        max-width: 800px; // Lebar maksimum untuk tampilan mobile
                    }
                }
            `}</style>
    </div>
  );
}

// export default PDFViewer;
