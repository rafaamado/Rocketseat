const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());


// Iniciando DB

mongoose.connect(
    'mongodb+srv://admin:teste3210@cluster0-ljikm.mongodb.net/node-api', 
    {useNewUrlParser: true}
);
//require('./src/models/Product');
requireDir('./src/models/');


//Rotas
app.use('/api', require("./src/routes"))

app.listen(3001);