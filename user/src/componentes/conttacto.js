// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router";
// import Wwwww from './ww2.js'
// import { Logo } from './logo.png'
// import logo from '../logo.svg';
// import { Www } from './portal.js'
// import { useRoute, useLocation } from 'wouter'
// import Rig from './portal.js'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  // const [, params] = useRoute('/item/:id')
  // const [, setLocation] = useLocation()

  const navigate = useNavigate()
  const login = async (e) => {
    e.preventDefault()
    
    console.log(formData.email, formData.password)
    fetch(process.env.REACT_APP_URL + `/api/auth/login/${formData.email}/${formData.password}`)
    .then((response) => response.json())
    .then((www) => {
      console.log(www)
      if (www._id) {
        localStorage.setItem('user', JSON.stringify(www))
        navigate('/')        //  history.push("/")
          //  history.push("/carpeta")
        } else { toast.warning(www.msg) }
      })
  }


  const handleChange = (text) => (e) => {
    console.log(e.target.value, text);
    setFormData({ ...formData, [text]: e.target.value });
  }

  return (
    <div >
      <ToastContainer
        position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick={true} rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} closeButton={false}
      />
      {/* <NavLink to="/">Inicio</NavLink> */}
      {/* <div style={{ backgroundColor: 'goldenrod', height: '12cm', width: '80%', textAlign: 'center', margin: 'auto', display: 'block' }}>
        <Wwwww />
      </div> */}
      <div style={{ height: '85vh', width: '100%', textAlign: 'center', margin: 'auto', display: 'block' }}>
        <form onSubmit={login} style={{ position: 'absolute', top: '50%', left: '50%', padding: '.2cm', flexWrap: 'wrap', display: 'flex'  }} className="center" >
          <div className="form1"><input style={{fontSize: 'inherit', width: '100%', padding: '.2cm', boxSizing: 'border-box'  }}  type="email" placeholder="primernombreprimerapellido@esfapa.edu.pe" onChange={handleChange("email")} value={formData.email} required /></div>
          <div className="form1"><input style={{fontSize: 'inherit', width: '100%', padding: '.2cm', boxSizing: 'border-box'  }} type="password" placeholder="dni (Primera vez)" onChange={handleChange("password")} value={formData.password} required /></div>
          <div style={{width: '100%', margin: '0.24px', padding: '6px'}}><button type="submit"  className="btn-info" style={{width: '100%', padding: '11px', borderRadius: '3px'}}>
            {"Ingresar"} {formData.namefile}
          </button></div>
        </form>

      </div>
    </div>
  );
};

export default Home;

