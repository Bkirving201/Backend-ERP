const express = require('express');
const app = express();
const morgan = require('morgan')
require("dotenv").config();
const { dbConnection } = require("./src/database/database");
const cors = require("cors");


dbConnection();

//static files
app.use(express.static(__dirname + '/src/public'));


//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());



//rutasAPI
app.use(require('./src/routes/routes.js'))


app.listen(4000, function () {
  console.log('Ejemplo de que el server corre en el puerto 4000');
}); 

