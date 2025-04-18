import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componentes/nabvar";
import Home from "./componentes/w2";
import Blogs from "./componentes/w3";
import Contact from "./componentes/conttacto";
import NoPage from "./componentes/w5";
import Www from "./componentes/w6"
import Editor from "./componentes/ckeditor"
import Wwwww from "./componentes/wwcalculadora";
import WwwwwW from "./componentes/ww3 copy 2";

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="www" element={<Www />} />
          <Route path="editor" element={<Editor />} />
          <Route path="wwwww" element={<Wwwww />} />
          <Route path="wwwwww" element={<WwwwwW />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>  );
}

export default App;
