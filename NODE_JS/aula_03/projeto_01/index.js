const express = require('express');
const app = express();

app.use(express.json());

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
    if(!filme){
        res.send('Filme não encontrado');
    }
    res.send(filme);
});

app.post('/filmes', (req,res) =>{
    const filme = req.body.filme;
    const id = filmes.length + 1;
    filmes.push(filme);

    res.send(`Filme adicionado com sucesso: ${filme}. O ID do filme é: ${id}`);
});

app.put('/filmes/:id', (req,res) =>{
    const id = req.params.id - 1;
    const filme = req.body.filme;
    const nomeAnterior = filmes[id];
    filmes[id] = filme;
    res.send(`Filme anterior <b>${nomeAnterior}</b> atualizado com sucesso para <b>${filme}</b>`);
})

app.delete('/filmes/:id', (req,res) =>{
    const id = req.params.id - 1;
    if(!filmes[id]){
        res.send('O filme não existe para ser excluido!!');
    }
    delete filmes[id];
    res.send('Filme excluido com sucesso!!')
})


app.listen(port, () =>{
    console.info(`Servidor rodando em: http://localhost:${port}/`);
});