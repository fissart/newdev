//https://www.svgrepo.com/svg/522064/comment-1
import logo from '../logo.png';
import { useNavigate } from "react-router-dom";
// import { useCallback } from 'react'
import * as THREE from 'three'
import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { Html, Environment, useGLTF, ContactShadows, OrbitControls } from '@react-three/drei'
// import { Link } from 'react-router-dom';
import HeroPage from './HeroPage'
import HeroPagewww from './HeroPage copy'
import { TextureLoader } from 'three'
import Message from './message'
import { useState } from 'react'
import { useProgress } from '@react-three/drei'
import { Model } from './sphere'
import { ToastContainer, toast } from 'react-toastify';
// import ReactPlayer from 'react-player'
import Markdown from "./markdownwww";
// import ReactModal from 'react-modal';
import Modal from 'react-modal'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/es';
import 'katex/dist/katex.min.css';
const { format, register } = require('timeago.js')

register('es_ES', (number, index, total_sec) => [
  ['justo ahora', 'ahora mismo'],
  ['hace %s segundos', 'en %s segundos'],
  ['hace 1 minuto', 'en 1 minuto'],
  ['hace %s minutos', 'en %s minutos'],
  ['hace 1 hora', 'en 1 hora'],
  ['hace %s horas', 'in %s horas'],
  ['hace 1 dia', 'en 1 dia'],
  ['hace %s dias', 'en %s dias'],
  ['hace 1 semana', 'en 1 semana'],
  ['hace %s semanas', 'en %s semanas'],
  ['1 mes', 'en 1 mes'],
  ['hace %s meses', 'en %s meses'],
  ['hace 1 año', 'en 1 año'],
  ['hace %s años', 'en %s años']
][index]);

const timeago = timestamp => format(timestamp, 'es_ES');

<ToastContainer
  position="bottom-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick={true} rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} closeButton={false}
/>

// ReactModal.setAppElement('*'); // suppresses modal-related test warnings.

//https://blog.bitsrc.io/building-a-scrollable-chat-box-with-react-b3848a4459fc

function isSmallScreen() {
  if (typeof window !== 'undefined') {
    // console.log(window.innerWidth,"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww")
    return window.innerWidth < 768;
  }
  return false;
}

const customStyles = {
  overlay: {
    background: "rgba(0, 0, 0, 0.8)",
    zIndex: '99999',
    overflowY: "scroll"
  },
  content: {
    background: 'white',
    borderRadius: "3px !important",
    top: '50%',
    bottom: 'auto',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: "none",
    padding: '.9em',
    height: 'auto',
    maxHeight: '90vh',
    // right: 'auto',
    // overflow: 'none',
    width: isSmallScreen() ? '92vw' : '75vw'
  }
};


