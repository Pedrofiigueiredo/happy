import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import '../styles/pages/orph.css';
import 'leaflet/dist/leaflet.css';

import MapMarkerImg from '../images/map-marker.svg';

function OrphMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={MapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Jacareí</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map 
        center={[-23.3072715, -45.9705731]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orph">
        <FiPlus size={32} color="fff" />
      </Link>
    </div>
  )
}

export default OrphMap;