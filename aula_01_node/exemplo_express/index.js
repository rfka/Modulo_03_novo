// console.log('exemplo node');

const express = require('express'); //importa express
const app = express(); //inicializa express

app.get('/', (req, res) =>{
    res.send('Hello world');
})

app.get('/blue', (req, res) =>{
    res.send('<h1>Welcome, Bluemmer</h1>');
})

app.listen(3000)