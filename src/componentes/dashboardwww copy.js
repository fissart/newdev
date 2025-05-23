import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import Wwwww from './sphere.js'
import { useEffect, useState } from 'react';
const Blogs = () => {
  const [www, setWww] = useState()
  useEffect(() => {
    get()
    // setFormData({ ...formData, rol:"3", name:"www", email:"www", foto:"www", password:"www" })
  }, []);

  const get = () => {
    fetch(process.env.REACT_APP_URL + "/api")
      .then((response) => response.json())
      .then((www) => {
        setWww(www); // ⬅️ Guardar datos
        console.log(www)
      });
  }
  const wwwww = () => {
    fetch(process.env.REACT_APP_URL + '/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'www',
        user: '63ab4f45a06c6fe92e7a4209',
        name: 'www'
      })
    })
      .then(response => response.json())
      .then(data => { toast.warning(data); get() })
      .catch(error => console.error(error));
  }

  const wwdelete = (item) => {
    return fetch(process.env.REACT_APP_URL + '/api/' + item, {
      method: 'delete'
    })
      .then(response => response.json())
      .then(data => { toast.warning(data); get() })
  }

  const update = (id) => {
    fetch(process.env.REACT_APP_URL + "/api/" + id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'wwwzzzzz',
        user: '63ab4f45a06c6fe92e7a4209',
        name: '63ab4f45a06c6fe92e7a4209'
      })
    })
      .then(response => response.json())
      .then(data => { toast.warning(data); get() })
      .catch(error => console.error(error));
  }

  const [formData, setFormData] = useState({
    name: "",
    photoSelected: "",
    namefile: "",
    files: [],
    email: "",
    password: "",
    textChange: "Actualizar",
    rol: "",
  })



  const fileSelectHandler = (file) => {
    //console.log(formData.files, file);
    // var array = ["image/jpeg", "image/jpg", "image/png", "image/PNG", "image/svg+xml"];
    // console.log(array.includes(files[0].type));
    // if (files) {
    //   if (files[0].size < 105048576 && array.includes(files[0].type)) {
    if (file[0]) {
      console.log(file[0])
      // setFormData({ ...formData, files: file, namefile: file[0].type })
      const reader = new FileReader();
      reader.onload = e => setFormData({ ...formData, photoSelected: reader.result, files: file, namefile: file[0].type });
      reader.readAsDataURL(file[0]);
    }
    // } else {
    //   toast.dark(
    //     "Solo se acepta archivos no mayor a 1MB en formatos pdf, jpeg, jpg y png "
    //   );
    // }
    //    }
  };

  const handleChange = (text) => (e) => {
    console.log(e.target.value, text);
    setFormData({ ...formData, [text]: e.target.value });
  }

  const handleSubmit = async (e) => {
    //const token = getCookie("token");
    //console.log(token);
    e.preventDefault()
    // setFormData({ ...formData, textChange: "Submitting" });
    const data = new FormData()
    data.append("foto", formData.files[0])
    data.append("user", "63ab4f45a06c6fe92e7a4209")
    data.append("message", "rol")
    data.append("name", formData.name)
    console.log(data)

    fetch(process.env.REACT_APP_URL + "/api", {
      method: 'POST',
      body: data
    }).then(response => response.json())
      .then(data => { toast.warning(data); get() })
      .catch(error => console.error(error))

  };


  const listItems = www ? www.map((number) =>
    <div style={{ backgroundColor: 'orange', padding: '.1cm' }} key={number._id}>
      {number.user}
      <button onClick={() => wwdelete(number._id)}>www</button>
      <button onClick={() => update(number._id)}>update</button>
      <div style={{ backgroundColor: 'white', margin: '.1cm' }}>{number.nombre}</div>
      <div style={{ backgroundColor: 'white', margin: '.1cm' }}>{number.mensaje}</div>
      <div style={{ backgroundColor: 'white', margin: '.1cm' }}>{number.createdAt}</div>
      <div style={{ backgroundColor: 'white', margin: '.1cm' }}>{number.updatedAt}</div>
      <img src={process.env.REACT_APP_URL + '/link/' + number.file} height="50px" />
      {process.env.REACT_APP_URL + '/link/' + number.file}
    </div>
  ) : 'www';

  return (
    <div className="contenedor">
      <Link to="/wwwwww">Socket</Link> 
      ...
      <Link to="/www">Pdf</Link> 
      ...
      <Link to="/wwwww">Excel</Link>
      {/* <div style={{ backgroundColor: 'goldenrod', height: '12cm', width: '80%', textAlign: 'center', margin: 'auto', display: 'block' }}>
        <Wwwww />
      </div> */}
      <div>{listItems}</div>
      <button onClick={() => wwwww()}>New</button>
      <ToastContainer
        position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick={true} rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} closeButton={false}
      />
      <form onSubmit={handleSubmit} className="row">
        <input type="text" placeholder="rol" onChange={handleChange("rol")} value={formData.rol} />
        <input type="email" placeholder="Email" onChange={handleChange("email")} value={formData.email} />
        <input type="text" placeholder="Name" onChange={handleChange("name")} value={formData.name} />
        <input type="text" placeholder="Password" onChange={handleChange("password")} value={formData.password} />
        <input type="file" className="form-control d-none" onChange={(e) => { fileSelectHandler(e.target.files); }} id="foto"></input>
        <button type="submit" className="btn btn-info mb-1 w-100">
          {"textChange"} {formData.namefile}
        </button>
      </form>
      <img src={formData.photoSelected} width="100%" height="800px" />


    </div>
  );
}

export default Blogs

