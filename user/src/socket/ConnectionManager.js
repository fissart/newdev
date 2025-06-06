import React from 'react';
import { socket } from '../socket';

export function ConnectionManager() {
  function connect() {
    socket.connect();
    // alert("Www")
    // socket.emit("usssers", {email:'www'})
    // socket.on("users", (www)=>{console.log(www)})
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <>
      <button onClick={connect}>Conectar</button>
      <button onClick={disconnect}>Desconectar</button>
    </>
  );
}
