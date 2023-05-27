const router=require('express').Router();
const pool= require('../database/db');

//getting the tif file
const fs = require('fs');


//getting the files from health facilitites
router.get("/api/healthfacilities",async(req,res)=>{
    try {
        const allfacilities= await pool.query("SELECT id, ST_AsGeojson(geom)::json as point, name FROM public.nairobi_health_facilities");
        res.json(allfacilities.rows);
    } catch (err) {
        console.error(err)
        res.status(500).send("Server Error");
    }
});

//getting the subcounties

router.get("/api/subcounties",async(req,res)=>{
    try {
        const subcounties= await pool.query("SELECT id, ST_AsGeojson(geom)::json as polygon, name FROM  public.nairobi_sub_counties");
        res.json(subcounties.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// getting the healthfacitlies inside subcounties

router.get("/api/healthfacilities/withincounties/:name", async(req,res)=>{
    try {
        const { name }= req.params;
        const facilititeswithsubcounties= await pool.query("SELECT hf.name, ST_AsGeojson(hf.geom) as point FROM nairobi_health_facilities hf, nairobi_sub_counties sc WHERE ST_Within(hf.geom,sc.geom) AND sc.name=$1",[name]);
        res.json(facilititeswithsubcounties.rows); 
    } catch (error) {
        console.error(error);
        res.send(500).status("Server Error");
    }
})

module.exports=router;

