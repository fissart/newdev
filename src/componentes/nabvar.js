import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate()
  const cerrar = () => {
    localStorage.removeItem("user")
    navigate('/')
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/linea">Carreras</Link>
          </li>
          <li>
            <Link to="/documento">Documentos</Link>
          </li>
          {
            localStorage.getItem('user') ?
              <>
                <li>
                  <Link to="/blog">Dashboard</Link>
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
