const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');



const productos = require ('../models/models.js');


router.get('/productos',async(req,res)=>{

    const GetProductos = await productos.find();
    res.json(GetProductos);

    console.log(GetProductos);

});

router.post('/productos',async(req,res)=>{

    const NuevoProducto = new productos(req.body);
    await NuevoProducto.save();
    res.json();



})

router.put('/productos/:id',async(req,res) =>{
    await productos.findByIdAndUpdate(req.params.id,req.body);
    res.json({
        status: 'Producto Actualizado'
    })
})


router.delete('/productos',async (req, res) => {

    await productos.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Producto Eliminado'
    });
    
  });
    


module.exports = router;
