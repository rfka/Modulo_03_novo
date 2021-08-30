const express = require('express');
const app = express();

const port = 3001;

const jogos = [
    'Enduro',
    'River Raid',
    'Pitfall',
    'Pacman',
    'GTA San Andreas',
    'GTA Vice City',
    'SimCity 2000',
    'SimCity 4'
];

const mensagemInicio = [
    'Seja bem vindo',
    'Listagem de meus Jogos Preferidos',
    'O meu jogo preferido desta lista é <b>River Raid</b>',
    'Voce sabia que o jogo <b>Enduro</b> não tem fim?',
    'Seja bem vindo à lista de <b>{JOGOS}</b>'
];

jogos.forEach(function(item,indice){
    console.log(indice, item);
});

app.get('/', (req,res) =>{
    let frase = mensagemInicio[Math.floor(Math.random()*mensagemInicio.length)];
    res.send(`${frase}`);
});

app.get('/jogos', (req,res) =>{
    res.send(jogos);
});

app.get('/jogos/:id', (req,res) =>{
    const id = req.params.id -1;
    if (id > jogos.length-1 || id < 1){
        res.send(`ID jogo digitado é inválido!! Existem ${jogos.length} cadastrados!`)
    }else{
        const jogo = jogos[id];
        res.send(`O jogo escolhido foi: [<b>${jogo}</b>]`);
    }
});

app.get('/sorteio', (req,res) =>{
    let game = jogos[Math.floor(Math.random()*jogos.length)];
    res.send(`O jogo sorteado foi: <b>${game}</b>`);
});

app.listen(port, () =>{
    console.log(`Servidor rodando em: http://localhost/:${port}`);
});