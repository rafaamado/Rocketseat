const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();


// Iniciando DB

mongoose.connect(
    'mongodb+srv://admin:teste3210@cluster0-r4pf3.mongodb.net/node-api', 
    {useNewUrlParser: true}
);
//require('./src/models/Product');
requireDir('./src/models/');


const Product = mongoose.model('Product');


//primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'React',
        description: 'Build native apps',
        url: 'http://github.com'
    });
    return res.send('Hello Rafael teste');
});

app.listen(3001);