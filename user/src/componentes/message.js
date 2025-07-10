//import React, { useEffect } from 'react';
// import io from 'socket.io-client'; // Import the socket.io client library
import { useCallback } from 'react'
import React, { useState, useRef, useEffect } from 'react'
import { socket } from '../socket';
import { ConnectionState } from '../socket/ConnectionState';
// import { ConnectionManager } from '../socket/ConnectionManager';
import { Events } from "../socket/Events";
import { MyForm } from '../socket/MyForm';


const Scrollwwwww = ({ children }) => {
  const outerDiv = useRef(null)
  const innerDiv = useRef(null)
  const prevInnerDivHeight = useRef(null)
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    console.log("wwwzzz")
    const outerDivHeight = outerDiv.current.clientHeight
    const innerDivHeight = innerDiv.current.clientHeight
    const outerDivScrollTop = outerDiv.current.scrollTop
    // if (!prevInnerDivHeight.current || outerDivScrollTop === prevInnerDivHeight.current - outerDivHeight) {
      outerDiv.current.scrollTo({ top: innerDivHeight - outerDivHeight, left: 0, behavior: prevInnerDivHeight.current ? "smooth" : "auto" })
    // }
    // else { setShowScrollButton(true) }
    prevInnerDivHeight.current = innerDivHeight

  }, [children]);

  // const handleScrollButtonClick = useCallback(() => {
  //   const outerDivHeight = outerDiv.current.clientHeight
  //   const innerDivHeight = innerDiv.current.clientHeight
  //   outerDiv.current.scrollTo({ top: innerDivHeight - outerDivHeight, left: 0, behavior: "smooth" })
  //   setShowScrollButton(false)
  // }, [])

  return (
    <div style={{ position: "relative", height: "100%" }} >
      <div ref={outerDiv} style={{ position: "relative", height: "100%", overflow: "scroll" }} >
        <div ref={innerDiv} style={{ position: "relative" }} > {children} </div>
      </div>
      {/* <button style={{ position: "absolute", backgroundColor: "red", color: "white", left: "50%", transform: "translateX(-50%)", opacity: showScrollButton ? 1 : 0, pointerEvents: showScrollButton ? "auto" : "none" }} onClick={handleScrollButtonClick} > New message!
      </button> */}
    </div>
  )
}


export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [users, setUsers] = useState([]);
  const [wwwEvents, setwwwEvents] = useState([]);
  // const [value, setValue] = useState('');
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

    // alert("www")
    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('receive_message', onEvents)
    socket.emit('usssers', { email: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).email : 'Invitado', name: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).email : 'Invitado' }, (response) => {
      setIsLoading(false)
      console.log(response.status)
      // console.log("value")
    })

    socket.on("load old msgs", (ww) => {
      console.log(ww, "load old msgs")//ww.reverse()
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
      <div style={{ backgroundColor: 'white', margin: '.2cm', width: '9cm', padding: '.1cm', textAlign: 'center' }}>
        <div style={{ fontSize: '15px' }}>{date.name}</div>
        <div style={{ fontSize: '9px' }}>{date.id} {date.ip}</div>
      </div>
    </div>
  ) : <></>



  return (
    <div style={{ padding: '.1cm', backgroundColor: 'rgba(98, 58, 158, .9)' }}>
      <ConnectionState isConnected={isConnected} />
      {/* <div style={{backgroundColor: 'white', boxSizing: 'border-box', padding: '.1cm', width: '100%', textAlign: 'center'}}>CHAT ESFAPA</div> */}
      {localStorage.getItem("user") ? <div className="container" style={{ alignItems: 'center', borderRadius: '.5em', justifyContent: 'center', overflow: 'scroll', height: '400px', backgroundColor: 'orange', verticalAlign: 'bottom' }}>
      {/* {localStorage.getItem("user") ? <div className="container" style={{ alignItems: 'center', borderRadius: '.5em', justifyContent: 'center',  backgroundColor: 'orange' }}> */}
      <Scrollwwwww>
       <Events events={wwwEvents} />
      </Scrollwwwww>
      </div> : null}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginTop: '.1cm', marginBottom: '.5em' }}>
        <MyForm />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        {users.length != 0 ? ussers : ''}
        {/* {users.length} */}
      </div>
    </div>
  );
}