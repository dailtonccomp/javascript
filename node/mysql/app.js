const express = require('express');
const app = express();

//iniciando o banco de dados
const db = require('./models/db');

//mensagem de teste
app.get("/", async (req, res) => {
    res.send("Página inicial modificado.");
});



app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080://localhost:8080");
});