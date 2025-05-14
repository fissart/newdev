import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "katex/dist/katex.min.css";
import { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/es';
import 'katex/dist/katex.min.css';
import Markdown from "./markdownwww";
function App() {
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
          {localStorage.getItem('user') ? <><button onClick={() => wwdelete(number._id)}>Errase</button>
            <button onClick={() => { setId(number._id); setEdit(number.description) }}>Editar</button></> : null}
          <Markdown>{number.description.replace(/(<oembed url="https:\/\/www.dailymotion.com\/video\/)(.*?)(".*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.dailymotion.com/embed/video/$2"></iframe>`).replace(/(<oembed url="https:\/\/www.youtube.com\/watch\?v=)(.*?)(".*?oembed>|&.*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.youtube.com/embed/$2"></iframe>`).replace(/(<script type="math\/tex; mode=display">)(.*?)(<\/script>)/g, "\n\n$$$$\n\n$2\n\n$$$$\n\n").replace(/(<script type="math\/tex">)(.*?)(<\/script>)/g, "$$$2$$").replace(/(<li>)/g, "\n 1. ").replace(/(<\/li>)/g, "").replace(/(<ol>)/g, "").replace(/(<\/ol>)/g, "").replace(/(<blockquote>)/g, "\n > ").replace(/(<\/blockquote>)/g, "\n\n ").replace(/<a href="(.*?)">(.*?)(<\/a>)/g, "[$2]($1)").replace(/(<h2>)/g, "").replace(/(<\/h2>)/g, "")}
          </Markdown>
         {number.description}
         ----------------
         {number.description.replace(/(<oembed url="https:\/\/www.dailymotion.com\/video\/)(.*?)(".*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.dailymotion.com/embed/video/$2"></iframe>`).replace(/(<oembed url="https:\/\/www.youtube.com\/watch\?v=)(.*?)(".*?oembed>|&.*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.youtube.com/embed/$2"></iframe>`).replace(/(<script type="math\/tex; mode=display">)(.*?)(<\/script>)/g, "\n\n$$$$\n\n$2\n\n$$$$\n\n").replace(/(<script type="math\/tex">)(.*?)(<\/script>)/g, "$$$2$$").replace(/(<li>)/g, "\n 1. ").replace(/(<\/li>)/g, "").replace(/(<ol>)/g, "").replace(/(<\/ol>)/g, "").replace(/(<blockquote>)/g, "\n > ").replace(/(<\/blockquote>)/g, "\n\n ").replace(/<a href="(.*?)">(.*?)(<\/a>)/g, "[$2]($1)").replace(/(<h2>)/g, "").replace(/(<\/h2>)/g, "")}
          {/* .replace(/(<h2>)/g, "").replace(/(<\/h2>)/g, "").replace(/(<p>)/g, "").replace(/(<\/p>)/g, "")<img src={process.env.REACT_APP_URL + '/link/' + number.file} height="50px" /> */}
          <Link style={{ color: 'black' }} to={'/curso/' + number._id} onClick={() => localStorage.setItem('curse', number._id)} >
            Ir al curso
          </Link>

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
  ) : 'www';

  return (
    <div className="contenedor">
      <div style={{ margin: 'auto', display: 'block', textAlign: 'right' }}>
        {localStorage.getItem('user') ? <button onClick={() => wwwww()}>Crear</button> : <></>}
      </div>
      <div>{listItems}</div>
      <ToastContainer
        position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick={true} rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} closeButton={false}
      />
    </div>
  );
}

export default App