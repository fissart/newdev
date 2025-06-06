import React, { useState } from 'react';
import { socket } from '../socket';
import { useNavigate } from "react-router-dom";

export function MyForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  function onSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    if (localStorage.getItem("user")) {
        socket.emit('send_message', value, { email: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).email : '1', name: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).name : '1', message: value }, (response) => {
          setIsLoading(false)
          console.log(response.status)
        })
    } else {
      navigate('/contacto')
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={e => setValue(e.target.value)} required onPointerDown={e => localStorage.getItem("user") ? null : navigate('/contacto')} />
      <button type="submit" disabled={isLoading}>Enviar mensaje</button>
    </form>
  );
}
