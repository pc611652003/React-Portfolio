import React from 'react';
import pdf from "../../assets/resume/resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {

    return (
        <div id="pdfPage">
            <a href={pdf} target="_blank" rel="noreferrer" id="pdfLink">
                <button className='pdf-btn' >Download Resume</button>
            </a>
            <div id="resume">
                <Document file={pdf}><Page pageNumber={1} /></Document>
            </div>
        </div>
    );
}

export default Resume;