import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import LayerGroup from 'ol/layer/Group';

import {
  addLayer,
  getLayersForType
} from '../src/layers';

const map = new Map({
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});


const osmLayer = new TileLayer({
  source: new XYZ({
    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  })
});

addLayer(map, osmLayer, 'baselayers');

const baselayers = getLayersForType(map, 'baselayers');
console.log(baselayers);