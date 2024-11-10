const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const axios = require('axios');

const Credenciais = require('../Credenciais.js');


app.use(bodyParse.json());

//model
const Dependente = mongoose.model('Dependente', {
    cpfPaciente: String,
    cpfDependente: String,
    nomeDependente: String,
    sobrenomeDependente: String,
    numeroCarteirinha: String,
})

app.post('/paciente/:id/dependente', async (req, res) => {
    const { cpfDependente, nomeDependente, sobrenomeDependente, numeroCarteirinha } = req.body;

    const dependente = {
        cpfPaciente: req.params.id,
        cpfDependente,
        nomeDependente,
        sobrenomeDependente,
        numeroCarteirinha
    }
    try {
        await Dependente.create(dependente)
    } catch (error) {
        res.status(500).json({ erro: error })
    }


    res.status(201).send(dependente);
});

app.post("/eventos", (req, res) => {
    console.log(req.body);
    res.status(200).send({ msg: "ok" });
});

mongoose
    .connect(
        `mongodb+srv://${Credenciais.DBUser}:${Credenciais.DBPassword}@projetoangelaapi.rwhx6wh.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Conectou ao banco!')
        app.listen(5000)
        console.log('Dependente. Porta 5000')
    })