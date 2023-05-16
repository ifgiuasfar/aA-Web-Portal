
var map = L.map('map').setView([ -1.2959991,36.8027429], 15);
var streets= L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Map data © Esri'
});
var basemaps = {
    'Streets': streets,
    'Satellite': satellite
  };
  streets.addTo(map); // Set a default basemap layer
  L.control.layers(basemaps).addTo(map);

//map.locate({setView: true, maxZoom: 16});

// Show a market at the position of the Eiffel Tower
let rivrea = L.marker([ -1.2960,36.8050]).addTo(map);
rivrea.bindPopup("River Aa- Proposed Project").openPopup();
//Map scale showup
L.control.scale({metric:true}).addTo(map);
//zoom purpose
L.control.zoom().addTo(map)


//sample geoJSON
fetch('http://localhost:9000/data/api/healthfacilities',{
  method:'GET',
  headers:{
    'Accept':'application/json',
  },
})
  .then(response=>response.json())
  .then(data =>{
    console.log('success!', data);
   // const geoJSONData = data;

   const geoJSONLayer = L.geoJSON(data,{
    pointToLayer: function (feature, latlng) {
      const color = '#ff0000';
      const coordinates = feature.geometry.coordinates;
      const swappedCoordinates = [coordinates[1], coordinates[0]];
      const swappedLatlng = L.latLng(swappedCoordinates[0], swappedCoordinates[1]);

       return L.marker(swappedLatlng).
       setIcon(
        L.divIcon({
          className: 'custom-marker',
          iconSize: [20, 20], 
          iconAnchor: [10, 10], 
          html: '<div style="background-color: ' + color + ';"></div>'
        })
       ).bindPopup(feature.properties.name);
    }
    }).addTo(map);
  
  })
.catch(error => {
  console.error('Error fetching GeoJSON data:', error);
});

 

