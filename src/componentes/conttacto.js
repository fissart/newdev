// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router";
// import Wwwww from './ww2.js'
// import { Logo } from './logo.png'
// import logo from '../logo.svg';
// import { Www } from './portal.js'
import { useRoute, useLocation } from 'wouter'
// import Rig from './portal.js'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()

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
        } else { toast.warning(www.user.msg) }
      })
  }


  const handleChange = (text) => (e) => {
    console.log(e.target.value, text);
    setFormData({ ...formData, [text]: e.target.value });
  }

  return (
    <div >
      <ToastContainer
        position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick={true} rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} closeButton={false}
      />
      {/* <NavLink to="/">Inicio</NavLink> */}
      {/* <div style={{ backgroundColor: 'goldenrod', height: '12cm', width: '80%', textAlign: 'center', margin: 'auto', display: 'block' }}>
        <Wwwww />
      </div> */}
      <div style={{ height: '19cm', width: '100%', textAlign: 'center', margin: 'auto', display: 'block' }}>
        <form onSubmit={login} style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }} >
          <input type="email" placeholder="Email" onChange={handleChange("email")} value={formData.email} required="required" />
          <input type="password" placeholder="Password" onChange={handleChange("password")} value={formData.password} required="required" />
          <button type="submit">
            {"Ingresar"} {formData.namefile}
          </button>
        </form>

      </div>
    </div>
  );
};

export default Home;

