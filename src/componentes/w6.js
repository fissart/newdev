import React from "react";
import jsPDF from "jspdf";
import { useRef, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
//https://www.nutrient.io/blog/how-to-convert-html-to-pdf-using-react/
//https://simonbengtsson.github.io/jsPDF-AutoTable/#content/
//http://raw.githack.com/MrRio/jsPDF/master/index.html
//https://github.com/simonbengtsson/jsPDF-AutoTable/blob/799cd737d7491155d0914e7b0dfb093976d16b21/examples/examples.js
const NoPage = () => {
  // const { id } = useParams();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      console.log(JSON.parse(localStorage.getItem("user")).name)
      console.log(JSON.parse(localStorage.getItem("user"))._id)
    }
    // get()
    // setFormData({ ...formData, rol:"3", name:"www", email:"www", foto:"www", password:"www" })
  }, []);


  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: 'a4',
      unit: 'px',
    })

    var img = new Image()
    img.src = './logo192.png'
    
    doc.setFont('Inter-Regular', 'normal')
    doc.text(20, 20, 'Hello world!')
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.')
    doc.addImage(img, 'png', 15, 40, 280, 180)

    doc.save("www.pdf")
  }

  return <div className="contenedor">
    <button className="button" onClick={handleGeneratePdf}>
      Generate PDF
    </button>
  </div>
}

export default NoPage;

