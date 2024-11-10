const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const axios = require('axios');
const mongoose = require('mongoose');
const connectDB = require('./database');

app.use(bodyParse.json());

const Receita = mongoose.model('Receita', {
    cpfPertencenteReceita: Number,
    dataValidade: String,
});

app.post('/receita', async (req, res) => {
    const { cpfPertencenteReceita, dataValidade } = req.body;
    const receita = { cpfPertencenteReceita, dataValidade };

    try {
        await Receita.create(receita);
        await axios.post("http://localhost:10000/eventos", {
            tipo: "ReceitaCriada",
            dados: receita,
        });
        res.status(201).json({ message: 'Receita inserida no sistema com sucesso!' });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

app.post("/eventos", (req, res) => {
    console.log(req.body);
    res.status(200).send({ msg: "ok" });
});

if (process.env.NODE_ENV !== 'test') {
    connectDB()
        .then(() => {
            console.log('Conectou ao banco!');
            app.listen(7000, () => console.log('Receita.Porta 7000'));
        })
        .catch((err) => console.log(err));
}

module.exports = { app, Receita };
