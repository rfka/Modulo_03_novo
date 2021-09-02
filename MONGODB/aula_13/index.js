const express = require('express');
const app = express();
app.use(express.json());

const Conn = require('./models/conn/conn.js');
Conn('localhost', 27017, 'musicas');

const port = 3000;

const musica = require('./routers/musicas.routes.js');
app.use('/musicas', musica);

app.listen(port, () => {
    console.info(`Servidor rodando na porta: http://localhost:${port}`);
})