import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import React from "react"
import jsPDF from "jspdf"
import { useRef, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//https://www.nutrient.io/blog/how-to-convert-html-to-pdf-using-react/
//https://simonbengtsson.github.io/jsPDF-AutoTable/#content/
//http://raw.githack.com/MrRio/jsPDF/master/index.html
//https://github.com/simonbengtsson/jsPDF-AutoTable/blob/799cd737d7491155d0914e7b0dfb093976d16b21/examples/examples.js

const NoPage = () => {
  const { id, idc } = useParams();
  const [wwwww, setWww] = useState()
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
    await fetch(`${process.env.REACT_APP_URL}/api/curses/ControllerAll/${id}/${JSON.parse(localStorage.getItem("user"))._id}`)
      .then((response) => response.json())
      .then((data) => {
        setWww(data[0])
        // setWww(www.reverse()); // ⬅️ Guardar datos
        console.log(data[0])
      })
      .then(response => response.json())
      // .then(data => { toast.warning(data); get() })
      .catch(error => console.error(error))
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
  const update = (event, id) => {
    fetch(`${process.env.REACT_APP_URL}/api/sections/theme/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: event.trim(),
        name: '63ab4f45a06c6fe92e7a4209'
      })
    })
      .then(response => response.json())
      .then(data => { toast.info(data); get() })
      .catch(error => console.error(error));
    console.log("www")

  }

  const updateSection = (event, id) => {
    fetch(`${process.env.REACT_APP_URL}/api/sections/section/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: event.trim(),
        name: '63ab4f45a06c6fe92e7a4209'
      })
    })
      .then(response => response.json())
      .then(data => { toast.info(data); get() })
      .catch(error => console.error(error));
    console.log("www")

  }



  return <div className="contenedor">
    <ToastContainer
      position="bottom-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick={true} rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} closeButton={false}
    />
    <button className="button" onClick={handleGeneratePdf}>
      Generate PDF {id}
    </button>
    {wwwww ?
      < div style={{ backgroundColor: 'rgb(155,95,155)', width: '100%' }} key={wwwww._id}>
        <div style={{ fontSize: '15px', padding: '.1cm', textAlign: 'center' }}>{wwwww.title}</div>
        <div style={{ fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{wwwww.requisito}</div>
        <div style={{ fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{wwwww.ciclo} {wwwww.credito} {wwwww.year} {wwwww.mencion}</div>
        <div style={{ fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{wwwww.codigo}</div>
        {localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '2' ? <div style={{ alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', display: 'flex' }}>
          <button onClick={() => wwdelete(wwwww._id)}>errase</button>
          {/* <button onClick={() => update(wwwww._id)}>update</button> */}
          <button><Link style={{ color: 'black' }} to={'/curso/' + wwwww._id} onClick={() => localStorage.setItem('curse', wwwww._id)} >
            Ir al curso
          </Link></button>
        </div> : null}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          {wwwww.unidades.map((unt,i) =>
            <div style={{ backgroundColor: 'blue', padding: '.1cm', margin: '.2cm', width: '16cm' }} key={unt._id}>
              <div style={{ backgroundColor: 'white', fontSize: '15px', padding: '.1cm', textAlign: 'center' }} onBlur={(e) => updateSection(e.target.textContent, unt._id)} contenteditable="true">{unt.title}</div>
              <div style={{ backgroundColor: 'white', fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{unt.actitudinal} {unt.procedimental} {unt.conceptual}</div>
              <div style={{ backgroundColor: 'white', fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{unt.codigo}</div>
              {localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '2' ?
                <div style={{ alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', display: 'flex' }}>
                  <button onClick={() => wwdelete(unt._id)}>errase</button>
                  {/* <button onClick={() => update(unt._id)}>update</button>  */}
                  <button><Link style={{ color: 'black' }} to={'/curso/' + unt._id + '/' + unt._id} onClick={() => localStorage.setItem('curse', unt._id)} >
                    Ir al curso {i}
                  </Link></button>
                </div> : null}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                {unt.temas.map((tms,j) =>
                  <div style={{ backgroundColor: 'cyan', padding: '.1cm', margin: '.2cm', width: '7cm' }} key={tms._id}>
                    <div style={{ backgroundColor: 'white', fontSize: '15px', padding: '.1cm', textAlign: 'center' }} onBlur={(e) => update(e.target.innerText, tms._id)} contenteditable="true">{tms.title}</div>
                    <div style={{ backgroundColor: 'white', fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{tms.task}</div>
                    <div style={{ backgroundColor: 'white', fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{tms._id}</div>
                    <div style={{ backgroundColor: 'white', fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{tms.ciclo} {tms.credito} {tms.year} {tms.mencion}</div>
                    <div style={{ backgroundColor: 'white', fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{tms.codigo}</div>
                    {localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '2' ?
                      <div style={{ alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', display: 'flex' }}>
                        <button onClick={() => wwdelete(tms._id)}>errase</button>
                        {/* <button onClick={() => update(tms._id)}>update</button>  */}
                        <button><Link style={{ color: 'black' }} to={`/tema/${tms._id}/${i+1}/${j+1}`} onClick={() => localStorage.setItem('curse', tms._id)} >
                          Ir a la sesion {j+1} {i+1}
                        </Link></button>
                      </div> : null}
                  </div>
                )}
              </div>

            </div>
          )}
        </div>
      </div>
      : <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    }
    <div onChange={(e) => console.log(e.target.innerHTML)}>
      wwwww
      <textarea></textarea>
      <div>
        <input type="checkbox" id="scales" name="scales"/>
        <label for="scales">Scales</label>
      </div>
      <div>
        <input type="checkbox" id="horns" name="horns" />
        <label for="horns">Horns</label>
      </div>
      <div>
        <input type="checkbox" id="horns" name="horns" />
        <label for="horns">Horns</label>
      </div>
      <div>
        <input type="checkbox" id="horns" name="horns" />
        <label for="horns">Horns</label>
      </div>
      <div>
        <input type="checkbox" id="horns" name="horns" />
        <label for="horns">Horns</label>
      </div>
    </div>
    {/* <img src={logo} width="100%" height="" />
    <img src={'../esfap.png'} width="100%" height="" /> */}
  </div >
}

export default NoPage;

