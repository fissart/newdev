import { Popover, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/solid'
// import { Fragment } from 'react'

import logo from '../logomenu.png';
import { Outlet, Link, NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import "./Navbar.css"


const solutions = [
  {
    name: 'Árticulos',
    description: 'Articulos asociados a las novedades del arte',
    href: '/articulos',
    icon: IconOne,
  },
  {
    name: 'Automatizaciones',
    description: 'Creaciones de algoritmos que procesan infinidad de datos',
    href: '/algoritmos',
    icon: IconTwo,
  },
  {
    name: 'Reportes',
    description: 'Reposrtes importantes de la ESFA',
    href: '/reports',
    icon: IconThree,
  },
]

export default function Example() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  const cerrar = () => {
    localStorage.removeItem("user")
    navigate('/')
  }


  return (
    <div className="fixed top-16 w-full max-w-sm px-4">
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
          <li>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button style={{ border: 'none', padding: '.5rem', backgroundColor: 'rgba(1,1,1,0)', fontSize: "inherit", color: "rgb(255, 255, 255)", fontWeight: "inherit", cursor: "pointer", marginInline: ".2cm", fontFamily: "inherit" }}
                  //   className={`
                  // ${open ? 'text-white' : 'text-white/90'}
                  // group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                  >
                    Simposio
                    {/* <ChevronDownIcon
                    className={`${open ? 'text-orange-300' : 'text-orange-300/70'}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`}
                    aria-hidden="true"
                  /> */}
                  </Popover.Button>
                  <Transition
                  // as={Fragment}
                  // enter="transition ease-out duration-200"
                  // enterFrom="opacity-0 translate-y-1"
                  // enterTo="opacity-100 translate-y-0"
                  // leave="transition ease-in duration-150"
                  // leaveFrom="opacity-100 translate-y-0"
                  // leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="" style={{ position: 'absolute', textAlign: 'center', width: 'auto', marginBlock: '.45cm', backgroundColor: 'rgba(8, 58, 58, .9)' }}>
                      <div>
                        {solutions.map((item) => (
                          <Link to={item.href} onClick={() => open}>
                            <Popover.Button  style={{ textAlign: 'center', width: '100%', padding: '.1cm', border: 'none', color: 'white', backgroundColor: 'rgba(98, 98, 98, .1)', fontSize: "inherit", fontWeight: "inherit", cursor: "pointer", fontFamily: "inherit" }}>
                              <item.icon aria-hidden="true" />
                            <div className="">
                              <p className="">
                                {item.name}
                              </p>
                              <p className="">
                                {item.description}
                              </p>
                            </div>
                            </Popover.Button>
                          </Link>
                        ))}
                      </div>
                      <div className="">
                        <Link to='/' onClick={() => open}
                          style={{ width: 'auto', marginBlock: '.45cm', backgroundColor: 'rgba(8, 58, 58, .9)' }}
                        >
                          <span className="">
                            Documentaciones
                          </span>
                        </Link>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </li>

          {
            localStorage.getItem('user') ?
              <>
                <li>
                  <Link to="/blog" onClick={() => setMenuOpen(!menuOpen)}>Dashboard</Link>
                </li>
                <li>
                  <a onClick={() => { cerrar(); setMenuOpen(!menuOpen) }}>cerrar</a>
                </li>
              </>
              :
              <li>
                <Link to="/contacto" onClick={() => setMenuOpen(!menuOpen)}>Login</Link>
              </li>
          }
        </ul>
      </nav>


      <Outlet />
    </div>
  )
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}
