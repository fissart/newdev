import React, { useState } from 'react';
import { socket } from '../socket';

export function MyForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    socket.emit('send_message', value, { name: "updated", names: "www" }, (response) => {
      setIsLoading(false)
      console.log(response.status)
      // console.log("value")
    })
  }

  return (
    <form onSubmit={ onSubmit }>
      <input onChange={ e => setValue(e.target.value) } />
      <button type="submit" disabled={ isLoading }>Enviar</button>
    </form>
  );
}
