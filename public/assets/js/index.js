var map = L.map('map').setView([51.9451804, 7.5720384], 12);
var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Map data © Esri'
})
var streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
});
var cartoPositronLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: 'Map data © CartoDB'
});
var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri'
});
var stamenTerrainLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}', {
  attribution: 'Map data © Stamen',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 18,
  ext: 'png'
});
var googleRoadmapLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  attribution: 'Map data © Google Maps',
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

var basemaplayers={
    'Top':Esri_WorldTopoMap,
    'Satellite':satellite,
    'StreetMap':streetMap,
    'CartoPositron layer':cartoPositronLayer,
    'Topographic Terrain Layer':stamenTerrainLayer,
    'Google Road layer':googleRoadmapLayer
}
L.control.layers(basemaplayers).addTo(map);

Esri_WorldTopoMap.addTo(map)

var geo = L.geoJson({features:[]}, {
    onEachFeature: function popUp(f, l) {
      var out = [];
      if (f.properties){
        for(var key in f.properties){
          out.push(key + ": " + f.properties[key]);
        }
        l.bindPopup(out.join("<br />"));
      }
    }
  }).addTo(map);

  var base = './data/SenseBoxData.zip';
  shp(base).then(function(data){
    geo.addData(data);
    map.flyTo(geo.getBounds().getCenter(), 16);

  });
 
