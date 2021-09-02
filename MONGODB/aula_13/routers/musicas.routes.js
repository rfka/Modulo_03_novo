const express = require('express');
const router = express.Router();
const Musica = require('../models/musicas.js');

router.post('/add', async (req,res) =>{
    await Musica.create(req.body)
    .then(() =>{
        res.status(200).send('Musica cadastrada com sucesso!!');
    })
    .catch((err) =>{
        res.status(400).send('Não foi possivel cadastrar a música! Tente outra vez!!');
        console.error(err);
    })
});

router.get('/', async (req,res) =>{
    await Musica.find({})
    .then((musicas) =>{
        res.status(200).send(musicas);
    })
    .catch((err) =>{
        res.status(400).send('Não foi possivel consultar as músicas! Tente novamente em breve!!');
        console.error(err);
    })
});

router.get('/findbyid/:id', async (req,res) =>{
    await Musica.find({_id: req.params.id})
    .then((musica)=>{
        res.status(200).send(musica);
    })
    .catch((err) =>{
        res.status(400).send('Não foi possível locar a música por ID! Tente novamente!!');
        console.error(err);
    })
});

router.get('findbyname/:name', async (req,res) =>{
    await Musica.find({nome: req.params.name})
    .then((musica) =>{
        res.status(200).send(musica);
    })
    .catch((err) =>{
        res.status(400).send('Não foi possivel localizar a música pelo nome! Tente novamente!!');
        console.error(err);
    })
});

router.put('/update/:id', async (req,res) =>{
    await Musica.updateOne({_id: req.params.id}, req.body)
    .then(() =>{
        res.status(200).send('Música atualizada com sucesso!');
    })
    .catch((err) =>{
        res.status(400).send('Não foi possivel atualizar os dados da música! tente novamente!!');
        console.error(err);
    })
});

router.delete('/delete/:id', async (req,res) =>{
    await Musica.deleteOne({_id: req.params.id})
    .then(() =>{
        res.status(200).send('Musica deletada com sucesso!!');
    })
    .catch((err) =>{
        res.status(400).send('Não foi possivel excluir a musica! Tente novamente!!');
        console.error(err);
    })
});

module.exports = router;