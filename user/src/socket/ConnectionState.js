import React from 'react';

export function ConnectionState({ isConnected }) {
  if (isConnected){}
  return <>
  {isConnected?<p style={{background:'orange'}}>Conectado</p>:
  <p style={{background:'gray'}}>No conectado</p>}
  </>;
}
