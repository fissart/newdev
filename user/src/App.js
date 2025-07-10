import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componentes/nabvar";
import Home from "./componentes/inicio";
import Blogs from "./componentes/blog";
import Contacto from "./componentes/conttacto";
import NoPage from "./componentes/w5";
import Curso from "./componentes/curso"
import Theme from "./componentes/tema"
import Editor from "./componentes/carreras"
import Wwwww from "./componentes/wwcalculadora";
import Chat from "./componentes/message";
import Nosotros from "./componentes/nosotros";
import Documentos from "./componentes/documentos";
import Algoritmos from "./componentes/algoritmos";
import Img from "./componentes/dashboardwww copy";
import Articulos from "./componentes/articulos";
import Reports from "./componentes/reporttes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/curso/:id" element={<Curso/>} />
          <Route path="/tema/:id/:number/:numberr" element={<Theme/>} />
          <Route path="blog" element={<Blogs />} />
          <Route path="documento" element={<Documentos />} />
          <Route path="img" element={<Img />} />
          <Route path="reports" element={<Reports />} />
          <Route path="articulos" element={<Articulos />} />
          <Route path="algoritmos" element={<Algoritmos />} />
          <Route path="www" element={<Chat />} />
          <Route path="linea" element={<Editor />} />
          <Route path="wwwww" element={<Wwwww />} />
          <Route path="nosotros" element={<Nosotros />} />
          {/* <Route path="wwwwww" element={<WwwwwW />} /> */}
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>);
}

export default App;
