import "katex/dist/katex.min.css";
import katex from "katex";
import parse from 'html-react-parser'
import { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import '@ckeditor/ckeditor5-build-classic/build/translations/es';
import 'katex/dist/katex.min.css';
import Markdown from "./ckeditor copy";
import { InlineMath, BlockMath } from 'react-katex';
function App() {
  const [www, setWww] = useState()
  useEffect(() => {
    get()
    // setFormData({ ...formData, rol:"3", name:"www", email:"www", foto:"www", password:"www" })
  }, []);

  const get = () => {
    fetch("https://www.esfapa.edu.pe:9997/api/MV/controller/'AUTORIDADES'")
      .then((response) => response.json())
      .then((www) => {
        setWww(www); // ⬅️ Guardar datos
        console.log(www)
      });
  }
  


  let subtitle = `<p>subtitlewww</p><figure class="media"><oembed url="https://www.youtube.com/watch?v=oKbCaj1J6EI"></oembed></figure><script type="math/tex; mode=display">www\\int_1^3f(z)dz=\\sum_1^2f(z)\\Delta</script>`;
  let wwwww = subtitle.replace(/(<oembed url="https:\/\/www.dailymotion.com\/video\/)(.*?)(".*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.dailymotion.com/embed/video/$2"></iframe>`).replace(/(<oembed url="https:\/\/www.youtube.com\/watch\?v=)(.*?)(".*?oembed>|&.*?oembed>)/g, ` <iframe width='100%' height='350' src="https://www.youtube.com/embed/$2"></iframe>`).replace(/(<script type="math\/tex; mode=display">)(.*?)(<\/script>)/g, "\n$$$$\n$2\n$$$$\n").replace(/(<script type="math\/tex">)(.*?)(<\/script>)/g, "$$$2$$").replace(/(<p>)/g, "").replace(/(<\/p>)/g, "").replace(/(<h2>)/g, "").replace(/(<\/h2>)/g, "").replace(/(<li>)/g, "\n 1. ").replace(/(<\/li>)/g, "").replace(/(<ol>)/g, "").replace(/(<\/ol>)/g, "").replace(/(<blockquote>)/g, "\n > ").replace(/(<\/blockquote>)/g, "\n\n ")

  // const [www, setWww] = useState('')

  return (
    <>wwwww
      <CKEditor
        editor={ClassicEditor}
        data={subtitle}
        config={{ language: 'es', }}
        onChange={(event, editor) => { setWww(editor.getData()) }}
        onReady={editor => { console.log('Editor is ready to use!', editor) }}
      />
      <Markdown>{wwwww.replace(/(<oembed url="https:\/\/www.dailymotion.com\/video\/)(.*?)(".*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.dailymotion.com/embed/video/$2"></iframe>`).replace(/(<oembed url="https:\/\/www.youtube.com\/watch\?v=)(.*?)(".*?oembed>|&.*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.youtube.com/embed/$2"></iframe>`).replace(/(<script type="math\/tex; mode=display">)(.*?)(<\/script>)/g, "\n$$$$\n$2\n$$$$\n").replace(/(<script type="math\/tex">)(.*?)(<\/script>)/g, "$$$2$$").replace(/(<p>)/g, "").replace(/(<\/p>)/g, "").replace(/(<h2>)/g, "").replace(/(<\/h2>)/g, "").replace(/(<li>)/g, "\n 1. ").replace(/(<\/li>)/g, "").replace(/(<ol>)/g, "").replace(/(<\/ol>)/g, "").replace(/(<blockquote>)/g, "\n > ").replace(/(<\/blockquote>)/g, "\n\n ")}
      </Markdown>
    </>
  );
}

export default App