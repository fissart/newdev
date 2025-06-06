import React from 'react';
import { socket } from '../socket';

export function ConnectionManager() {
  function connect() {
    socket.connect();
    console.log("Www")
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <>
      <button onClick={ connect }>Conectar</button>
      <button onClick={ disconnect }>Desconectar</button>
    </>
  );
}
