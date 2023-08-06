const mongoose = require('mongoose')
const { Schema,model } = mongoose;

const Productos = new Schema({

    CodigoProducto: {
        type: "string",
      },

    ProductoName: {
        type: "string",
      },

      CantidadStock: {
        type: "string",
      },

      Precio: {
        type: "string",
      },

      Descripción: {
        type: "string",
      },
})

module.exports = model('Productos', Productos);