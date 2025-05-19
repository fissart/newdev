import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ExportToExcel from './calculadorajs'
// import Wwwww from './sphere.js'
import { useEffect, useState } from 'react';
const Blogs = () => {

  const data = [
    { id: 1, name: 'Name 1', email: 'Name1@example.com', joinDate: '2023-01-15' },
    { id: 1, name: 'Name 1', email: 'Name1@example.com', joinDate: '2023-01-15' },
    { id: 1, name: 'Name 1', email: 'Name1@example.com', joinDate: '2023-01-15' },
    { id: 1, name: 'Name 1', email: 'Name1@example.com', joinDate: '2023-01-15' },
    { id: 1, name: 'Name 1', email: 'Name1@example.com', joinDate: '2023-01-15' },
    { id: 1, name: 'Name 1', email: 'Name1@example.com', joinDate: '2023-01-15' },
    { id: 1, name: 'Name 1', email: 'Name1@example.com', joinDate: '2023-01-15' },
    { id: 2, name: 'Name 2', email: 'Name2@example.com', joinDate: '2023-02-20' },
    // Add more data as needed
  ];

  const [www, setWww] = useState()
  // const [ciclo, setCiclo] = useState('3')
  useEffect(() => {
    if (localStorage.getItem("user")) { get() }
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
    return fetch(process.env.REACT_APP_URL + '/api/' + item, {
      method: 'delete'
    })
      .then(response => response.json())
      .then(data => { toast.warning(data); get() })
  }

  // const update = (id) => {
  //   fetch(process.env.REACT_APP_URL + "/api/" + id, {
  //     method: 'put',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       message: 'wwwzzzzz',
  //       user: '63ab4f45a06c6fe92e7a4209',
  //       name: '63ab4f45a06c6fe92e7a4209'
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(data => { toast.warning(data); get() })
  //     .catch(error => console.error(error));
  // }

  const [formData, setFormData] = useState({
    ciclo: "3",
    year: "2024",
    mencion: "E",
  })



  // const fileSelectHandler = (file) => {
  //   //console.log(formData.files, file);
  //   // var array = ["image/jpeg", "image/jpg", "image/png", "image/PNG", "image/svg+xml"];
  //   // console.log(array.includes(files[0].type));
  //   // if (files) {
  //   //   if (files[0].size < 105048576 && array.includes(files[0].type)) {
  //   if (file[0]) {
  //     console.log(file[0])
  //     // setFormData({ ...formData, files: file, namefile: file[0].type })
  //     const reader = new FileReader();
  //     reader.onload = e => setFormData({ ...formData, photoSelected: reader.result, files: file, namefile: file[0].type });
  //     reader.readAsDataURL(file[0]);
  //   }
  //   // } else {
  //   //   toast.dark(
  //   //     "Solo se acepta archivos no mayor a 1MB en formatos pdf, jpeg, jpg y png "
  //   //   );
  //   // }
  //   //    }
  // };

  const handleChange = (text) => (e) => {
    console.log(e.target.value, text);
    setFormData({ ...formData, [text]: e.target.value });
  }

  // const handleSubmit = async (e) => {
  //   //const token = getCookie("token");
  //   //console.log(token);
  //   e.preventDefault()
  //   // setFormData({ ...formData, textChange: "Submitting" });
  //   const data = new FormData()
  //   data.append("foto", formData.files[0])
  //   data.append("user", "63ab4f45a06c6fe92e7a4209")
  //   data.append("message", "rol")
  //   data.append("name", formData.name)
  //   console.log(data)

  //   fetch(process.env.REACT_APP_URL + "/api", {
  //     method: 'POST',
  //     body: data
  //   }).then(response => response.json())
  //     .then(data => { toast.warning(data); get() })
  //     .catch(error => console.error(error))

  // };


    const listItems = www ? www.map((number) =>
      <div style={{ backgroundColor: 'orange', padding: '.1cm', margin: '.2cm', width: '9cm' }} key={number._id}>
        {/* {number.user} */}
        <div style={{ backgroundColor: 'white', fontSize: '15px', padding: '.1cm', textAlign: 'center' }}>{number.title}</div>
        <div style={{ backgroundColor: 'white', fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{number.requisito}</div>
        <div style={{ backgroundColor: 'white', fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{number.ciclo} {number.credito} {number.year} {number.mencion}</div>
        <div style={{ backgroundColor: 'white', fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{number.codigo}</div>
        {localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '2' ? <div style={{ alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', display: 'flex' }}>
          <button onClick={() => wwdelete(number._id)}>errase</button>
          {/* <button onClick={() => update(number._id)}>update</button> */}
          <button><Link style={{ color: 'black' }} to={'/curso/' + number._id} onClick={() => localStorage.setItem('curse', number._id)} >
            Ir al curso
          </Link></button>
        </div> : null}
        {/* <img src={process.env.REACT_APP_URL + '/link/' + number.file} height="50px" />
        {process.env.REACT_APP_URL + '/link/' + number.file} */}
      </div>
    ) : <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
  </header>

  return (
    <div className="contenedor" >
      {/* <Link to="/wwwwww">Socket</Link> */}
      <Link to="/www">Boleta de nota</Link>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>{listItems}</div>
      {/* <button onClick={() => wwwww()}>New</button> */}
      <ToastContainer
        position="botton-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick={true} rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} closeButton={false}
      />
      {localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '1' ?
        <>
          <input type="email" placeholder="Ciclo" onChange={handleChange("ciclo")} value={formData.ciclo} />
          <input type="email" placeholder="Mencion" onChange={handleChange("mencion")} value={formData.mencion} />
          <input type="email" placeholder="Year" onChange={handleChange("year")} value={formData.year} />
          <ExportToExcel data={data} year={formData.year} ciclo={formData.ciclo} mencion={formData.mencion} />
        </> : null}
    </div>
  );
}

export default Blogs

