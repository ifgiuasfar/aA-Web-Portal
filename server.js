const express =require('express');
const path = require('path');
const cors=require('cors');

const axios = require('axios');
const app= express();

const pool=require('./database/db');

//middle
 app.use(express.json())
 app.use(cors())

 app.use(express.static(`${__dirname}/public`)); 
 app.use(express.static(`${__dirname}/node_modules`)); 
 app.use(express.static(`${__dirname}/data`));
 app.use(express.static(`${__dirname}/potree`));
//app.use(express.static(path.join(__dirname, 'assets'))); 

// Redirect
app.get('/',function(req,res){
    res.sendFile(__dirname + '/public/index.html');
    //__dirname : It will resolve to your project folder.
  });
app.get('/RGB',function(req,res){
    res.sendFile(__dirname + '/public/2D/rgb.html');
  });
app.get('/Multispectral',function(req,res){
    res.sendFile(__dirname + '/public/2D/ms.html');
  });
 app.get('/NDVI',function(req,res){
    res.sendFile(__dirname + '/public/2D/ndvi.html');
  });
 app.get('/LandCover',function(req,res){
    res.sendFile(__dirname + '/public/2D/lc.html');
  });
 app.get('/FlightPath',function(req,res){
    res.sendFile(__dirname + '/public/2D/flightpath.html');
  });  
  app.get('/Thermal',function(req,res){
    res.sendFile(__dirname + '/public/2D/thermal.html');
  });    

 app.get('/pointcloud',function(req,res){
   res.sendFile(__dirname + '/public/pointcloud2023.html');
   //res.sendFile(__dirname+ '/node_modules/potree/examples/shapefiles.html');

  }); 
  app.get('/ESRIMS',function(req,res){
    res.sendFile(__dirname + '/public/ESRI/ms.html');
  }); 
  app.get('/ESRISense',function(req,res){
    res.sendFile(__dirname + '/public/ESRI/sensebox.html');
  }); 
  //teams  
  app.get('/teams',function(req,res){
    res.sendFile(__dirname + '/public/teams.html');
  });
  //about
  app.get('/about',function(req,res){
    res.sendFile(__dirname + '/public/about.html');
  });
  app.get('/geoserver-proxy', async (req, res) => {
    const geoserverUrl = 'http://localhost:8080/geoserver/ne/wms' + req.url;
  
    try {
      const response = await axios.get(geoserverUrl, { responseType: 'arraybuffer' });
      res.set(response.headers);
      res.send(response.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

//routes
app.use("/data",require("./routes/routes"))

const port = process.env.PORT || 9000;
app.listen(port,()=>{
    console.log("server started  on port "+ port );
});
// Error handling middleware
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
