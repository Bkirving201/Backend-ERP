const express = require('express');
const app = express();
const morgan = require('morgan')
require("dotenv").config();
const { dbConnection } = require("./src/database/database");

dbConnection();

//static files
app.use(express.static(__dirname + '/src/public'));



//middlewares
app.use(morgan('dev'));
app.use(express.json());

//rutasAPI
app.use(require('./src/routes/routes.js'))


app.listen(3000, function () {
  console.log('Ejemplo de que el server corre en el puerto 3000');
}); 

