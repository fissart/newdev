import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ExportToExcel from './calculadorajs'
import ExportToPdf from './calculadorajs copy'
// import jsPDF from "jspdf"
// import autoTable from 'jspdf-autotable'
// import autoTable from 'jspdf-autotable'
// import Wwwww from './sphere.js'
import { useEffect, useState } from 'react'
import Select from 'react-select'
// import { Popover, Transition } from '@headlessui/react'

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
//   { value: 'vanilla', label: 'Vanilla' },
// ]


const Blogs = () => {
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
    fetch(`${process.env.REACT_APP_URL}/api/curses/stdcurses/${JSON.parse(localStorage.getItem("user"))._id}/true`)
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
        setSelectedOption({ value: www[www.length-1]._id, label: www[www.length-1]._id })
      });
  }


  const wwwww = () => {
    fetch(process.env.REACT_APP_URL + '/api/curses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        curse: JSON.parse(localStorage.getItem("user"))._id,
        user: JSON.parse(localStorage.getItem("user"))._id,
        userteacher: JSON.parse(localStorage.getItem("user"))._id,
      })
    })
      .then(response => response.json())
      .then(data => { toast.info(data); getstdcurses() })
      .catch(error => console.error(error));
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
  })

  const handleChange = (text) => (e) => {
    console.log(e.target.value, text);
    setFormData({ ...formData, [text]: e.target.value });
  }


  const listItems = www ? www.map((number) =>
    <div style={{ backgroundColor: 'orange', padding: '.1cm', margin: '.2cm', width: '9cm' }} key={number._id}>
      <div style={{ backgroundColor: 'white', fontSize: '15px', padding: '.1cm', textAlign: 'center' }}>{number.title}</div>
      <div style={{ backgroundColor: 'white', fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{number.requisito}</div>
      <div style={{ backgroundColor: 'white', fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{number.ciclo} {number.credito} {number.year} {number.mencion}</div>
      <div style={{ backgroundColor: 'white', fontSize: '13px', padding: '.1cm', textAlign: 'center' }}>{number.codigo}</div>
      <div style={{ alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', display: 'flex' }}>
        <button onClick={() => wwdelete(number._id)}>errase</button>
        <button><Link style={{ color: 'black' }} to={'/curso/' + number._id} onClick={() => localStorage.setItem('curse', number._id)} >
          Ir al curso
        </Link></button>
      </div>
    </div>
  ) : <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
  </header>

  return (
    <div className="contenedor" >
      {/* <Link to="/www">Boleta de nota</Link> */}
      <ToastContainer
        position="bottom-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick={true} rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} closeButton={false}
      />
      {localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '2' ?
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>{listItems}</div>
        : localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).rol == '1' ?
          <>
            <input type="email" placeholder="Ciclo" onChange={handleChange("ciclo")} value={formData.ciclo} />
            <input type="email" placeholder="Mencion" onChange={handleChange("mencion")} value={formData.mencion} />
            <input type="email" placeholder="Year" onChange={handleChange("year")} value={formData.year} />
            <ExportToExcel year={formData.year} ciclo={formData.ciclo} mencion={formData.mencion} />
          </>
          :
          <>
            <ExportToPdf data={calification} cicle={selectedOption.value} />
            <Select
              // defaultValue={selectedOption}
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
            {/* <button onClick={() => wwwww()}>Create curse std</button> */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>{listItems}</div>
          </>
      }
    </div>
  );
}

export default Blogs

