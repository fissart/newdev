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

//https://www.nutrient.io/blog/how-to-convert-html-to-pdf-using-react/
//https://simonbengtsson.github.io/jsPDF-AutoTable/#content/
//http://raw.githack.com/MrRio/jsPDF/master/index.html
//https://github.com/simonbengtsson/jsPDF-AutoTable/blob/799cd737d7491155d0914e7b0dfb093976d16b21/examples/examples.js
const NoPage = () => {
  const { id } = useParams();
  const [edit, setEdit] = useState("false")
  const [wwwww, setWww] = useState()
  const [unity, setUnity] = useState()
  const [curso, setCurso] = useState()
  const [user, setUser] = useState()
  // console.log(wwwww.title)
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
    await fetch(`${process.env.REACT_APP_URL}/api/sections//${id}/${JSON.parse(localStorage.getItem("user"))._id}`)
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
    // fetch(process.env.REACT_APP_URL + "/api/links/" + id, {
    //   method: 'put',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     detail: edit,
    //     name: '63ab4f45a06c6fe92e7a4209'
    //   })
    // })
    //   .then(response => response.json())
    //   .then(data => { toast.info(data); get() })
    //   .catch(error => console.error(error));
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
    <button className="button" onClick={handleGeneratePdf}>
      Generate PDF {id}
    </button>
    {wwwww ?
      < div style={{ backgroundColor: 'orange', padding: '.1cm', margin: '.2cm', width: '100%' }} key={wwwww._id}>
        {edit == "false" ?
          <>
            <button onClick={() => { setEdit("true") }}>Editar</button>
            <div style={{ backgroundColor: 'white', padding: '.1cm', textAlign: 'center' }}>{user.dni}</div>
            <div style={{ backgroundColor: 'white', padding: '.1cm', textAlign: 'center' }}>{unity.title}</div>
            <div style={{ backgroundColor: 'white', padding: '.1cm', textAlign: 'center' }}>{curso.title}</div>
            <div style={{ backgroundColor: 'white', padding: '.1cm', textAlign: 'center' }}>{curso.mencion}
              {curso.ciclo}..
              {curso.requisito}..
              {curso.year}..
              {curso.codigo}..
              {curso.credito}..
            </div>
            <div style={{ backgroundColor: 'white', fontSize: '15px', padding: '.1cm', textAlign: 'center' }}>{wwwww.title}</div>
            <div style={{ backgroundColor: 'white' }}>
              <Markdown>{wwwww.description.replace(/(<oembed url="https:\/\/www.dailymotion.com\/video\/)(.*?)(".*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.dailymotion.com/embed/video/$2"></iframe>`).replace(/(<oembed url="https:\/\/www.youtube.com\/watch\?v=)(.*?)(".*?oembed>|&.*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.youtube.com/embed/$2"></iframe>`).replace(/(<script type="math\/tex; mode=display">)(.*?)(<\/script>)/g, "\n$$$$\n$2\n$$$$\n").replace(/(<script type="math\/tex">)(.*?)(<\/script>)/g, "$$$2$$").replace(/(<p>)/g, "").replace(/(<\/p>)/g, "").replace(/(<h2>)/g, "").replace(/(<\/h2>)/g, "").replace(/(<li>)/g, "\n 1. ").replace(/(<\/li>)/g, "").replace(/(<ol>)/g, "").replace(/(<\/ol>)/g, "").replace(/(<blockquote>)/g, "\n > ").replace(/(<\/blockquote>)/g, "\n\n ").replace(/<a href="(.*?)">(.*?)(<\/a>)/g, "[$2]($1)")}
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

