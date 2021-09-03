const express = require('express');
const app = express();

const port = 3000;

const filmes = [
    'Matrix',
    'Vingadores',
    'Velozes e Furiosos',
    'Lego - O filme',
    'Pulp Fiction',
    'Bastardos Inglórios'
];

// get /HOME
app.get('/', (req,res) =>{
    res.send('Seja bem vindo!!');
});

// get /HOME/FILMES => lista todos os filmes
app.get('/filmes', (req, res) =>{
    res.send(filmes);
});

//get /HOME/FILMES/id => lista filmes por id
app.get('/filmes/:id', (req,res) =>{
    const id = req.params.id -1;
    const filme = filmes[id];
    res.send(filme);
});


app.listen(port, () =>{
    console.log(`Servidor rodando em: http://localhost:${port}/`);
});