import logo from '../logo.png';
// import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import React from "react"
import jsPDF from "jspdf"
import { useRef, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/es';
import 'katex/dist/katex.min.css';
import Markdown from "./markdownwww";
import { useReactToPrint } from "react-to-print";
// import { useRef } from "react";

//https://www.nutrient.io/blog/how-to-convert-html-to-pdf-using-react/
//https://simonbengtsson.github.io/jsPDF-AutoTable/#content/
//http://raw.githack.com/MrRio/jsPDF/master/index.html
//https://github.com/simonbengtsson/jsPDF-AutoTable/blob/799cd737d7491155d0914e7b0dfb093976d16b21/examples/examples.js
const NoPage = () => {
  const { id } = useParams()
  const { number } = useParams()
  const { numberr } = useParams()
  const [edit, setEdit] = useState("false")
  const [wwwww, setWww] = useState()
  const [unity, setUnity] = useState()
  const [curso, setCurso] = useState()
  const [user, setUser] = useState()
  // console.log(wwwww.title)

  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });

  useEffect(() => {
    if (id && localStorage.getItem("user")) {
      //   console.log(JSON.parse(localStorage.getItem("user")).name)
      //   console.log(JSON.parse(localStorage.getItem("user"))._id)
      get()
    }
    // get()
    // setFormData({ ...formData, rol:"3", name:"www", email:"www", foto:"www", password:"www" })
  }, []);
  // const [edit, setEdit] = useState()
  const get = async () => {
    await fetch(`${process.env.REACT_APP_URL}/api/sections/theme/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setWww(data[0])
        setUser(data[0].userr[0])
        setCurso(data[0].curso[0])
        console.log(data[0].unity[0])
        setUnity(data[0].unity[0])
        // setWww(www.reverse()); // ⬅️ Guardar datos
        console.log(data[0])
      })
      .then(response => response.json())
      // .then(data => { toast.warning(data); get() })
      .catch(error => console.error(error))
  }
  const update = (id) => {
    fetch(`${process.env.REACT_APP_URL}/api/sections/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        detail: edit,
        name: '63ab4f45a06c6fe92e7a4209'
      })
    })
      .then(response => response.json())
      .then(data => { toast.info(data); get() })
      .catch(error => console.error(error));
    console.log("www")

  }

  const handleGeneratePdf = async () => {
    const doc = new jsPDF({
      format: 'a4',
      unit: 'px',
    })

    var img = new Image()
    img.src = await '../esfap.png'

    doc.setFont('Inter-Regular', 'normal')
    doc.text(20, 20, 'Hello world!')
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.')
    img.onload = function () {
      // doc.addImage(img, 'png', 5, 5, 40, 10)
      doc.addImage(img, 'png', 45, 40, 280, 230)
      //  doc.save('myPDF.pdf')
      doc.save("www.pdf")
    }
  }
  const wwdelete = (item) => {
    return fetch(process.env.REACT_APP_URL + '/api/' + item, {
      method: 'delete'
    })
      .then(response => response.json())
      .then(data => { toast.warning(data); get() })
  }



  return <div className="contenedor">
    <ToastContainer
      position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick={true} rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} closeButton={false}
    />
    <button onClick={reactToPrintFn}>Imprimir</button>
    <button className="button" onClick={handleGeneratePdf}>
      Generate PDF {id}
    </button>
    <button onClick={() => { setEdit("true") }}>Editar</button>
    {wwwww ?
      < div ref={contentRef} style={{ backgroundColor: 'orange', width: '100%' }} key={wwwww._id}>
        {edit == "false" ?
          <>
            <div style={{ padding: '.2cm 0', textAlign: 'center', fontWeight: 'bold' }}>SESIÓN DE APRENDIZAJE Unidad {number} Sesión {numberr}</div>
            {/* <div style={{ padding: '.2cm 0' }}><span style={{ fontWeight: 'bolder' }}>Titulo: </span>{wwwww.title}</div>
            <div style={{ padding: '.2cm 0' }}><span style={{ fontWeight: 'bolder' }}>Codigo: </span>{curso.codigo}</div>
            <div style={{ padding: '.2cm 0' }}><span style={{ fontWeight: 'bolder' }}>Crédito: </span>{curso.credito}</div>
            <div style={{ padding: '.2cm 0' }}><span style={{ fontWeight: 'bolder' }}>Ciclo: </span>{curso.ciclo}</div>
            <div style={{ padding: '.2cm 0' }}><span style={{ fontWeight: 'bolder' }}>Unidad: </span>{unity.title}</div>
            <div style={{ padding: '.2cm 0' }}><span style={{ fontWeight: 'bolder' }}>Curso: </span>{curso.title}</div>
            <div style={{ padding: '.2cm 0' }}><span style={{ fontWeight: 'bolder' }}>Requisito: </span>{curso.requisito}</div>
            <div style={{ padding: '.2cm 0' }}><span style={{ fontWeight: 'bolder' }}>Mencion: </span>{curso.mencion}</div>
            <div style={{ padding: '.2cm 0' }}><span style={{ fontWeight: 'bolder' }}>Year: </span>{curso.year}</div> */}
            <div style={{ padding: '.1cm 0', textAlign: 'center', fontWeight: 'bold' }}><span style={{ fontWeight: 'bolder' }}>Titulo: </span>{wwwww.title}</div>
            <div style={{ padding: '.2cm 0', fontWeight: 'bold' }}>DATOS INFORMATIVOS</div>
            <table>
              <tbody>
                <tr>
                  <td><strong>DREA</strong></td><td>: Ayacucho</td>
                  <td><strong>SEMESTRE</strong></td><td>: {curso.ciclo % 2 === 0 ? "Par" : "Impar"}</td>
                </tr>
                <tr>
                  <td><strong>E.S.F.A.</strong></td><td>: Escuela Superior de Bellas Artes “FGPA</td>
                  <td><strong>DURACIÓN</strong></td><td>: {curso.credito * 45} minutos</td>
                </tr>
                <tr>
                  <td><strong>ÁREA</strong></td><td>: ARTE</td>
                  <td><strong>FECHA</strong></td><td>: 18-03-2025</td>
                </tr>
                <tr>
                  <td><strong>CICLO</strong></td><td>: {curso.ciclo}</td>
                  <td><strong>DOCENTE</strong></td><td>: {user.name}</td>
                </tr>
                <tr>
                  <td><strong>CRÉDITO</strong></td><td>: {curso.credito}</td>
                  <td><strong>CICLO</strong></td><td>: {curso.ciclo}</td>
                </tr>
                <tr>
                  <td><strong>UNIDAD</strong></td><td>: {unity.title}</td>
                  <td><strong>REQUISITO</strong></td><td>: {curso.requisito}</td>
                </tr>
                <tr>
                  <td><strong>MENCION</strong></td><td>: {curso.mencion}</td>
                  <td><strong>CODIGO</strong></td><td>: {curso.codigo}</td>
                </tr>
                <tr>
                  <td><strong>YEAR</strong></td><td>: {curso.year}</td>
                  <td><strong>CURSO</strong></td><td>: {curso.title}</td>
                </tr>
              </tbody>
            </table>
            <div>
              <Markdown>{wwwww.description.replace(/(<oembed url="https:\/\/www.dailymotion.com\/video\/)(.*?)(".*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.dailymotion.com/embed/video/$2"></iframe>`).replace(/(<oembed url="https:\/\/www.youtube.com\/watch\?v=)(.*?)(".*?oembed>|&.*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.youtube.com/embed/$2"></iframe>`).replace(/(<script type="math\/tex; mode=display">)(.*?)(<\/script>)/g, "\n$$$$\n$2\n$$$$\n").replace(/(<script type="math\/tex">)(.*?)(<\/script>)/g, "$$$2$$").replace(/(<h2>)/g, "").replace(/(<\/h2>)/g, "").replace(/(<li>)/g, "\n 1. ").replace(/(<\/li>)/g, "").replace(/(<ol>)/g, "").replace(/(<\/ol>)/g, "").replace(/(<blockquote>)/g, "\n > ").replace(/(<\/blockquote>)/g, "\n\n ").replace(/<a href="(.*?)">(.*?)(<\/a>)/g, "[$2]($1)")//.replace(/(<p>)/g, "").replace(/(<\/p>)/g, "")
              }
              </Markdown>
            </div>
          </>
          :
          <div style={{ backgroundColor: 'orange' }} className="card" key={wwwww._id}>
            <button onClick={() => { update(wwwww._id); setEdit("false") }}>Actualizar</button>
            <CKEditor
              editor={ClassicEditor}
              data={wwwww.description}
              config={{ language: 'es', }}
              // onChange={(event, editor) => { setEdit(editor.getData()) }}
              onReady={editor => { console.log('Editor is ready to use!', editor) }}
            />
          </div>}
      </div>
      : <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    }
    {/* <img src={logo} width="100%" height="" />
    <img src={'../esfap.png'} width="100%" height="" /> */}
  </div >
}

export default NoPage;

