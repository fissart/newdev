import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componentes/nabvar";
import Home from "./componentes/inicio";
import Blogs from "./componentes/dashboardwww";
import Contact from "./componentes/conttacto";
import NoPage from "./componentes/w5";
import Www from "./componentes/w6"
import Editor from "./componentes/carreras"
import Wwwww from "./componentes/wwcalculadora";
import WwwwwW from "./componentes/message";
import Nosotros from "./componentes/nosotros";
import Documentos from "./componentes/documentos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/curso/:id" element={<Www/>} />
          <Route path="blog" element={<Blogs />} />
          <Route path="documento" element={<Documentos />} />
          <Route path="www" element={<Www />} />
          <Route path="linea" element={<Editor />} />
          <Route path="wwwww" element={<Wwwww />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="wwwwww" element={<WwwwwW />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>);
}

export default App;
