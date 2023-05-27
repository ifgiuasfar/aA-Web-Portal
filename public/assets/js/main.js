
var map = L.map('map',{ 
       center: [51.9936,7.4857] ,
       zoom:16
      });
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

//map.locate({setView: true, maxZoom: 80});

// Show a market at the position of the Eiffel Tower
//let rivrea = L.marker([ -1.2960,36.8050]).addTo(map);
//rivrea.bindPopup("River Aa- Proposed Project").openPopup();
//Map scale showup
L.control.scale({metric:true}).addTo(map);
//zoom purpose



//sample geoJSON
// fetch('http://localhost:9000/data/api/healthfacilities',{
//   method:'GET',
//   headers:{
//     'Accept':'application/json',
//   },
// })
//   .then(response=>response.json())
//   .then(data =>{
//     console.log('success!', data);
//    // const geoJSONData = data;

//    const geoJSONLayer = L.geoJSON(data,{
//     pointToLayer: function (feature, latlng) {
//       const color = '#ff0000';
//       const coordinates = feature.geometry.coordinates;
//       const swappedCoordinates = [coordinates[1], coordinates[0]];
//       const swappedLatlng = L.latLng(swappedCoordinates[0], swappedCoordinates[1]);

//        return L.marker(swappedLatlng).
//        setIcon(
//         L.divIcon({
//           className: 'custom-marker',
//           iconSize: [20, 20], 
//           iconAnchor: [10, 10], 
//           html: '<div style="background-color: ' + color + ';"></div>'
//         })
//        ).bindPopup(feature.properties.name);
//     }
//     }).addTo(map);
  
//   })
// .catch(error => {
//   console.error('Error fetching GeoJSON data:', error);
// });
// var mslayer= 'http://localhost:8080/geoserver/cite/wms?service=WMS&version=1.1.0&request=GetMap&layers=cite%3AOrthomosaic_Multispectral&bbox=7.570063780490534%2C51.943590542913974%2C7.574740819568534%2C51.94677105570398&width=768&height=522&srs=EPSG%3A4326&styles=&format=application/openlayers';
// //load wms form geoserver
// const mywms = L.tileLayer.wms("http://localhost:8080/geoserver/cite/wms", {
//     layers: 'cite:Orthomosaic_Multispectral',
//     format: 'image/jpeg',
//     transparent: true,
//     crossOrigin:false,
//     version: '1.1.0',
//     attribution: "river layer multspectral"
// });
// mywms.addTo(map);

const imageUrl = 'http://localhost:8080/geoserver/cite/wms?service=WMS&version=1.1.0&request=GetMap&layers=cite:Orthomosaic_Multispectral&bbox=7.570063780490534,51.943590542913974,7.574740819568534,51.94677105570398&width=768&height=522&srs=EPSG:4326&format=image/jpeg';
const imageUrl1 = 'http://localhost:9000/geoserver-proxy?service=WMS&version=1.1.0&request=GetMap&layers=cite:Orthomosaic_Multispectral&bbox=7.570063780490534,51.943590542913974,7.574740819568534,51.94677105570398&width=768&height=522&srs=EPSG:4326&format=image/jpeg';
const imgrUrl2='./public/data/omms.jpg';
const bounds = [[51.943590542913974, 7.570063780490534],
                [51.946771055703981,  7.574740819568534]];
img = L.imageOverlay(imageUrl2, bounds  );
img.filter('ndvi,colormap');

img.addTo(map);
L.rectangle(bounds).addTo(map);
 map.fitBounds(bounds);

//const imageUrl1 = 'http://localhost:9000/geoserver-proxy?service=WMS&version=1.1.0&request=GetMap&layers=cite:Orthomosaic_Multispectral&bbox=7.570063780490534,51.943590542913974,7.574740819568534,51.94677105570398&width=768&height=522&srs=EPSG:4326&format=image/geotiff';

// Continue with the rest of your code

//  const imgUrl ="./assets/cite-Orthomosaic_Multispectral.tif";
//  //const path= "../RGB/Aa_2022_RGB.tif"
// const plottyRenderer = L.LeafletGeotiff.plotty({
//   displayMin: 0,
//   displayMax: 255,
//   clampLow: false,
//   clampHigh: false
// });

// const windSpeed = L.leafletGeotiff(imageUrl1,
//   {
//     renderer:plottyRenderer
//   }).addTo(map);

//   let drawnItems = new L.FeatureGroup();
//   map.addLayer(drawnItems);
//   map.on('draw:created', (e) => {
//     // Each time we create a feature(point, line or polygon), we add this feature to the feature group wich is drawnItems in this case
//     drawnItems.addLayer(e.layer);
// });

