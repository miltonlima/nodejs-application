const { response } = require("express");
const express = require("express");

const app = express();

app.get("/primeira-rota", (request, response) => {
    return response.send("Acessou a primeira rota");
});

app.listen(4002, ()  => console.log("Servidor está rodando na porta 4002"));