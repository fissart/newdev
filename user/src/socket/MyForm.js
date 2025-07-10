import React, { useState } from 'react';
import { socket } from '../socket';
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/es';
import 'katex/dist/katex.min.css';

export function MyForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  function onSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    if (localStorage.getItem("user") && value != '') {
      socket.emit('send_message', value.trim(), { email: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).email : '1', name: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).name : '1', message: value.trim() }, (response) => {
        setIsLoading(false)
        setValue('')
        console.log(response.status)
      })
    } else {
      // navigate('/contacto')
      setIsLoading(false)
    }
  }

  const [edit, setEdit] = useState()

  return (
    <form onSubmit={onSubmit} style={{ width: '100%' }}>
      {/* <input onChange={e => setValue(e.target.value)} required onPointerDown={e => localStorage.getItem("user") ? null : navigate('/contacto')} /> */}
      <CKEditor
        onFocus={e => localStorage.getItem("user") ? null : navigate('/contacto')}
        editor={ClassicEditor}
        config={{ language: 'es', placeholder: "Descripción" }}
        data={value}
        onChange={(event, editor) => { setValue(editor.getData()) }}
      // onReady={editor => { console.log('Editor is ready to use!', editor) }}
      />

      <button className="btn-warning" style={{ marginTop: '.1cm'}} type="submit" disabled={isLoading}>Send</button>
    </form>
  );
}
