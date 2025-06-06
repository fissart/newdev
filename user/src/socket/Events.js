import React from 'react';
import { socket } from '../socket';
const { format, register } = require('timeago.js')

register('es_ES', (number, index, total_sec) => [
  ['justo ahora', 'ahora mismo'],
  ['hace %s segundos', 'en %s segundos'],
  ['hace 1 minuto', 'en 1 minuto'],
  ['hace %s minutos', 'en %s minutos'],
  ['hace 1 hora', 'en 1 hora'],
  ['hace %s horas', 'in %s horas'],
  ['hace 1 dia', 'en 1 dia'],
  ['hace %s dias', 'en %s dias'],
  ['hace 1 semana', 'en 1 semana'],
  ['hace %s semanas', 'en %s semanas'],
  ['1 mes', 'en 1 mes'],
  ['hace %s meses', 'en %s meses'],
  ['hace 1 año', 'en 1 año'],
  ['hace %s años', 'en %s años']
][index]);

const timeago = timestamp => format(timestamp, 'es_ES');
const wwdelete = (item) => {
  const response = window.confirm(`Deseas eliminar este message ${item}?`);
  if (response) {
    console.log(item)

    // socket.emit('send_message', 'value', { email: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).email : '1', name: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).name : '1', message:'errased' }, (response) => {
    //   // setIsLoading(false)
    //   // console.log(response.status)
    //   // console.log("value")
    // })

    // return fetch(process.env.REACT_APP_URL + '/api/links/' + item, {
    //   method: 'delete'
    // })
    //   .then(response => response.json())
    //   .then(data => { toast.info(data); get() })
  }
}

export function Events({ events }) {
  console.log(events)
  return (
    <>
      {
        events.length != 0 ? events.map((event, index) =>
          <div key={index} style={{ backgroundColor: 'rgb(215,215,155)', padding: '.1cm', margin: '.1cm', textAlign: 'left' }}>
            <div style={{ fontSize: '12px', padding: '.1cm' }}>{event.name} <span style={{ color: 'rgb(15,215,155)' }}>{timeago(event.create)}</span><button onClick={() => wwdelete(event._id)}>Errase</button></div>
            <div style={{ padding: '.1cm' }}>{event.message}</div>
            {/* <span style={{  fontSize: '12px' }}>{event.email}</span> */}
          </div>
        )
          : null
      }
    </>
  );
}
