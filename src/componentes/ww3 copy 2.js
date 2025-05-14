//import React, { useEffect } from 'react';
// import io from 'socket.io-client'; // Import the socket.io client library

import React, { useState, useEffect } from 'react';
import { socket } from '../socket';
import { ConnectionState } from '../socket/ConnectionState';
import { ConnectionManager } from '../socket/ConnectionManager';
import { Events } from "../socket/Events";
import { MyForm } from '../socket/MyForm';

export default function App() {



  // const socket = io.connect('http://localhost:9997/', {
  //   transports: ["websocket"],
  //   secure: true,
  //   extraHeaders: {
  //     "my-custom-header": "1234", // WARN: this will be ignored in a browser
  //   },
  // })

  // useEffect(() => {
  //   socket.open()
  //   return () => {
  //     socket.close()
  //     // Anything in here is fired on component unmount.
  //   }
  // }, [])

  const sendMessage = async () => {
    console.log('www')
    socket.emit("send_message", {
      senderId: "123",
      receiverId: "456",
      message: "Hello"
    });
  }

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value])
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('receive_message', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('receive_message', onFooEvent);
    };
  }, []);


  return (
    <div>
      <button onClick={sendMessage}>send message</button>
      {/* Button to trigger sending a message */}
      <div className="App">
        <ConnectionState isConnected={isConnected} />
        <Events events={fooEvents} />
        <ConnectionManager />
        <MyForm />
      </div>
    </div>
  );
}