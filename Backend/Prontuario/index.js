const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const axios = require('axios');

const Credenciais = require('../Credenciais.js');

app.use(bodyParse.json());

// Model
const Prontuario = mongoose.model('Prontuario', {
    cpfPaciente: String,
    queixaPrincipal: String,
    histDoencaAtual: String,
    histPatologicoProgressiva: String,
    histFisiologica: String,
    histfamiliar: String,
    histPessoal: String,
    diagnostico: String,
    recomendaçoes: String,
    parecerElaboradoPor: String,
    exameFisico: String,
    examePsiquico: String,
});

app.post('/prontuario/:id', async (req, res) => {
    const { queixaPrincipal, histDoencaAtual, histPatologicoProgressiva, histFisiologica, histfamiliar, histPessoal, diagnostico, recomendaçoes, parecerElaboradoPor, exameFisico, examePsiquico } = req.body;

    const prontuario = {
        cpfPaciente: req.params.id,
        queixaPrincipal,
        histDoencaAtual,
        histPatologicoProgressiva,
        histFisiologica,
        histfamiliar,
        histPessoal,
        diagnostico,
        recomendaçoes,
        parecerElaboradoPor,
        exameFisico,
        examePsiquico,
    };

    try {
        await Prontuario.create(prontuario);
        res.status(201).send(prontuario);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

app.get('/prontuario', async (req, res) => {
    try {
        const prontuario = await Prontuario.find();
        res.status(200).send(prontuario);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

app.get('/prontuario/:id', async (req, res) => {
    const cpf = req.params.id;

    try {
        const prontuario = await Prontuario.find({ cpfPaciente: cpf });
        res.status(200).send(prontuario);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

app.post("/eventos", (req, res) => {
    console.log(req.body);
    res.status(200).send({ msg: "ok" });
});

if (process.env.NODE_ENV !== 'test') {
    mongoose
        .connect(
            `mongodb+srv://${Credenciais.DBUser}:${Credenciais.DBPassword}@projetoangelaapi.rwhx6wh.mongodb.net/?retryWrites=true&w=majority`
        )
        .then(() => {
            console.log('Conectou ao banco!');
            console.log('Prontuario. Porta 8000');
            app.listen(8000);
        })
        .catch((err) => console.log(err));
}

module.exports = app; 
