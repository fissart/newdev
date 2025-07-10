import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ExportToExcel from './calculadorajs'
import ExportToPdf from './boletanotas'
// import jsPDF from "jspdf"
// import autoTable from 'jspdf-autotable'
// import autoTable from 'jspdf-autotable'
// import Wwwww from './sphere.js'
import { useEffect, useState } from 'react'
import Select from 'react-select'
// import { Popover, Transition } from '@headlessui/react'

import ReactModal from 'react-modal';
import Modal from 'react-modal'
ReactModal.setAppElement('*'); // suppresses modal-related test warnings.

const ciclosacta = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
]

const mencionesacta = [
  { value: 'E', label: 'E' },
  { value: 'P', label: 'P' },
  { value: 'G', label: 'G' },
  { value: 'ED', label: 'ED' },
]
const yearsacta = [
  { value: '2022', label: '2022' },
  { value: '2023', label: '2023' },
  { value: '2024', label: '2024' },
  { value: '2025', label: '2025' },
]
const customStyles = {
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
    overflowY: "scroll"
  },
  content: {
    top: '56%',
    left: '50%',
    // background: 'lightgray',    // right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: "430px" //or maxHeight     // your code
  },
};

const items = [
  {
    alt: [
      [''],
      ['Muy clara'],
      ['Clara'],
      ['Regular'],
      ['Confusa'],
      ['Muy confusa']], prg: '¿Cómo califica la claridad de las explicaciones del docente?'
  },
  {
    alt: [
      [''],
      ['Totalmente de acuerdo'],
      ['De acuerdo'],
      ['Neutral'],
      ['En desacuerdo'],
      ['Totalmente en desacuerdo']], prg: '¿El docente demuestra un buen dominio del tema?'
  },
  {
    alt: [
      [''],
      ['Totalmente de acuerdo'],
      ['De acuerdo'],
      ['Neutral'],
      ['En desacuerdo'],
      ['Totalmente en desacuerdo']], prg: '¿El docente fomenta un ambiente de aprendizaje positivo?'
  },
  {
    alt: [
      [''],
      ['Muy accesible'],
      ['Accesible'],
      ['Regular'],
      ['Poco accesible'],
      ['Nada accesible']], prg: '¿Qué tan accesible es el docente para resolver dudas o consultas en horario académico?'
  },
  {
    alt: [
      [''],
      ['Muy clara'],
      ['Clara'],
      ['Regular'],
      ['Confusa'],
      ['Muy confusa']], prg: '¿Cómo calificaría la claridad de los criterios de evaluación proporcionados por el docente?'
  },
  {
    alt: [
      [''],
      ['Totalmente de acuerdo'],
      ['De acuerdo'],
      ['Neutral'],
      ['En desacuerdo'],
      ['Totalmente en desacuerdo']], prg: '¿El docente comunica de manera efectiva las fechas y formatos de las evaluaciones?'
  },
  {
    alt: [
      [''],
      ['Siempre'],
      ['A menudo'],
      ['Algunas veces'],
      ['Rara vez'],
      ['Nunca']], prg: '¿Recibe retroalimentación oportuna sobre sus evaluaciones?'
  },
  {
    alt: [
      [''],
      ['Totalmente de acuerdo'],
      ['De acuerdo'],
      ['Neutral'],
      ['En desacuerdo'],
      ['Totalmente en desacuerdo']], prg: '¿Considera que las evaluaciones reflejan de manera justa la comprensión del contenido del curso?'
  },
  {
    alt: [
      [''],
      ['Muy accesible'],
      ['Accesible'],
      ['Regular'],
      ['Poco accesible'],
      ['Nada accesible']], prg: '¿Cuán accesible es la información sobre su desempeño académico (calificaciones, comentarios del docente, etc.) en la plataforma digital?'
  },
  {
    alt: [
      [''],
      ['Muy adecuados'],
      ['Adecuados'],
      ['Neutral'],
      ['Poco adecuados'],
      ['Nada adecuados']], prg: '¿Los recursos utilizados (libros, materiales digitales, etc.) son adecuados y útiles?'
  },
  {
    alt: [
      [''],
      ['Muy justos'],
      ['Justos'],
      ['Neutral'],
      ['Injustos'],
      ['Muy injustos']], prg: '¿Cómo calificaría los métodos de evaluación del docente (exámenes, trabajos, prácticas calificadas, producción artística etc.)?'
  },
  {
    alt: [
      [''],
      ['Muy clara'],
      ['Clara'],
      ['Regular'],
      ['Confusa'],
      ['Muy confusa']], prg: '¿Cómo calificaría la claridad de las instrucciones proporcionadas para el uso de herramientas digitales?'
  },
  {
    alt: [
      [''],
      ['Totalmente de acuerdo'],
      ['De acuerdo'],
      ['Neutral'],
      ['En desacuerdo'],
      ['Totalmente en desacuerdo']], prg: '¿El docente utiliza adecuadamente las herramientas digitales para mejorar el aprendizaje?'
  },
  {
    alt: [
      [''],
      ['Totalmente de acuerdo'],
      ['De acuerdo'],
      ['Neutral'],
      ['En desacuerdo'],
      ['Totalmente en desacuerdo']], prg: '¿El docente fomenta la participación activa de los estudiantes en las plataformas digitales?'
  },
  {
    alt: [
      [''],
      ['Muy adecuados'],
      ['Adecuados'],
      ['Neutral'],
      ['Poco adecuados'],
      ['Nada adecuados']], prg: '¿Los recursos digitales (videos, foros, materiales en línea) son adecuados y útiles para su aprendizaje?'
  },
  {
    alt: [
      [''],
      ['Excelente'],
      ['Buena'],
      ['Buena'],
      ['Mala'],
      ['Muy mala']], prg: '¿Cómo calificaría la calidad de las herramientas digitales utilizadas en la clase del docente a cargo (plataformas de aprendizaje, software, etc.)?'
  },
  { alt: ['www'], prg: '¿Qué aspectos considera que el docente debería mejorar en su enseñanza?' },
  { alt: ['www'], prg: '¿Hay alguna metodología actualizada que te gustaría que se incorporara en la enseñanza?' },
  { alt: ['www'], prg: '¿Qué aspectos considera que el docente debería mejorar?' },
  { alt: ['www'], prg: '¿Hay algo más que le gustaría comentar sobre su experiencia en esta clase?' }
]


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

