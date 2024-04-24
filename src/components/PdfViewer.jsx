"use client";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css" 
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default function PDFViewer({url}){
    
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        console.log(numPages);
        setNumPages(numPages);
    }

    const pages = [];
    for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
        pages.push(
            <Page key={pageNumber} pageNumber={pageNumber} width={800} renderTextLayer={false} className={"border"} />
        );
    }
    return (
        <div>
            <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
                {pages}
            </Document>
        </div>
    );
};

// export default PDFViewer;