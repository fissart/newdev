import io from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === 'production' ? undefined : 'https://www.esfapa.edu.pe:9997';
const URL = process.env.REACT_APP_URL

export const socket = io(URL, {
 // autoConnect: false
}) 