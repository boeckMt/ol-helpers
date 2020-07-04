import Map from "ol/Map";
import LayerBase from 'ol/layer/Base';

const FiltertypeKey = 'filterLayerType';
/**
 * @param {Map} map 
 * @param {LayerBase} layer 
 * @param {string=} filtertype 
 */
export function addLayer(map, layer, filtertype) {
  if (filtertype) {
    layer.set(FiltertypeKey, filtertype);
  }
  map.addLayer(layer);
}


/**
 * 
 * @param {Map} map 
 * @param {string} filtertype 
 */
export function getLayersForType(map, filtertype) {
  return map.getLayers().getArray().filter(layer => layer.get(FiltertypeKey) === filtertype)
}