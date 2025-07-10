import React from 'react';

export function ConnectionState({ isConnected }) {
  if (isConnected){}
  return <> 
  {isConnected?
  <div style={{background:'yellow', padding: '.2cm', marginBottom: '.1cm', textAlign: 'center'}}>CHAT ESFAPA (Conectado)</div>:
  <div style={{background:'gray', padding: '.2cm', marginBottom: '.1cm', textAlign: 'center'}}>CHAT ESFAPA (No conectado)</div>}
  </>;
}