const Blogs = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [curse, setCurso] = useState();

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false)
  }


  const [selectedOption, setSelectedOption] = useState({ value: '3', label: '3' });

  // const [dataw, setData] = useState()
  const [www, setWww] = useState()
  const [calification, setCalification] = useState()
  const [options, setOptions] = useState()
  // const options = calification
  // const [ciclo, setCiclo] = useState('3')
  useEffect(() => {
    // btoa('./bitmap.png')
    // const reader = new FileReader();
    // reader.onload = e => setData( reader.result);
    // reader.readAsDataURL('./bitmap.png');

    if (localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '2') { get() }
    if (localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '3') { getstdcurses() }
    if (localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '3') { getstdcalifications() }
    // setFormData({ ...formData, rol:"3", name:"www", email:"www", foto:"www", password:"www" })
  }, []);

  const get = () => {
    fetch(`${process.env.REACT_APP_URL}/api/curses/cursosespecificos/${JSON.parse(localStorage.getItem("user"))._id}/true`)
      .then((response) => response.json())
      .then((www) => {
        setWww(www); // ⬅️ Guardar datos
        setWww(www[0].curses); // ⬅️ Guardar datos
        console.log(www[0].curses)
      });
  }

  const getstdcurses = () => {
    fetch(`${process.env.REACT_APP_URL}/api/curses/stdcurses/${JSON.parse(localStorage.getItem("user"))._id}/E/1`)
      .then((response) => response.json())
      .then((www) => {
        setWww(www); // ⬅️ Guardar datos
        // setWww(www[0].curses); // ⬅️ Guardar datos
        console.log(www)
      });
  }

  const getstdcalifications = async () => {
    fetch(`${process.env.REACT_APP_URL}/api/users/stdnotes/${JSON.parse(localStorage.getItem("user"))._id}`)
      .then((response) => response.json())
      .then((www) => {
        setCalification(www)

        var ciclos = []

        for (var i = 0; i < www.length; i++) {
          ciclos.push({ value: www[i]._id, label: www[i]._id })
        }
        setOptions(ciclos)
        console.log(www)
        setSelectedOption({ value: www[www.length - 1]._id, label: www[www.length - 1]._id })
      });
  }


  const sendEncuesta = async (e) => {
    // const login = async (e) => {
    e.preventDefault()
    console.log("w1w")
    setIsOpen(false)

    // fetch(process.env.REACT_APP_URL + '/api/www/curses', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     curse: JSON.parse(localStorage.getItem("user"))._id,
    //     user: JSON.parse(localStorage.getItem("user"))._id,
    //     userteacher: JSON.parse(localStorage.getItem("user"))._id,
    //   })
    // })
    //   .then(response => response.json())
    //   .then(data => { toast.info(data); getstdcurses() })
    //   .catch(error => console.error(error));
  }

  // const wwwww = () => {
  //   fetch(process.env.REACT_APP_URL + '/api', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       message: 'www',
  //       user: '63ab4f45a06c6fe92e7a4209',
  //       name: 'www'
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(data => { toast.warning(data); get() })
  //     .catch(error => console.error(error));
  // }

  const wwdelete = (item) => {
    return fetch(process.env.REACT_APP_URL + '/api/curses/' + item, {
      method: 'delete'
    })
      .then(response => response.json())
      .then(data => { toast.warning(data); getstdcurses() })
  }


  const [formData, setFormData] = useState({
    ciclo: "3",
    year: "2024",
    mencion: "E",
    w1: "",
    w2: "",
    w3: "",
    w4: "",
    w5: "",
    w6: "",
    w7: "",
    w8: "",
    w9: "",
    w10: "",
    w11: "",
    w12: "",
    w13: "",
    w14: "",
    w15: "",
    w16: "",
    w17: "",
    w18: "",
    w19: "",
    w20: "",
  })

  const handleChange = (text) => (e) => {
    console.log(e.target.value, text);
    setFormData({ ...formData, [text]: e.target.value });
  }

  const selectStyles = {
    control: (base) => ({
      ...base,
      borderRadius: '.02cm',
      // padding: '6px 5px',
      // border: '1px solid #21274F !important',
      border: '0 !important',
      backgroundColor: 'tomato',
      color: 'white',
      boxShadow: 'none',
      '&:focus': {
        border: '0 !important',
      },
    }),
  }

  const listItems = www ? www.map((number) =>
    <div style={{ backgroundColor: 'wheat', padding: '.1cm', margin: '.2cm', padding: '.2cm', width: '9cm', width: '9cm', color: 'black', borderRadius: '.1cm' }} key={number._id}>
      <div style={{ alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', display: 'flex' }}>
        <Link style={{ color: 'lightgray', padding: '7px 16px', textAlign: 'center', marginBottom: '6px', width: '100%', background: 'slateblue', borderRadius: '.2cm' }} to={'/curso/' + number._id} onClick={() => localStorage.setItem('curse', number._id)} >
          {number.title}
          <div style={{ fontSize: '13px', padding: '.1cm', padding: '7px 16px', textAlign: 'center' }}>{number.userw[0].email}</div>
        </Link>
        {/* <div style={{ fontSize: '15px', padding: '.1cm', textAlign: 'center' }}>{number._id}</div> */}
        {/* <div style={{ fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{number.requisito}</div> */}
        {/* <div style={{ fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{number.user}</div> */}
        {/* <div style={{ fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{JSON.parse(localStorage.getItem("user"))._id}</div> */}
        {/* <div style={{ fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{number.ciclo} {number.credito} {number.year} {number.mencion}</div> */}
        {/* <div style={{ fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{number.codigo}</div> */}
        {/* <Link style={{ color: 'blue', padding: '7px 16px', textAlign: 'center', background: 'yellow', borderRadius: '.0cm' }} onClick={() => wwdelete(number._id)}>errase</Link> */}
        
        {/* <Link style={{ color: 'black', padding: '7px 16px', textAlign: 'center', background: 'orange', borderRadius: '.2cm' }} onClick={() => { setCurso(number); openModal(); console.log(number) }}>Encuesta [Curso docente]</Link> */}
        
      </div>
    </div>
  ) : <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
  </header>

  return (
    <div className="contenedor" >
      {/* <Link to="/www">Boleta de nota</Link> */}

      {localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '2' ?
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>{listItems}</div>
        : localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '1' ?
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Select styles={selectStyles} value={yearsacta[1]} onChange={handleChange("year")} options={yearsacta} />
              <Select styles={selectStyles} value={ciclosacta[1]} onChange={handleChange("ciclo")} options={ciclosacta} />
              <Select styles={selectStyles} value={mencionesacta[1]} onChange={handleChange("mencion")} options={mencionesacta} />
              <ExportToExcel year={formData.year} ciclo={formData.ciclo} mencion={formData.mencion} />
            </div>
            <Link style={{ color: 'black', border: 'none', padding: '8px 16px', textAlign: 'center', background: 'orange', borderRadius: '.02cm' }} to="/img">STD</Link>
            <Link style={{ color: 'black', border: 'none', padding: '8px 16px', textAlign: 'center', background: 'orange', borderRadius: '.02cm' }} to="/img">TEACHER</Link>
            <Link style={{ color: 'black', border: 'none', padding: '8px 16px', textAlign: 'center', background: 'orange', borderRadius: '.02cm' }} to="/img">REGISTER</Link>
          </>
          :
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Select styles={selectStyles}
                value={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
              <ExportToPdf data={calification} cicle={selectedOption.value} />
            </div>
            {/* <button onClick={() => wwwww()}>Create curse std</button> */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>{listItems}</div>
            {curse ? <div>
              <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <h2 style={{ color: 'tomato' }}>{curse.title} [{curse.mencion} {curse.ciclo}]</h2>
                <h5 style={{ color: 'tomato' }}>{curse.userw[0].email}</h5>
                <form onSubmit={sendEncuesta} >
                  <ol>
                    {items.map((number, i) =>
                      <li key={number._id}>
                        {number.prg}
                        {number.alt.length > 1 ?
                          <div>
                            <select name="cars" id="cars" onChange={handleChange("w" + (i + 1))} required="required">
                              {number.alt.map((alternativa) =>
                                <option style={{ border: 'solid 1pt orange', padding: '.1cm', margin: '.2cm', width: '9cm', borderRadius: '.02cm' }} key={alternativa._id} value={alternativa}>
                                  {alternativa}
                                </option>
                              )}
                            </select>
                          </div> :
                          <textarea onChange={handleChange("w" + (i + 1))} required="required"></textarea>
                        }
                      </li>
                    )}
                  </ol>
                  <button type="submit" style={{ color: 'black', border: 'none', padding: '8px 16px', textAlign: 'center', background: 'orange', borderRadius: '.02cm' }}>
                    {"Enviar encuesta"}
                  </button>
                  <button onClick={closeModal} style={{ color: 'white', border: 'none', padding: '8px 16px', textAlign: 'center', background: 'brown', borderRadius: '.02cm' }}>close</button>
                </form>
              </Modal>
            </div> : null}

          </>
      }
    </div >
  );
}

export default Blogs

