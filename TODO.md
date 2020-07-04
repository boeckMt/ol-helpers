# make helper functions from mao-ol-Service so it can be used without Angular
- more Filtertypes for layers and Groups // not only 'baselayers' | 'layers' | 'overlays' 

- getLayer/Layers for filtertype
- addLayer/Layers for filtertype
- removeAllLayers for filtertype

- getLayerByKey
- removeLayerByKey

- isLayerInGroup

- updateLayer //adjust source or props and source.changed();
// layer.set... //https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer.html
- updateLayerByKey

## create layers types
- create layers with defaults e.g. create_wmts


## layer events? popup, mouseover??
- addPopup //extendable to s
- getPopupset angular comonent???
- removeAllPopups

## WMTS, TMS...
- resolutionsFromExtent
- matrixIdsFromResolutions
- getTileGrid


## extent andd projection
- setExtent /proj and WGS84
- getCurrentExtent /proj and WGS84

- setCenter /proj and WGS84
- getCenter(geographic?: boolean)

- zoomInOut

- getProjection/set with proj4 defaults

## geojson helpers
- geoJsonToFeature/s
- reprojectFeatures
- getExtent from Features
- 

