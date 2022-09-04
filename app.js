const { response } = require("express");
const express = require("express");

const app = express();

const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});
var msg;
con.connect(function (err) {
    if (err) throw err;
    msg = "Connected";
});

app.get("/", async (req, res) => {
    if(!msg){
        msg = "Not connected";
    }
    res.send(msg);
});

/*
app.get("/primeira-rota", (request, response) => {
    return response.json({
        message: "Acessou a primeira rota com nodemon",
    });
});
*/


app.listen(4002, () => console.log("Servidor está rodando na porta 4002"));