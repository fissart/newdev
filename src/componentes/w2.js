import { App } from './www1.js'

const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
// const pexelwww =  `/public/logo192.png`
const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: './Photosphere1.jpg' },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: './logo192.png' },
  { position: [-1.5, 0, -1.6], rotation: [0, 0, 0], url: pexel(416430) },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: './ww_w.png' },
  // Left
  { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(327482) },
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: pexel(325185) },
  { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(358574) },
  // Right
  { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(227675) },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(911738) },
  { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986) }
]
const Home = () => {
  return (
    <div style={{ height: '18cm', margin: 'auto' }}>
      <App images={images} />
      {/* <img src="./www/foto1.png"/> */}
          </div>
  );
};

export default Home;

