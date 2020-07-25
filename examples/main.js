import 'ol/ol.css';
import './index.css'
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import LayerGroup from 'ol/layer/Group';
import Stamen from 'ol/source/Stamen';

import {
  addLayer,
  getLayersForType
} from '../src/layers';

/**
 * 
 * @param {Map} map 
 */
function createLayertree(map){
  const container = document.getElementById('layers');
  const layers = map.getLayers().getArray();
  const html = `<ul>
  ${layers.map(item => `<li>${item.get('id')}</li>` ).join('')}
  </ul>
  `;
  console.log(html)
  container.innerHTML = html;
}

const map = new Map({
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});


const osmLayer = new TileLayer({
  id: 'osm',
  source: new XYZ({
    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  })
});

const testGroup = new LayerGroup({
  id: 'testgroup',
  layers:[
    new TileLayer({
      id: 'esri',
      source: new XYZ({
        attributions: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
            'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
            'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
      })
    }),
    new TileLayer({
      id: 'watercolor',
      source: new Stamen({
        layer: 'watercolor'
      })
    }),
    new TileLayer({
      id: 'terrain-labels',
      source: new Stamen({
        layer: 'terrain-labels'
      })
    })
  ]
});

addLayer(map, osmLayer, 'baselayers');

const baselayers = getLayersForType(map, 'baselayers');
console.log(baselayers[0].getProperties());

addLayer(map, testGroup, 'overlays');

const overlays = getLayersForType(map, 'overlays');
console.log(overlays[0].getProperties());





createLayertree(map);