export default function Home() {
  const navigate = useNavigate()
  // const [curse, setCurso] = useState()
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    clean()
    setIsOpen(false)
  }

  const [modalIsOpen1, setIsOpen1] = React.useState(false);
  function openModal1() {
    setIsOpen1(true);
  }
  function closeModal1() {
    clean()
    setIsOpen1(false)
  }

  const [modalIsOpen2, setIsOpen2] = React.useState(false);
  function openModal2() {
    setIsOpen2(true)
  }
  function closeModal2() {
    clean()
    setIsOpen2(false)
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  const [www, setWww] = useState()
  // const [docs, setTitle] = useState()
  const [wwwww, setWwwww] = useState()
  const [news, setNews] = useState()
  useEffect(() => {
    getland()
    getforo()
    getnews()
  }, []);



  const [type, setType] = useState()
  const [title, setTitle] = useState()
  const [idforo, setIdforo] = useState()
  const [edit, setEdit] = useState()
  const [description, setDescription] = useState()


  const clean = async () => {
    setType('')
    setTitle('')
    setDescription('')
    setIdforo('')
    setEdit('')
    setShow('')
  }

  const [isLoading, setIsLoading] = useState(false);

  const getforo = async () => {
    await fetch(process.env.REACT_APP_URL + "/api/links/foros")
      .then((response) => response.json())
      .then((www) => {
        setWwwww(www)
      })
      .catch(error => console.error(error))
  }



  const createForo = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    fetch(process.env.REACT_APP_URL + '/api/links/foros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        foreign: idforo,
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user"))._id : '63ab4f45a06c6fe92e7a4209',
        description,
        type
        // type: 'comenta'
      })
    })
      .then(response => response.json())
      .then(data => { toast.info(data); getforo(); closeModal(); setIsLoading(false); clean() })
      .catch(error => console.error(error));
  }

  const updateForo = async (e) => {
    e.preventDefault()
    fetch(process.env.REACT_APP_URL + "/api/links/foros/" + idforo, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description,
        title
      })
    })
      .then(response => response.json())
      .then(data => { toast.info(data); getforo(); closeModal(); clean() })
      .catch(error => console.error(error));
  }



  const Removeforo = async (id) => {
    const response = window.confirm('Deseas eliminar este documento?');
    if (response) {
      return fetch(process.env.REACT_APP_URL + '/api/links/foros/' + id, {
        method: 'delete'
      })
        .then(response => response.json())
        .then(data => { toast.info(data); getforo() })
    }
  }



  const [show, setShow] = useState()






  const getnews = async () => {
    await fetch(process.env.REACT_APP_URL + "/api/links/news")
      .then((response) => response.json())
      .then((www) => {
        setNews(www.reverse())
        for (const file of www) {
          if (file.show == 'true') {
            console.log(file)
            setDescription(file.description)
            setTitle(file.title)
            openModal2()
            // var texto = file.user;
            // return { w1: file.title, w2: file.description, w3: file.img };
            // return texto;
          }
        }
        // console.log(www)
      })
      // .then(response => response.json())
      // .then(data => { toast.warning(data); get() })
      .catch(error => console.error(error))
  }

  const createNews = async (e) => {
    e.preventDefault()
    // isLoading(true)
    if (description != '') {
      fetch(process.env.REACT_APP_URL + '/api/links/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          description,
          user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user"))._id : '63ab4f45a06c6fe92e7a4209',
          img: 'img',
          show
        })
      })
        .then(response => response.json())
        .then(data => { toast.info(data); getnews(); closeModal1(); setIsLoading(false); clean() })
        .catch(error => console.error(error));
    }
  }


  const updateNews = async (e) => {
    e.preventDefault()
    fetch(process.env.REACT_APP_URL + "/api/links/news/" + idforo, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description,
        show,
        title
      })
    })
      .then(response => response.json())
      .then(data => { toast.info(data); getnews(); closeModal1(); clean() })
      .catch(error => console.error(error));
  }


  const RemoveNew = async (id) => {
    const response = window.confirm('Deseas eliminar este documento?');
    if (response) {
      return fetch(process.env.REACT_APP_URL + '/api/links/news/' + id, {
        method: 'delete'
      })
        .then(response => response.json())
        .then(data => { toast.info(data); getnews() })
    }
  }

















  const getland = async () => {
    await fetch(process.env.REACT_APP_URL + "/api/links/lands")
      .then((response) => response.json())
      .then((www) => {
        setWww(www)
      })
      .catch(error => console.error(error))
  }


  // const handleChange = (text) => (e) => {
  //   console.log(e.target.value, text);
  //   setFormData({ ...formData, [text]: e.target.value });
  // }

  const [formData, setFormData] = useState({
    name: "",
    photoSelected: "",
    type: "",
    files: [],
    email: "",
    password: "",
    textChange: "Actualizar",
    rol: "",
  })

  const fileSelectHandler = (file, typeland) => {
    if (file[0]) {
      console.log(file[0])
      const reader = new FileReader();
      reader.onload = e => setFormData({ ...formData, photoSelected: reader.result, files: file, type: file[0].type, name: file[0].name });
      reader.readAsDataURL(file[0])
      createLand(typeland)
    }
  }

  const createLand = async (typeland) => {
    // e.preventDefault()
    // setFormData({ ...formData, textChange: "Submitting" });
    const data = new FormData()
    data.append("title", formData.name)
    data.append("codigo", "String")
    data.append("type", typeland)
    data.append("blogspot", "String")
    data.append("youtube", "String")
    data.append("instagram", "String")
    data.append("whatsapp", "String")
    data.append("facebook", "String")
    data.append("description", "String")
    data.append("img", formData.files[0])
    data.append("user", localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user"))._id : "63ab4f45a06c6fe92e7a4209")
    data.append("curse", "63ab4f45a06c6fe92e7a4209")
    console.log(data)
    fetch(process.env.REACT_APP_URL + "/api/links/lands", {
      method: 'POST',
      body: data
    }).then(response => response.json())
      .then(data => { toast.warning(data); getland() })
      .catch(error => console.error(error))
  }

  // const updateLands = async (e) => {
  //   e.preventDefault()
  //   fetch(process.env.REACT_APP_URL + "/api/links/news/" + idforo, {
  //     method: 'put',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       description,
  //       show,
  //       title
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(data => { toast.info(data); getnews(); closeModal1(); clean() })
  //     .catch(error => console.error(error));
  // }
  const updateLand = (file) => {
    console.log(file[0])
    // if (file[0]) {
    //   const reader = new FileReader();
    //   reader.onload = e => setFormData({ ...formData, photoSelected: reader.result, files: file, namefile: file[0].type });
    //   reader.readAsDataURL(file[0])

    const data = new FormData()
    data.append("title", "String")
    // data.append("codigo", "String")
    // data.append("type", "image")
    // data.append("blogspot", "String")
    // data.append("youtube", "String")
    // data.append("instagram", "String")
    // data.append("whatsapp", "String")
    // data.append("facebook", "String")
    data.append("description", "String")
    data.append("img", file[0])
    // data.append("user", "63ab4f45a06c6fe92e7a4209")
    // data.append("curse", "63ab4f45a06c6fe92e7a4209")
    console.log(data, file[0])

    fetch(process.env.REACT_APP_URL + "/api/links/lands/" + idforo, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
      .then(response => response.json())
      .then(data => { toast.info(data); getnews(); closeModal1(); clean() })
      .catch(error => console.error(error))

    // }

  }



  const removeLand = async (id) => {
    const response = window.confirm('Deseas eliminar este archivo?');
    if (response) {
      return fetch(process.env.REACT_APP_URL + '/api/links/lands/' + id, {
        method: 'delete'
      })
        .then(response => response.json())
        .then(data => { toast.info(data); getland() })
    }
  }

















  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  }


  const listItems = www ? www.map((number) =>
    <div style={{ backgroundColor: 'wheat', padding: '.1cm', margin: '.2cm', padding: '.2cm', width: '100%', color: 'black', borderRadius: '.1cm' }} key={number._id}>
      <div style={{ alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', display: 'flex' }}>
        {/* {number._id == 'link' || number._id == 'videosyoutube' ? <button onClick={() => { createLand(number._id) }} className="btn" style={{ marginTop: '.3em' }}>Crear {number._id} {formData.name}</button> :
          <input type="file" className="" onChange={(e) => { fileSelectHandler(e.target.files, number._id) }} />
        } */}
        <div className="text-uppercase" style={{ alignItems: 'center', width: '100%', justifyContent: 'center', flexWrap: 'wrap', display: 'flex', color: 'orange' }}>{number._id}</div>
        {number.records.map((tms, j) =>
          <div style={{ backgroundColor: 'white', padding: '.1cm', margin: '.2cm', width: '9.5cm' }} key={tms._id}>
            {number._id == "videosyoutube" ? <iframe width="100%" height="215"
              src={`https://www.youtube.com/embed/${tms.blogspot}?autoplay=0&mute=1`}>
            </iframe> : null}
            {number._id == "link" ? <button style={{ cursor: 'pointer', width: '100%', border: 'none', padding: '7px 16px', textAlign: 'center', background: 'orange', borderRadius: '.2cm' }}
              type="button"
              onClick={() => openInNewTab(tms.description)}
            >
              {tms.title}
            </button> : null}

            {number._id == "documentos" ? <button style={{ cursor: 'pointer', width: '100%', border: 'none', padding: '7px 16px', textAlign: 'center', background: 'skyblue', borderRadius: '.2cm' }}
              type="button"
              onClick={() => { setDescription(tms.description); openModal() }}
            >
              {tms.title}
            </button> : null}
            {number._id == "image" ? <>
              <button style={{ cursor: 'pointer', width: '100%', border: 'none', padding: '7px 16px', textAlign: 'center', background: 'orange', borderRadius: '.2cm' }} type="button" onClick={() => openInNewTab(tms.description)}
              >{tms.title}
              </button>
              <button style={{ cursor: 'pointer', width: '100%', border: 'none', padding: '7px 16px', textAlign: 'center', background: 'skyblue', borderRadius: '.2cm' }}
                type="button"
                onClick={() => openInNewTab(tms.description)}
              ><img src={process.env.REACT_APP_URL + '/link/' + tms.img} height="120px" />
              </button>
              {/* <input type="file" className="" onChange={(e) => { fileSelectHandler(e.target.files, number._id); setIdforo(tms._id); }} /> */}
            </> : null}
            {number._id == "invitados" ? <button style={{ cursor: 'pointer', width: '100%', border: 'none', padding: '7px 16px', textAlign: 'center', background: 'skyblue', borderRadius: '.2cm' }}
              type="button"
              onClick={() => openInNewTab(tms.description)}
            ><img src={logo} alt="logo" />
            </button> : null}
            { localStorage.getItem("user") && tms.user == JSON.parse(localStorage.getItem("user"))._id ? <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
              <button className="btn" onClick={() => { setTitle(tms.description); openModal() }}><Edit /></button>
              <button className="btn" onClick={() => { removeLand(tms._id) }}><Res /></button>
            </div> : null}

          </div>
        )}
      </div>
    </div>
  ) : null


  const listForos = wwwww ? wwwww.map((number) =>
    <div style={{ justifyContent: 'left', width: '100%', marginBottom: '.1cm', marginTop: '.1cm' }} key={number._id}>
      {/* <div style={{ padding: '.1cm', border: '1pt solid orange' }}> */}
      <div >
        <div style={{ width: '100%' }}>
          <p>
          </p>
          <p className="" style={{ fontSize: '11px' }}>
            {number.usser[0].email}  {number.createdAt} {number.updatedAt} Creado {timeago(number.createdAt)} Actualizado {timeago(number.updatedAt)}
          </p>
        </div>
        <h3 className="text-uppercase">
          {number.title}
        </h3>
        <Markdown>{number.description.replace(/(<oembed url="https:\/\/www.dailymotion.com\/video\/)(.*?)(".*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.dzilymotion.com/embed/video/$2"></iframe>`).replace(/(<oembed url="https:\/\/www.youtube.com\/watch\?v=)(.*?)(".*?oembed>|&.*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.youtube.com/embed/$2"></iframe>`).replace(/(<script type="math\/tex; mode=display">)(.*?)(<\/script>)/g, "\n$$$$\n$2\n$$$$\n").replace(/(<script type="math\/tex">)(.*?)(<\/script>)/g, "$$$2$$").replace(/(<p>)/g, " \n").replace(/(<\/p>)/g, " \n").replace(/(<h2>)/g, "# ").replace(/(<\/h2>)/g, "\n ").replace(/(<figure>)/g, " \n").replace(/(<\/figure>)/g, "\n").replace(/(<li>)/g, "\n 1. ").replace(/(<\/li>)/g, "").replace(/(<ol>)/g, "").replace(/(<\/ol>)/g, "\n").replace(/(<ul>)/g, "").replace(/(<\/ul>)/g, "\n").replace(/(<blockquote>)/g, "\n > ").replace(/(<\/blockquote>)/g, "\n\n ").replace(/<a href="(.*?)">(.*?)(<\/a>)/g, "[$2]($1)")}
        </Markdown>
        {localStorage.getItem("user") ? <button className="btn" onClick={() => { setType('comenta'); setIdforo(number._id); setEdit('false'); openModal(); }}><Comment /></button> : <button className="btn" onClick={e => localStorage.getItem("user") ? null : navigate('/contacto')}><Comment /></button>}
        {localStorage.getItem("user") && number.usser[0]._id == JSON.parse(localStorage.getItem("user"))._id ? <><button className="btn" onClick={() => { setTitle(number.title); setDescription(number.description); setEdit('true'); setType('theme'); setIdforo(number._id); openModal() }}><Edit /></button>
          <button className="btn" onClick={() => { Removeforo(number._id) }}><Res /></button></> : null}
        {number.comenta.map((comenta, j) =>
          <div style={{ border: '1pt solid orange', paddingLeft: '.3cm', paddingRight: '.1cm', paddingBottom: '.1cm', paddingTop: '.1cm', marginTop: '.1cm', boxSizing: 'border-box', width: '100%' }} key={comenta._id}>

            <div style={{ fontSize: '11px' }}>
              {comenta.usser[0].email}  {comenta.createdAt} {comenta.updatedAt}  Creado {timeago(comenta.createdAt)} Actualizado {timeago(comenta.updatedAt)}

            </div>
            <Markdown>{comenta.description.replace(/(<oembed url="https:\/\/www.dailymotion.com\/video\/)(.*?)(".*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.dzilymotion.com/embed/video/$2"></iframe>`).replace(/(<oembed url="https:\/\/www.youtube.com\/watch\?v=)(.*?)(".*?oembed>|&.*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.youtube.com/embed/$2"></iframe>`).replace(/(<script type="math\/tex; mode=display">)(.*?)(<\/script>)/g, "\n$$$$\n$2\n$$$$\n").replace(/(<script type="math\/tex">)(.*?)(<\/script>)/g, "$$$2$$").replace(/(<p>)/g, " \n").replace(/(<\/p>)/g, " \n").replace(/(<h2>)/g, "# ").replace(/(<\/h2>)/g, "\n ").replace(/(<figure>)/g, " \n").replace(/(<\/figure>)/g, "\n").replace(/(<li>)/g, "\n 1. ").replace(/(<\/li>)/g, "").replace(/(<ol>)/g, "").replace(/(<\/ol>)/g, "").replace(/(<blockquote>)/g, "\n > ").replace(/(<\/blockquote>)/g, "\n\n ").replace(/<a href="(.*?)">(.*?)(<\/a>)/g, "[$2]($1)")}
            </Markdown>
            {localStorage.getItem("user") ? <button className="btn" onClick={() => { setType('comenta'); setIdforo(comenta._id); setEdit('false'); openModal(); }}><Comment /></button> : <button className="btn" onClick={e => localStorage.getItem("user") ? null : navigate('/contacto')}><Comment /></button>}
            {(localStorage.getItem("user") && comenta.usser[0]._id == JSON.parse(localStorage.getItem("user"))._id) || (localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '1') ? <><button className="btn" onClick={() => { setTitle(comenta.title); setDescription(comenta.description); setEdit('true'); setType('comenta'); setIdforo(comenta._id); openModal() }}><Edit aria-hidden="true" /></button>
              <button className="btn" onClick={() => { Removeforo(comenta._id) }}><Res /></button></> : null}
            {comenta.comentas.map((comenttas, k) =>
              <div style={{ border: '1pt solid orange', paddingLeft: '.3cm', paddingRight: '.1cm', paddingBottom: '.1cm', paddingTop: '.1cm', marginTop: '.1cm', boxSizing: 'border-box', width: '100%' }} key={comenttas._id}>
                <div style={{}}>
                  <div style={{ fontSize: '11px' }}>
                    {comenttas.usser[0].email} {comenttas.createdAt} {comenttas.updatedAt} Creado {timeago(comenttas.createdAt)} Actualizado {timeago(comenttas.updatedAt)}

                  </div>
                </div>
                <Markdown>{comenttas.description.replace(/(<oembed url="https:\/\/www.dailymotion.com\/video\/)(.*?)(".*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.dailymotion.com/embed/video/$2"></iframe>`).replace(/(<oembed url="https:\/\/www.youtube.com\/watch\?v=)(.*?)(".*?oembed>|&.*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.youtube.com/embed/$2"></iframe>`).replace(/(<script type="math\/tex; mode=display">)(.*?)(<\/script>)/g, "\n$$$$\n$2\n$$$$\n").replace(/(<script type="math\/tex">)(.*?)(<\/script>)/g, "$$$2$$").replace(/(<p>)/g, "").replace(/(<\/p>)/g, "").replace(/(<h2>)/g, "").replace(/(<\/h2>)/g, "").replace(/(<li>)/g, "\n 1. ").replace(/(<\/li>)/g, "").replace(/(<ol>)/g, "").replace(/(<\/ol>)/g, "").replace(/(<blockquote>)/g, "\n > ").replace(/(<\/blockquote>)/g, "\n\n ").replace(/<button href="(.*?)">(.*?)(<\/a>)/g, "[$2]($1)")}
                </Markdown>
                {localStorage.getItem("user") ? <button className="btn" onClick={() => { setType('comenta'); setIdforo(comenttas._id); setEdit('false'); openModal(); }}><Comment /></button> : <button className="btn" onClick={e => localStorage.getItem("user") ? null : navigate('/contacto')}><Comment /></button>}
                {localStorage.getItem("user") && comenttas.usser[0]._id == JSON.parse(localStorage.getItem("user"))._id ? <><button className="btn" onClick={() => { setTitle(comenttas.title); setDescription(comenttas.description); setEdit('true'); setType('comenta'); setIdforo(comenttas._id); openModal() }}><Edit /></button>
                  <button className="btn" onClick={() => { Removeforo(comenttas._id) }}><Res /></button></> : null}

                {comenttas.comentass.map((wwwwwcomenta, k) =>
                  <div style={{ border: '1pt solid orange', paddingLeft: '.3cm', paddingRight: '.1cm', paddingBottom: '.1cm', paddingTop: '.1cm', marginTop: '.1cm', boxSizing: 'border-box', width: '100%' }} key={wwwwwcomenta._id}>
                    <div style={{}}>
                      <div style={{ fontSize: '11px' }}>
                        {wwwwwcomenta.usser[0].email} {wwwwwcomenta.createdAt} {wwwwwcomenta.updatedAt} Creado {timeago(wwwwwcomenta.createdAt)} Actualizado {timeago(wwwwwcomenta.updatedAt)}

                      </div>
                    </div>
                    <Markdown>{wwwwwcomenta.description.replace(/(<oembed url="https:\/\/www.dailymotion.com\/video\/)(.*?)(".*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.dailymotion.com/embed/video/$2"></iframe>`).replace(/(<oembed url="https:\/\/www.youtube.com\/watch\?v=)(.*?)(".*?oembed>|&.*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.youtube.com/embed/$2"></iframe>`).replace(/(<script type="math\/tex; mode=display">)(.*?)(<\/script>)/g, "\n$$$$\n$2\n$$$$\n").replace(/(<script type="math\/tex">)(.*?)(<\/script>)/g, "$$$2$$").replace(/(<p>)/g, "").replace(/(<\/p>)/g, "").replace(/(<h2>)/g, "").replace(/(<\/h2>)/g, "").replace(/(<li>)/g, "\n 1. ").replace(/(<\/li>)/g, "").replace(/(<ol>)/g, "").replace(/(<\/ol>)/g, "").replace(/(<blockquote>)/g, "\n > ").replace(/(<\/blockquote>)/g, "\n\n ").replace(/<button href="(.*?)">(.*?)(<\/a>)/g, "[$2]($1)")}
                    </Markdown>
                    {/* {localStorage.getItem("user") ? <button className="btn" onClick={() => { setType('comenta'); setIdforo(wwwwwcomenta._id); setEdit('false'); openModal(); }}><Comment /></button> : <button className="btn" onClick={e => localStorage.getItem("user") ? null : navigate('/contacto')}><Comment /></button>} */}
                    {localStorage.getItem("user") && wwwwwcomenta.usser[0]._id == JSON.parse(localStorage.getItem("user"))._id ? <><button className="btn" onClick={() => { setTitle(wwwwwcomenta.title); setDescription(wwwwwcomenta.description); setEdit('true'); setType('comenta'); setIdforo(wwwwwcomenta._id); openModal() }}><Edit /></button>
                      <button className="btn" onClick={() => { Removeforo(wwwwwcomenta._id) }}><Res /></button></> : null}

                  </div>
                )}

              </div>
            )}

          </div>
        )}
      </div>
    </div>
  ) : null

  const listNews = news ? news.map((number, i) =>
    <div style={{ borderRadius: '.01cm', margin: '.1cm', boxSizing: 'border-box' }} key={number._id}>
      <button style={{ background: number.show == 'true' ? 'orange' : 'skyblue', width: '100%' }} className="btn-warning"
        onClick={() => { setTitle(number.title); setDescription(number.description); openModal2() }}
      >
        {number.title}
      </button>
      <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
        {localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '1' ? <><button className="btn" onClick={() => { setShow(number.show); setTitle(number.title); setDescription(number.description); setIdforo(number._id); setEdit('true'); openModal1() }}><Edit /></button>
          <button className="btn" onClick={() => { RemoveNew(number._id) }}>-</button></> : null}
      </div>
    </div>
  ) : <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
  </header>



  return (
    <div className="contenedor">

      {news ? <div style={{ alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', display: 'flex' }}>
        <div style={{ alignItems: 'center', justifyContent: 'center', padding: '.1cm', margin: '.2cm' }} className="jumbo">
          <h1 class="display-6" style={{ textAlign: 'center', color: "rgb(9, 24, 92)" }}>Escuela Superior de Formación
            Artística Felipe Guamán Poma de Ayala ESFAPA Ayacucho</h1>
          <p class="lead text-center" style={{ textAlign: 'center', color: "rgb(5, 12, 43)" }}>
            Escuela Superior de Formación Artística pública de formación profesional en artes visuales
            desarrollado
            en un plan de estudios de 5 años ubicado en la ciudad de Ayacucho.
          </p>
          <div style={{ textAlign: 'center' }}>
            <img src={logo} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ margin: '.2cm' }}>Jr. Mariano Melgar Nº 398, Distrito Jesús Nazareno Huamanga, Ayacucho</div>
            <button style={{ margin: ".1cm;" }} className="btn" target="_blank"
              href="https://api.whatsapp.com/send?phone=+51 966999215&text=Hola%20bienvenido">
              <Wattsapp aria-hidden="true" />
            </button>
            <button style={{ margin: ".1cm;" }} className="btn" target="_blank"
              href="https://web.facebook.com/bellasartes.ayacucho">
              <Facebook aria-hidden="true" />
            </button>
            <button style={{ margin: ".1cm;" }} className="btn" target="_blank"
              href="https://www.tiktok.com/@bellasartes.ayacucho">
              <Tiktok aria-hidden="true" />
            </button>
            <button style={{ margin: ".1cm;" }} className="btn" target="_blank"
              href="https://www.youtube.com/channel/UCkYf1NyZ1kUl3965WgeL6rw">
              <Youtube aria-hidden="true" />
            </button>
            <button style={{ margin: ".1cm;" }} className="btn" target="_blank"
              href="https://instagram.com/bellasartes.ayacucho">
              <Instagram aria-hidden="true" />
            </button>
          </div>
          <div style={{ textAlign: 'center', margin: '.2cm' }}>
            <button className="btn"
              type="button"
              onClick={(e) => {
                e.preventDefault()
                window.location.href = '/nosotros'
              }}
            >
              Saber más
            </button>
          </div>

        </div>
        <div style={{ padding: '.1cm', margin: '.2cm', textAlign: 'center' }} className="news">
          {localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '1' ? <button onClick={() => { setTitle(description); setType('news'); setEdit('false'); setShow('false'); openModal1() }} className="btn" style={{ marginTop: '.3em' }}>Crear comunicado</button> : null}
          <div style={{ alignItems: 'center', borderRadius: '.1cm', background: "rgba(245, 250, 250, 0.8)", justifyContent: 'center', overflowY: 'scroll', height: '400px' }}>{listNews}</div>
        </div>
      </div> : null}
      <div className='iniciocontenedor' >
        <Canvas camera={{ position: [-35, 26, -35], fov: 35 }}>
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={<Loader />}>
            <group position={[0, 1.5, 0]}>
              {/* <Model scale={11.5} position={[0, 9.5, 0]}/> */}
              <Box />
            </group>
            <Environment preset="city" />
          </Suspense>
          <ContactShadows position={[0, -4.5, 0]} scale={50} blur={1} far={9.5} /> minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2}
          <OrbitControls enablePan={true} enableZoom={true} />
        </Canvas>
      </div>

      {/* <div className='iniciocontenedor' >
        <Canvas camera={{ position: [9, -6, 66], fov: 35 }}>
          <Suspense fallback={<Loader />}>
            <Box />
          </Suspense>
          <OrbitControls enablePan={true} enableZoom={true} />
        </Canvas>
      </div> */}wwwwwwwwwwwwwwwwwwwwwwwwww
      {news ? <Message /> : null}

      {/* <div style={{ position: 'fixed', bottom: '30px', right: '30px' }}>
        <button onClick={openModal} className="btn-info">Chat</button>
      </div> */}

      {/* <Link to="/img">Socket</Link>
      <button onClick={sendimg} className="btn">wwwwwww</button>    */}
      {/* <form onSubmit={updateLand} className="row">
        <input type="text" placeholder="rol" onChange={handleChange("rol")} value={formData.rol} />
        <input type="email" placeholder="Email" onChange={handleChange("email")} value={formData.email} />
        <input type="text" placeholder="Name" onChange={handleChange("name")} value={formData.name} />
        <input type="text" placeholder="Password" onChange={handleChange("password")} value={formData.password} />
        <input type="file" className="form-control d-none" onChange={(e) => { fileSelectHandler(e.target.files); }} id="foto"></input>
        <button type="submit" className="btn btn-info mb-1 w-100">
          {"textChange"} {formData.namefile}
        </button>
      </form> */}

      {localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '1' ?
        <button onClick={() => { setTitle(description); setType('theme'); setEdit('false'); setIdforo(JSON.parse(localStorage.getItem("user"))._id); openModal() }} className="btn" style={{ textAlign: 'center', width: '100%', marginTop: '1.9em' }}>
          Crear tema de foro
        </button>
        : null}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>{listForos}</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>{listItems}</div>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <form onSubmit={edit == 'true' ? updateForo : createForo} >
          {type == 'comenta' ? '' : <input className="form1" placeHolder="Título" onChange={e => setTitle(e.target.value)} value={title} required />}
          <CKEditor
            editor={ClassicEditor}
            data={edit == 'true' ? description : ''}
            config={{ language: 'es', placeholder: "Descripción" }}
            onChange={(event, editor) => { setDescription(editor.getData().replace(/(&nbsp;)/g, "").replace(/(&nbsp; )/g, "").replace(/(<p><\/p>)/g, "")) }}
          // onReady={editor => { console.log('Editor is ready to use!', editor) }}
          />
          <div style={{ justifyContent: 'flex-end', display: 'flex', marginTop: '.5em' }}>
            {/* <div style={{ position: 'absolute', right: '1em', bottom: 0 }}> */}
            <button type="submit" className="btn-info" disabled={isLoading}>
              {edit == 'true' ? 'Actualizar' : 'Crear comentario'}
            </button>
            <button onClick={closeModal} className="btn-danger">Cerrar</button>
          </div>
        </form>
      </Modal>


      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <form onSubmit={edit == 'true' ? updateNews : createNews} >
          {type == 'comenta' ? '' : <input className="form1" placeHolder="Título" onChange={e => setTitle(e.target.value)} value={title} required autofocus />}
          <CKEditor
            editor={ClassicEditor}
            data={description}
            config={{ language: 'es', placeholder: "Descripción" }}
            onChange={(event, editor) => { setDescription(editor.getData()) }}
          />
          <select name="cars" id="cars" onChange={e => setShow(e.target.value)} required="required" className='btn-light'>
            {show == 'true' ? <><option value={"false"} >No mostrar comunicado</option>
              <option value={"true"} selected>Mostrar comunicado</option></> :
              <><option value={"false"} selected>No mostrar comunicado</option>
                <option value={"true"} >Mostrar comunicado</option></>}
          </select>
          <div style={{ justifyContent: 'flex-end', display: 'flex', marginTop: '.5em' }}>
            <button type="submit" className="btn-info">
              {edit == 'true' ? 'Actualizar comunicado' : 'Crear comunicado'}
            </button>
            <button onClick={closeModal1} className="btn-danger">Close</button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <h1 style={{ marginTop: '0%', padding: '0%' }} className="text-uppercase">{title}</h1>
        <div>
          <Markdown>{description ? description.replace(/(<oembed url="https:\/\/www.dailymotion.com\/video\/)(.*?)(".*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.dzilymotion.com/embed/video/$2"></iframe>`).replace(/(<oembed url="https:\/\/www.youtube.com\/watch\?v=)(.*?)(".*?oembed>|&.*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.youtube.com/embed/$2"></iframe>`).replace(/(<script type="math\/tex; mode=display">)(.*?)(<\/script>)/g, "\n$$$$\n$2\n$$$$\n").replace(/(<script type="math\/tex">)(.*?)(<\/script>)/g, "$$$2$$").replace(/(<p>)/g, " \n").replace(/(<\/p>)/g, " \n").replace(/(<h2>)/g, "# ").replace(/(<\/h2>)/g, "\n ").replace(/(<figure>)/g, " \n").replace(/(<\/figure>)/g, "\n").replace(/(<li>)/g, "\n 1. ").replace(/(<\/li>)/g, "").replace(/(<ol>)/g, "").replace(/(<\/ol>)/g, "").replace(/(<ul>)/g, "").replace(/(<\/ul>)/g, "\n").replace(/(<blockquote>)/g, "\n > ").replace(/(<\/blockquote>)/g, "\n\n ").replace(/<a href="(.*?)">(.*?)(<\/a>)/g, "[$2]($1)") : null}
          </Markdown>
        </div>
        <div style={{ justifyContent: 'flex-end', display: 'flex', marginTop: '.5em' }}>
          <button onClick={closeModal2} className="btn-danger">Cerrar</button>
        </div>
      </Modal>


      {
        news ? <div style={{ alignItems: 'center', width: '100%', justifyContent: 'center', flexWrap: 'wrap', display: 'flex' }}>
          <div style={{ padding: '.1cm', margin: '.2cm', width: '9.5cm', textAlign: 'center' }}>
            <div style={{ fontWeight: 'bold' }}>
              ESCUELA SUPERIOR DE FORMACIÓN ARTÍSTICA
            </div>
            <div>
              "Felipe Guamán Poma de Ayala"
            </div>
            <img style={{ padding: ".5em" }} src={logo} />

          </div>
          <div style={{ padding: '.1cm', margin: '.2cm', width: '9.5cm', textAlign: 'center' }}>
            {/* <div>
              <div>Ayacucho</div>
            </div> */}
            <div>
              <div>https://www.esfapa.edu.pe</div>
            </div>
            <div>
              Teléfono: 066-287499
            </div>
            <div style={{ margin: '.2cm' }}>
              <div style={{ color: 'blue' }}>©Copyright ESFA Ayacucho 2025</div>
            </div>
          </div>
          <div style={{ padding: '.1cm', margin: '.2cm', width: '9.5cm', textAlign: 'center' }}>
            <div style={{ margin: '.2cm' }}>
              Jr. Mariano Melgar Nº 398, Distrito Jesús Nazareno Huamanga, Ayacucho
            </div>

            <button style={{ margin: ".1cm;" }} className="btn" target="_blank"
              href="https://api.whatsapp.com/send?phone=+51 966999215&text=Hola%20bienvenido">
              <Wattsapp aria-hidden="true" />
            </button>
            <button style={{ margin: ".1cm;" }} className="btn" target="_blank"
              href="https://web.facebook.com/bellasartes.ayacucho">
              <Facebook aria-hidden="true" />
            </button>
            <button style={{ margin: ".1cm;" }} className="btn" target="_blank"
              href="https://www.tiktok.com/@bellasartes.ayacucho">
              <Tiktok aria-hidden="true" />
            </button>
            <button style={{ margin: ".1cm;" }} className="btn" target="_blank"
              href="https://www.youtube.com/channel/UCkYf1NyZ1kUl3965WgeL6rw">
              <Youtube aria-hidden="true" />
            </button>
            <button style={{ margin: ".1cm;" }} className="btn" target="_blank"
              href="https://instagram.com/bellasartes.ayacucho">
              <Instagram aria-hidden="true" />
            </button>
          </div>
        </div> : null
      }

    </div >
  )
}


function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % Cargando</Html>
}
function Box(props) {
  const group = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    // group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.1, 0.1)
    // group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1)
    // group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1)
    // group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1)
  })
  // const {progress} = useProgress()
  // return <Html center>{progress} % loaded</Html>
  const [size, set] = useState(5.5)
  // const controls = useThree((state) => state.controls)
  const colorMap = useLoader(TextureLoader, './upload.png')
  // const gltf = useLoader(GLTFLoader, './www.gltf')
  const [sizew, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight
    })
  useEffect(() => (
    window.onresize = updateSize
    // socket.disconnect()
  ), [])
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh scale={sizew.x < 615 ? size * .5 : size * 1}>
        {/* <buttonmbientLight intensity={2} /> */}
        {/* <directionalLight /> */}
        <mesh>
          <Model scale={2.1} position={[0, .5, 0]} />
          <meshStandardMaterial map={colorMap} />
        </mesh>
        {/* <primitive object={gltf} /> */}
        <Html className="content" style={{ background: 'white' }} occlude="blending" distanceFactor={1.8} position={[0, 0, -3]} rotation-y={-3.14} transform>
          <HeroPage />
        </Html>
        <Html className="content" style={{ background: 'white' }} occlude="blending" distanceFactor={1.8} rotation-y={-3.14} rotation-x={-3.14} rotation-z={-3.1416} position={[0, 0, 3]} transform>
          <HeroPage />
        </Html>
        <Html className="content" style={{ background: 'rgb(155,95,155)' }} occlude="blending" distanceFactor={1.8} rotation-y={3.14 / 2} rotation-x={-3.14} rotation-z={-3.1416} position={[3, 0, 0]} transform>
          <HeroPagewww />
        </Html>
        <Html className="content" style={{ background: 'orange' }} occlude="blending" distanceFactor={1.8} rotation-y={-3.14 / 2} rotation-x={-3.14} rotation-z={-3.1416} position={[-3, 0, 0]} transform>
          <HeroPagewww />
        </Html>
      </mesh>
    </group>
  )
}





function Facebook() {
  return (
    <svg fill="blue" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
    </svg>
  )
}
function Tiktok() {
  return (
    <svg fill="#572364" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
    </svg>
  )
}
function Instagram() {
  return (
    <svg fill="magenta" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
      <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
    </svg>
  )
}
function Wattsapp() {
  return (
    <svg fill="green" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
      <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
    </svg>
  )
}


function Youtube() {
  return (
    <svg fill="brown" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
      <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 15 8 L 17.400391 8 L 19 12 L 20.599609 8 L 23 8 L 20 15 L 20 19 L 18 19 L 18 14.990234 C 17.4 13.380234 15.41 9.01 15 8 z M 25 11 C 25.89 11 26.770078 11.269219 27.330078 11.949219 C 27.760078 12.439219 28 13.229531 28 14.269531 L 28 15.730469 C 28 16.770469 27.800859 17.490469 27.380859 17.980469 C 26.820859 18.650469 25.89 19 25 19 C 24.11 19 23.200625 18.650469 22.640625 17.980469 C 22.210625 17.490469 22 16.770469 22 15.730469 L 22 14.279297 C 22 13.239297 22.229922 12.439219 22.669922 11.949219 C 23.229922 11.269219 23.99 11 25 11 z M 29 11 L 31 11 L 31 17 C 31.05 17.27 31.339375 17.390625 31.609375 17.390625 C 32.019375 17.390625 32.54 16.910859 33 16.380859 L 33 11 L 35 11 L 35 19 L 33 19 L 33 17.619141 C 32.19 18.409141 31.499844 19.000703 30.589844 18.970703 C 29.929844 18.950703 29.470234 18.710469 29.240234 18.230469 C 29.100234 17.950469 29 17.499844 29 16.839844 L 29 11 z M 25 12.619141 C 24.8625 12.619141 24.730859 12.649297 24.611328 12.701172 C 24.491797 12.753047 24.383594 12.827422 24.292969 12.919922 C 24.202344 13.012422 24.128906 13.122266 24.078125 13.244141 C 24.027344 13.366016 24 13.500625 24 13.640625 L 24 16.449219 C 24 16.729219 24.111719 16.984922 24.292969 17.169922 C 24.383594 17.262422 24.491797 17.336797 24.611328 17.388672 C 24.730859 17.440547 24.8625 17.470703 25 17.470703 C 25.1375 17.470703 25.269141 17.440547 25.388672 17.388672 C 25.747266 17.233047 26 16.869219 26 16.449219 L 26 13.640625 C 26 13.080625 25.55 12.619141 25 12.619141 z M 24.990234 22 L 25.009766 22 C 25.009766 22 31.719219 22.000312 36.199219 22.320312 C 36.829219 22.390313 38.190156 22.400391 39.410156 23.650391 C 40.370156 24.590391 40.679688 26.75 40.679688 26.75 C 40.679688 26.75 41 28.280547 41 30.810547 L 41 33.179688 C 41 35.709688 40.679688 37.240234 40.679688 37.240234 C 40.679688 37.240234 40.370156 39.399844 39.410156 40.339844 C 38.190156 41.589844 36.829219 41.599922 36.199219 41.669922 C 31.719219 41.989922 25 42 25 42 C 25 42 16.679141 41.919688 14.119141 41.679688 C 13.409141 41.549687 11.809844 41.589609 10.589844 40.349609 C 9.6298437 39.399609 9.3203125 37.240234 9.3203125 37.240234 C 9.3203125 37.240234 9 35.709688 9 33.179688 L 9 30.810547 C 9 28.280547 9.3203125 26.75 9.3203125 26.75 C 9.3203125 26.75 9.6298438 24.590391 10.589844 23.650391 C 11.809844 22.400391 13.170781 22.390312 13.800781 22.320312 C 18.280781 22.000312 24.990234 22 24.990234 22 z M 12 26 L 12 27.978516 L 14 27.978516 L 14 38 L 16 38 L 16 27.978516 L 18 27.978516 L 18 26 L 12 26 z M 25 26 L 25 38 L 27 38 L 27 36.75 C 27.631 37.531 28.453 38 29.125 38 C 29.877 38 30.533156 37.595313 30.785156 36.820312 C 30.904156 36.401313 30.992 36.01 31 35.125 L 31 32.375 C 31 31.387 30.866234 30.642656 30.740234 30.222656 C 30.488234 29.441656 29.878 29.005 29.125 29 C 28.145 28.993 27.75 29.5 27 30.375 L 27 26 L 25 26 z M 18 29 L 18 35.685547 C 18 36.407547 18.100469 36.891984 18.230469 37.208984 C 18.450469 37.722984 18.899062 38 19.539062 38 C 20.269062 38 21.21 37.485766 22 36.634766 L 22 38 L 24 38 L 24 29 L 22 29 L 22 35.269531 C 21.56 35.853531 20.919531 36.289062 20.519531 36.289062 C 20.259531 36.289062 20.05 36.179578 20 35.892578 L 20 29 L 18 29 z M 35.029297 29 C 34.021297 29 33.234063 29.317016 32.664062 29.916016 C 32.244062 30.358016 32 31.080578 32 32.017578 L 32 35.083984 C 32 36.014984 32.2685 36.666516 32.6875 37.103516 C 33.2585 37.702516 34.044172 38 35.076172 38 C 36.107172 38 36.918844 37.686781 37.464844 37.050781 C 37.704844 36.769781 37.858781 36.453563 37.925781 36.101562 C 37.943781 35.942563 38 35.511 38 35 L 36 35 L 36 35.798828 C 36 36.262828 35.552 36.638672 35 36.638672 C 34.448 36.638672 34 36.261828 34 35.798828 L 34 34 L 38 34 L 38 33.423828 L 38 31.978516 C 38 31.043516 37.770422 30.359016 37.357422 29.916016 C 36.804422 29.317016 36.019297 29 35.029297 29 z M 35 30.447266 C 35.552 30.447266 36 30.824109 36 31.287109 L 36 32.615234 L 34 32.615234 L 34 31.287109 C 34 30.823109 34.448 30.447266 35 30.447266 z M 28.220703 30.746094 C 28.765703 30.746094 29 31.081 29 32.125 L 29 34.875 C 29 35.919 28.765703 36.279297 28.220703 36.279297 C 27.909703 36.279297 27.316 36.066 27 35.75 L 27 31.375 C 27.316 31.063 27.909703 30.746094 28.220703 30.746094 z"></path>
    </svg>
  )
}
function Edit() {
  return (
    <svg width="19px" height="19px" viewBox="0 0 24 24" fill="orange" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.1497 7.93997L8.27971 19.81C7.21971 20.88 4.04971 21.3699 3.27971 20.6599C2.50971 19.9499 3.06969 16.78 4.12969 15.71L15.9997 3.84C16.5478 3.31801 17.2783 3.03097 18.0351 3.04019C18.7919 3.04942 19.5151 3.35418 20.0503 3.88938C20.5855 4.42457 20.8903 5.14781 20.8995 5.90463C20.9088 6.66146 20.6217 7.39189 20.0997 7.93997H20.1497Z" stroke-linejoin="round" />
      <path d="M21 21H12" stroke="orange" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}
function Res() {
  return (
    <svg width="19px" height="19px" viewBox="9 7.5 24 24" fill="orange" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 21H12" stroke="orange" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}
function Comment() {
  return (
    <svg width="19px" height="19px" viewBox="0 0 32 32">
      <g id="Icon-Set-Filled" transform="translate(-102.000000, -257.000000)" fill="orange">
        <path d="M118,257 C109.164,257 102,263.269 102,271 C102,275.419 104.345,279.354 108,281.919 L108,289 L115.009,284.747 C115.979,284.907 116.977,285 118,285 C126.836,285 134,278.732 134,271 C134,263.269 126.836,257 118,257" id="comment-1">
        </path>
      </g>
    </svg>
  )
}
