import logo from '../logomenu.png';
import { Outlet, Link, NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import "./Navbar.css"
// https://github.com/CodeCompleteYT/react-navbar/blob/main/src/components/Navbar.jsx
const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  const cerrar = () => {
    localStorage.removeItem("user")
    navigate('/')
  }
  return (
    <>
      <nav>
        <Link to="/" className="title" onClick={() => setMenuOpen(menuOpen ? !menuOpen : false)}>
          {/* <img src={logo} className="App-logowww" alt="logo" /> */}
          ESFAP-Ayacucho
        </Link>
        <Link className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={logo} className="App-logonew" alt="logo" />
        </Link>

        <ul className={menuOpen ? "open" : ""}>
          {/* <li>
            <Link to="/" onClick={() => setMenuOpen(!menuOpen)}>Home</Link>
          </li> */}
          <li>
            <Link to="/nosotros" onClick={() => setMenuOpen(!menuOpen)}>Nosotros</Link>
          </li>
          <li>
            <Link to="/linea" onClick={() => setMenuOpen(!menuOpen)}>Carreras</Link>
          </li>
          <li>
            <Link to="/documento" onClick={() => setMenuOpen(!menuOpen)}>Documentos</Link>
          </li>
          {
            localStorage.getItem('user') ?
              <>
                <li>
                  <Link to="/blog" onClick={() => setMenuOpen(!menuOpen)}>Dashboard</Link>
                </li>
                <li>
                  <a onClick={() => cerrar()}>cerrar</a>
                </li>
              </>
              :
              <li>
                <Link to="/contacto">Login</Link>
              </li>
          }
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
