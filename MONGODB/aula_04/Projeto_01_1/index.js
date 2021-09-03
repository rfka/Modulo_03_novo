// inportar o express
const express = require('express');
//importar o mongoose
const mongoose = require('mongoose');

//importa o modulo usuario
const Usuario = require('./models/usuario');

//conecta ao mongodb => mongodb://servidor:porta/nome_do_banco
mongoose.connect('mongodb://localhost:27017/usuarios', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



// const usuario1 = new Usuario({
//     nome: 'Rafael',
//     sobrenome: 'Kaminski',
//     cpf: '12345678910',
//     idade: '1982-12-01',
//     senha: '123456'
// });

// um dos metodos de como salvar no mongodb
// usuario1.save()
// .then(() =>{
//     console.log('Usuario Salvo');
// })
// .catch((err) =>{
//     console.error(err);
// })

//lista todos os usuarios
Usuario.find({})
.then((usuarios) =>{
    console.log(usuarios)}) .catch((err) =>{console.error(err)})

//lista um usuario por ID
Usuario.find({_id:'**********'})
.then((usuarios) =>{
    console.log('Retorna por ID', usuarios)
}) 
.catch((err) =>{
    console.error(err)
})

//encontrar um elemento po ID e excluir 
Usuario.findByIdAndDelete('id_que_quer_deletar')
.then(() =>{
    console.log('Usuario excluido com sucesso!!')
})
.catch((err) =>{
    console.error(err)
})


//indica que o app vai usar express
const app = express();
//seta a porta para o servidor node
const port = 3002;

app.get('/', (req,res) =>{
    res.send('Bem vindo à aula de <b>MONGODB</b>');
})


app.listen(port, () =>{
    console.info(`App rodando em: http://localhost:${3000}`);
});