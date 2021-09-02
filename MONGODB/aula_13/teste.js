const express = require('express');
const router = express.Router();
const Carro = require('../models/carro')


router.post("/add", async (req, res) => {
    await Carro.create(req.body)
    .then(() => {
        res.status(200).send("Carro adicionada com sucesso");
    }).catch((err) => {
        res.status(400).send("Algo errado com o modelo, tente novamente");
        console.error(err);
    })
});


router.get('/', async (req, res) => {
    await Carro.find({})
    .then((carro) => {
        res.send(carro);
    })
    .catch((err) => {
        console.log(err);
    })
});


router.put('/update/:id', async (req, res) => {
    await Carro.updateOne({_id : req.params.id},req.body)
    .then(() => {
        res.status(200).send("Carro atualizado com sucesso");
    }).catch((err) => {
        res.status(400).send("Algo errado com o modelo, tente novamente");
        console.error(err);
    })
});

router.delete('/delete/:id', async (req, res) => {
    await Carro.deleteOne({_id : req.params.id})
    .then(() => {
        res.status(200).send("Carro deletado com sucesso");
    }).catch((err) => {
        res.status(400).send("Algo errado com o modelo, tente novamente");
        console.error(err);
    })
});

module.exports = router; 