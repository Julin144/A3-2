const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const axios = require('axios');

const Credenciais = require('../Credenciais.js');

app.use(bodyParse.json());

//model
const Data = mongoose.model('Data', {
    cpfAgendado: Number,
    nomeAgendado: String,
    sobrenomeAgendado: String,
    dataHora: String,
})


app.post('/horarioagendado', async (req, res) => {
    const { cpfAgendado, nomeAgendado, sobrenomeAgendado, dataHora } = req.body

    const data = {
        cpfAgendado,
        nomeAgendado,
        sobrenomeAgendado,
        dataHora
    }

    try {
        await Data.create(data)

        res.status(201).send(data);
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

app.get('/horarioagendado', async (req, res) => {

    try {
        const data = await Data.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).json({ erro: error })
    }

})

app.get('horarioagendado/:id', async (req, res) => {

    const cpf = req.params.id

    try {
        const data = await Data.find({ cpfAgendado: cpf })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

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
        console.log('Horario Agendado. Porta 9000')
        app.listen(9000)
    })
    .catch((err) => console.log(err))