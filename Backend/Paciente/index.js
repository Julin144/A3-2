const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const axios = require("axios");

const Credenciais = require('../Credenciais.js');

const Paciente = {};
let contador = 0;

app.use(bodyParse.json());

app.get('/paciente', (req, res) => {
    res.send(Paciente)
});

app.put('/paciente', async (req, res) => {
    contador++;
    const { nome, sobrenome, CPF, numeroCarteirinha, senha } = req.body;
    Paciente[contador] = {
        contador,
        nome,
        sobrenome,
        CPF,
        numeroCarteirinha,
        senha,
        tipo
    }

    await axios.post("http://localhost:10000/eventos", {
        tipo: "PacienteCriado",
        dados: {
            contador,
            nome,
            sobrenome,
            CPF,
            numeroCarteirinha,
            senha,
            tipo
        }
    });

    res.status(201).send(Paciente[contador]);
});



app.post("/eventos", (req, res) => {
    console.log(req.body);

    res.status(200).send({ msg: "ok" });
});

app.listen(4000, () => {
    console.log('Paciente. Porta 4000')
});