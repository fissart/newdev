//import React, { useEffect } from 'react';
// import io from 'socket.io-client'; // Import the socket.io client library
import React, { useState, useEffect } from 'react';
import { socket } from '../socket';
import { ConnectionState } from '../socket/ConnectionState';
import { ConnectionManager } from '../socket/ConnectionManager';
import { Events } from "../socket/Events";
import { MyForm } from '../socket/MyForm';


export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [users, setUsers] = useState([]);
  const [wwwEvents, setwwwEvents] = useState([]);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    function onEvents(value, value2) {
      console.log(value2, "wwwww")
      setwwwEvents(previous => [...previous, value2])
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('receive_message', onEvents)

    // alert("wwwww")
    socket.emit('usssers', { email: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).email : 'Invitado', name: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).name : 'Invitado' }, (response) => {
      setIsLoading(false)
      console.log(response.status)
      // console.log("value")
    })

    socket.on("load old msgs", (ww) => {
      console.log(ww, "load old msgs")    
      for (let i = 0; i < ww.length; i++) {
        const www = { message: ww[i].message, email: ww[i].email, name: ww[i].name, create: ww[i].createdAt, ip: ww[i].ip, id: ww[i].id, _id: ww[i]._id, create: ww[i].createdAt }
        setwwwEvents(previous => [...previous, www])
      }
      // console.log(this.state.messages);
    })





    socket.on("users", (www) => {
      // console.log(www, "users")
      setUsers(www)

      // for (let i = 0; i < ww.length; i++) {
      //   console.log(ww[i])
      //   const www = {
      //     user: ww[i],
      //     i: i,
      //   }
      //   // setUsers(ww[i], ...state.users)
      // }
    })

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('receive_message', onEvents);
    };
  }, []);

  const ussers = users ? users.map((date) =>
    <div key={date.email}>
      <div style={{ backgroundColor: 'white', margin: '.2cm', width: '9cm', padding: '.1cm' }}>
        <div style={{ fontSize: '15px' }}>{date.name}</div>
        <div style={{ fontSize: '9px' }}>{date.id} {date.ip}</div>
      </div>
    </div>
  ) : <></>



  return (
    <div className="contenedor">
      <ConnectionState isConnected={isConnected} />
      {localStorage.getItem("user") ? <Events events={wwwEvents} /> : null}
      {/* {localStorage.getItem("user") ? <ConnectionManager /> : null} */}
      <MyForm />
      <div className="" style={{ height: '', width: '100%', flex: '1', margin: 'auto', display: 'block', backgroundColor: 'rgba(8, 58, 58, .9)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          {users.length != 0 ? ussers : ''}
        </div>
        {/* {users.length} */}
      </div>
    </div>
  );
}