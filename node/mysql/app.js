const express = require('express');
const app = express();
const User = require('./models/User');

//iniciando o banco de dados
//const db = require('./models/db');

// Função para iniciar informação no HTML
app.get("/", async (req, res) => {
    res.send("Página HOME");
});

app.get("/contato", async (req, res) => {
    res.send("Página de CONTATO");
});
//no lugar de get deve ser post para não aparecer os dados.
app.get("/cadastrar", async (req, res) => {
    const isadora = await User.create({usu_nome: "Isadora", usu_login: "pitote", usu_senha: "123456"});
    console.log("Isadora incluido com ID: ", isadora.id);

    res.send("Dados cadastrado");
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080://localhost:8080");
});