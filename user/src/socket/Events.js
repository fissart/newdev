import React from 'react';
import Markdown from "../componentes/markdownwww";
import { socket } from '../socket';
import { ToastContainer, toast } from 'react-toastify'
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

    socket.emit('send_messageremove', item, (response) => {
      // setIsLoading(false)
      console.log(response.status)
      toast.warning(response.status)
      // console.log("value")
    })

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
      <ToastContainer
        position="bottom-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick={true} rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} closeButton={false}
      />
      {
        events.length != 0 ? events.map((event, index) =>
          <div key={index} style={{ padding: '.1cm', marginBottom: '.1cm' }}>
            <div key={index} style={{ display: 'flex' }}>
              <button className="btn" onClick={() => wwdelete(event._id)}>-</button>
              <div style={{ fontSize: '12px', padding: '8px 3px' }}>
                {event.name}
                <span style={{ color: 'rgb(15,95,15)' }}> {timeago(event.create)}</span>
              </div>
            </div>
            <div>
              <Markdown>{event.message ? event.message.replace(/(<oembed url="https:\/\/www.dailymotion.com\/video\/)(.*?)(".*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.dzilymotion.com/embed/video/$2"></iframe>`).replace(/(<oembed url="https:\/\/www.youtube.com\/watch\?v=)(.*?)(".*?oembed>|&.*?oembed>)/g, `<iframe width='100%' height='350' src="https://www.youtube.com/embed/$2"></iframe>`).replace(/(<script type="math\/tex; mode=display">)(.*?)(<\/script>)/g, "\n$$$$\n$2\n$$$$\n").replace(/(<script type="math\/tex">)(.*?)(<\/script>)/g, "$$$2$$").replace(/(<p>)/g, " \n").replace(/(<\/p>)/g, " \n").replace(/(<h2>)/g, "# ").replace(/(<\/h2>)/g, "\n ").replace(/(<figure>)/g, " \n").replace(/(<\/figure>)/g, "\n").replace(/(<li>)/g, "\n 1. ").replace(/(<\/li>)/g, "").replace(/(<ol>)/g, "").replace(/(<\/ol>)/g, "\n").replace(/(<ul>)/g, "").replace(/(<\/ul>)/g, "\n").replace(/(<blockquote>)/g, "\n > ").replace(/(<\/blockquote>)/g, "\n\n ").replace(/<a href="(.*?)">(.*?)(<\/a>)/g, "[$2]($1)") : null}
              </Markdown>

            </div>
            {/* <span style={{  fontSize: '12px' }}>{event.email}</span> */}
          </div>
        )
          : null
      }
    </>
  );
}
