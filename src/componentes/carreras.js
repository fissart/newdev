import { Www } from './portal.js'
// import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "katex/dist/katex.min.css";
import { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/es';
import 'katex/dist/katex.min.css';
import Markdown from "./markdownwww";
import logo from '../logo.png';
// import logo from '../logo.svg';
import { useRoute } from 'wouter'
import { Link } from 'react-router-dom';

function App() {
  const [, params] = useRoute('/item/:id')
  // const [, setLocation] = useLocation()

  const [www, setWww] = useState()
  const [id, setId] = useState()
  const [edit, setEdit] = useState()
  // setFormData({ ...formData, rol:"3", name:"www", email:"www", foto:"www", password:"www" })
  useEffect(() => {
    get()
  }, []);


  const get = async () => {
    await fetch(process.env.REACT_APP_URL + "/api/links/editor/APe")
      .then((response) => response.json())
      .then((www) => {
        setWww(www); // ⬅️ Guardar datos
        console.log(www)
      })
      .then(response => response.json())
      // .then(data => { toast.warning(data); get() })
      .catch(error => console.error(error))
  }

  const wwwww = () => {
    fetch(process.env.REACT_APP_URL + '/api/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        detail: '<p>subtitlewww</p><figure class="media"><oembed url="https://www.youtube.com/watch?v=oKbCaj1J6EI"></oembed></figure><script type="math/tex; mode=display">www\\int_1^3f(z)dz=\\sum_1^2f(z)\\Delta</script>',
        curse: '63ab4f45a06c6fe92e7a4209',
        user: '63ab4f45a06c6fe92e7a4209',
        name: 'www',
        type: 'APe'
      })
    })
      .then(response => response.json())
      .then(data => { toast.info(data); get() })
      .catch(error => console.error(error));
  }

  const wwdelete = (item) => {
    const response = window.confirm('Deseas eliminar este documento?');
    if (response) {
      return fetch(process.env.REACT_APP_URL + '/api/links/' + item, {
        method: 'delete'
      })
        .then(response => response.json())
        .then(data => { toast.info(data); get() })
    }
  }

  const update = (id) => {
    fetch(process.env.REACT_APP_URL + "/api/links/" + id, {
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

  }

  const listItems = www ? www.map((number) =>
    <div key={number._id}>
      {number._id !== id ?
        <div style={{ backgroundColor: 'rgb(225,225,228)' }} className="card" key={number._id}>
          {localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '1' ? <><button onClick={() => wwdelete(number._id)}>Errase</button>
            <button onClick={() => { setId(number._id); setEdit(number.description) }}>Editar</button></> : null}
          <Markdown>{number.description.replace(/(<oembed url="https:\/\/www.dailymotion.com\/video\/)(.*?)(".*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.dailymotion.com/embed/video/$2"></iframe>`).replace(/(<oembed url="https:\/\/www.youtube.com\/watch\?v=)(.*?)(".*?oembed>|&.*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.youtube.com/embed/$2"></iframe>`).replace(/(<script type="math\/tex; mode=display">)(.*?)(<\/script>)/g, "\n\n$$$$\n\n$2\n\n$$$$\n\n").replace(/(<p><script type="math\/tex">)(.*?)(<\/script><\/p>)/g, "$$$2$$").replace(/(<blockquote>)/g, "\n > ").replace(/(<\/blockquote>)/g, "\n\n ").replace(/<a href="(.*?)">(.*?)(<\/a>)/g, "[$2]($1)")}
          </Markdown>
          {/* <Link style={{ color: 'black' }} to={'/curso/' + number._id} onClick={() => localStorage.setItem('curse', number._id)} >
            Ir al curso
          </Link> */}

        </div> :
        <div style={{ backgroundColor: 'orange' }} className="card" key={number._id}>
          <button onClick={() => { update(number._id); setId() }}>Actualizar</button>
          <CKEditor
            editor={ClassicEditor}
            data={number.description}
            config={{ language: 'es', }}
            onChange={(event, editor) => { setEdit(editor.getData()) }}
            onReady={editor => { console.log('Editor is ready to use!', editor) }}
          />
        </div>
      }
    </div>
  ) : <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
  </header>


  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, height: '19cm', width: '100%', textAlign: 'center', margin: 'auto', display: 'block' }}>
        <Www />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          {!params ? <span style={{ position: 'absolute', top: 90, left: 40 }}>
            Doble click para entrar al portal
          </span> : <Link style={{ position: 'absolute', top: 90, left: 40 }} href="/linea">Atrás</Link>}
          <img src={logo} style={{ position: 'absolute', bottom: 40, left: 40, width: 39 }} alt="logo" />
        </div>
      </div>
      <div className="contenedor" style={{marginTop:'21cm'}}>
        <div style={{ margin: 'auto', display: 'block', textAlign: 'right' }}>
          {localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '1' ? <button onClick={() => wwwww()}>Crear</button> : <></>}
        </div>
        <div>{listItems}</div>

        <ToastContainer
          position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick={true} rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} closeButton={false}
        />
      </div>
    </>
  )
}

export default App