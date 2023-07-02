var map = L.map('map').setView([51.9451804, 7.5720384], 18);

var streets= L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Map data © Esri'
});
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
//var Dem=L.tileLayer('http://localhost:9000/geoserver-proxy?service=WMS&version=1.1.0&request=GetMap&layers=cite:Orthomosaic_Multispectral&bbox=7.570063780490534,51.943590542913974,7.574740819568534,51.94677105570398&width=768&height=522&srs=EPSG:4326&format=image/jpeg&STYLES=raster')
var basemaps = {
    'Satellite': Esri_WorldImagery ,
    'Streets': streets,
  
  };
L.control.layers(basemaps).addTo(map);
Esri_WorldImagery.addTo(map); // Set a default basemap layer
L.control.scale({metric:true}).addTo(map);
//Leaflet Draw
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);
var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    }
});
map.addControl(drawControl);
map.on('draw:created', function (e) {
    var type = e.layerType,
        layer = e.layer;
        if (type === 'marker') {
          layer.on('click', function (){
            var marker=layer.getLatLngs();
            layer.bindPopup('A new created popup!'+ marker);
          })
          
        }
        else if (type === 'rectangle') {
          layer.on('mouseover', function() {
              var mit=layer.getLatLngs()
              layer.bindPopup('Bounding box of the rectangle'+mit)    
          });
      }
      else if(type=='circle'){
        layer.on('mouseover', function(){
          var circle=layer.getLatLngs();
          layer.bindPopup('Circle box,or radius' +circle )
        })
      }
  
    drawnItems.addLayer(layer);
});
const ms1=L.tileLayer.wms("http://giv-project2.uni-muenster.de:8080/geoserver/Web_Portal/wms", {
  layers: 'Web_Portal:2023_Multispectral',
  transparent:true,
  // opacity:0.5,
 tiled:true,
 format: 'image/png',  

})
const ms=L.tileLayer.wms("http://giv-project2.uni-muenster.de:8080/geoserver/Web_Portal/wms", {
  layers: 'Web_Portal:2020_Multispectral',
  transparent:true,
  tiled:true,
 format: 'image/png',   
 
})
ms.addTo(map); // Add the first layer directly to the map
ms1.addTo(map); // Add the second layer directly to the map

var  transparent_slider=document.getElementById('transparency-slider')
transparent_slider.addEventListener('input',function(){
  var opacity= this.value/100;
  var activelayer=map.hasLayer(ms)?ms1:ms;
  activelayer.setOpacity(opacity);
})



const imageUrl= './data/omms.jpg';
const bounds = [[51.943590542913974, 7.570063780490534], [51.946771055703981,  7.574740819568534]];
var msa = L.imageOverlay(imageUrl, bounds, {
  opacity:0.5,
  alt: 'My Layer',
  interactive: true
});



// function showGetFeatureInfo(latlng,layer){
//   var prop = layer.features[0].properties;
//   var mark=L.marker([latlng.lat,latlng.lng]).addTo(map);
//   var blue=prop['BLUE_BAND'];
//   var green=prop['GREEN_BAND'];
//   var red=prop['RED_BAND'];
//   mark.bindPopup("Blue Band: "+blue.toString()+" <br>Green Band:"+green.toString()+"<br>Red Band:"+red.toString());
//   document.querySelector('#demoR').innerHTML=red; document.querySelector('#demoB').innerHTML=blue; document.querySelector('#demoG').innerHTML = green; }

//   map.on('click',function(e){
//     showGetFeatureInfo(e.latlng,ms);
//   })
  //layer Switching
var layerRadio=document.getElementsByName('layerRadio')
for(var i=0;i< layerRadio.length; i++){
  layerRadio[i].addEventListener('change',function(){
    var  selectedLayer=this.value;
    if(selectedLayer==='rgb'){
      map.removeLayer(ms);
      map.removeLayer(msa)
      rgb.addTo(map);
    }
    else if(selectedLayer==='multispectral'){
      map.removeLayer(rgb);
      map.removeLayer(msa)
      ms.addTo(map)
    }
    else if(selectedLayer==='ms'){
      map.removeLayer(rgb)
      map.removeLayer(ms)
      dummy.addTo(map)
    }
  })
}
//Transparency slider
var  transparent_slider=document.getElementById('transparency-slider')
transparent_slider.addEventListener('input',function(){
  var opacity= this.value/100;
  var activelayer=map.hasLayer(rgb)?rgb:ms;
  activelayer.setOpacity(opacity);
})


// const imageUrl1 = 'http://localhost:9000/geoserver-proxy?service=WMS&version=1.1.0&request=GetMap&layers=cite:Orthomosaic_Multispectral&bbox=7.570063780490534,51.943590542913974,7.574740819568534,51.94677105570398&width=768&height=522&srs=EPSG:4326&format=image/jpeg&STYLES=raster';
// const rgb ='http://localhost:9000/geoserver-proxy?service=WMS&version=1.1.0&request=GetMap&layers=cite:Aa_2022_RGB&bbox=7.569617411262769,51.943382785237084,7.575163927539459,51.94707385427448&width=768&height=511&srs=EPSG:4326&styles=&format=image/jpeg';

 // Initialize the FeatureGroup to store editable layers


